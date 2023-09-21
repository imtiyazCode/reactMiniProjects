import React from 'react';

const Keypad = ({ handleClick, handleClear, handleEqual }) => {
  const buttonConfigurations = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '=', 'C', '+'
  ];

  return (
    <div className="keypad">
      {buttonConfigurations.map((label, index) => (
        <button
          key={index}
          className={`${
            ['/', '*', '-', '+'].includes(label) ? 'operator-keys' :
            ['=', 'C'].includes(label) ? 'fun-keys' : 'digit-keys'
          } ${index === 12 ? 'bottom-left-corner' : index === 14 ? 'bottom-right-corner' : ''}`}
          onClick={() => label === '=' ? handleEqual() : label === 'C' ? handleClear() : handleClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
