import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import QuoteGenerator from './QuoteGenerator';
import QuoteDisplay from './QuoteDisplay';

const App = () => {
  const [quote, setQuote] = useState('');
  const [pageColor, setPageColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');
  const [quoteColor,setQuoteColor]=useState('');

  useEffect(() => {
    fetchQuote();
    setPageColor(generateRandomColor());
    setButtonColor(generateRandomColor());
    setQuoteColor(generateRandomColor());
  }, []);

  const fetchQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((response) => {
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleButtonClick = () => {
    fetchQuote();
    setPageColor(generateRandomColor());
    setButtonColor(generateRandomColor());
    setQuoteColor(generateRandomColor());
  };
  

  return (
    <div className="app" style={{ backgroundColor: pageColor }}>
      <div className="container">
        <h1 className="title">Want Another One</h1>
        <QuoteGenerator onClick={handleButtonClick} buttonColor={buttonColor} />
        <QuoteDisplay quote={quote} quoteColor={quoteColor} />
      </div>
    </div>
  );
};

export default App;
