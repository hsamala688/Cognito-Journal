import re
import numpy as np
import datetime, timedelta
import spacy
import nltk
from collections import Counter
from datatime import datatime
from typing import Dict, List, Tuple, Optional
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('averaged_perceptron_tagger', quiet=True)

class CognitiveNLPAnalyzer():
    def _init__(self, nlp, stop_words):
        self.nlp = spacy.load("en_core_web_sm")
        self.stop_words = set(stopwords.words('english'))

    def analyze_entry(self, text: str, timestamp: Optional[datetime] = None) -> Dict:
        if not text or not text.strip():
            return self._empty_analysis()
        
        return {
            'timestamp': timestamp or datetime.now(),
            'text_length': len(text),
            'lexical_metrics': self.analyze_lexical_diversity(text),
            'syntactic_metrics': self.analyze_syntax_complexity(text),
            'semantic_metrics': self.analyze_semantic_coherence(text),
            'sentiment_metrics': self.analyze_sentiment(text),
            'linguistic_features': self.extract_linguistic_features(text),
            'cognitive_markers': self.detect_cognitive_markers(text)
        }
    
    def analyze_lexical_diversity(self ,text:str):
        words = word_tokenize(text.lower())
        words = [w for w in words if w.isalpha()]
        if not words:
            return {'error': 'No valid words found'}
        
        unique_words = set(words)

'''Currently an error with datatime intialization, will have to look into it, unsure what is happening
Could be potential issue on my end with my own virtual environment, so take a look and see if the packages download
okay on your end
Finished some really rudimentary set up stuff, will look into a little later website intialization with github pages'''
