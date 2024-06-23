import React from 'react';

const Button = ({Text, BG}) => {
  return (
    <div>
      <button className={`text-sm font-semibold p-3 text-white font-serif rounded-3xl h-13 w-[290px]  ${BG}`}>
        {Text}
      </button>
    </div>
  );
};

export default Button;
