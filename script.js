let currentDate = new Date();

const entryArea = document.getElementById('Jounral-Entry');
const dateDisplay = document.getElementById('Date-Display');
const saveStatus = document.getElementById('Save-Status');

function formatDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateDateDisplay(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function loadEntry(date) {
    const key = formatDateKey(date);
    const entry = localStorage.getItem(key) || '';
    entryArea.value = entryText;
    entryArea.readOnly() = false;
    const todayKey = formatDateKey(new Date());
    if (key !== todayKey) {
        entryArea.readOnly = true;
    }
    clearTimeout(saveTimer);
    saveStatus.textContent = '';
}
function performAutosave() {
    const key = formatDateKey(currentDate); 
}
document.querySelector('.prev-day').addEventListener('click', () => {
    // 1. Save the currently viewed entry immediately
    performAutosave();

    // 2. Decrement the date by 1 day
    currentDate.setDate(currentDate.getDate() - 1);

    // 3. Load the new day's entry
    loadEntry(currentDate);
});

// Handle the "Next Day" button click
document.querySelector('.next-day').addEventListener('click', () => {
    // 1. Save the currently viewed entry immediately
    performAutosave();

    // 2. Increment the date by 1 day
    currentDate.setDate(currentDate.getDate() + 1);

    // 3. Load the new day's entry
    loadEntry(currentDate);
});

// Final check on the 'FINISH WRITING' button
document.getElementById('finish-button').addEventListener('click', () => {
    // This button should only be enabled when viewing 'today'
    if (formatDateKey(currentDate) === formatDateKey(new Date())) {
        clearTimeout(saveTimer);
        performAutosave();
        alert('Journal entry is complete and saved!');
    } else {
        alert('You can only finalize today\'s entry.');
    }
});

