import React from 'react';

const Button = ({ text, onClick, borderRadius, color, className }) => {
  let bgColorClass;
  let textColor='slate-600'

  // Determine background color class based on the color prop
  switch (color) {
    case 'primary':
      bgColorClass = 'bg-purple-500 hover:bg-purple-600';
      textColor='white';
      break;
      case 'secondary':
          bgColorClass = 'bg-gray-500 hover:bg-gray-600';
          textColor='white';
      break;
    case 'white':
      bgColorClass = 'bg-white hover:text-slate-800 transition ';
      break;
    default:
      bgColorClass = 'bg-purple-500 hover:bg-purple-600 text-white';
  }

  if(!borderRadius){
    borderRadius='md'
  }

  return (
    <button
      className={`px-4 py-2 rounded-${borderRadius} text-${textColor} ${bgColorClass} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 hover:-translate-y-1 transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
