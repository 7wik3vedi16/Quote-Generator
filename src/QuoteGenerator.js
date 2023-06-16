import React from 'react';

const QuoteGenerator = ({ onClick, buttonColor }) => {
  return (
    <div>
      <button className="button" onClick={onClick} style={{ backgroundColor: buttonColor }}>
        Jus Click It
      </button>
    </div>
  );
};

export default QuoteGenerator;
