import React from 'react';

const QuoteDisplay = ({ quote, quoteColor }) => {
  return (
    <div className="quote" style={{ color: quoteColor }}>
      <p>"{quote}"</p>
    </div>
  );
};

export default QuoteDisplay;
