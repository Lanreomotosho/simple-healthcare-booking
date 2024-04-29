import React from 'react';
import logo from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <img 
      src={logo} 
      alt='Ask me logo' 
      className='logo' 
      style={{
        width: '118px', // Set the width to your desired size
        height: '50px', // Automatically adjust the height to maintain aspect ratio
        position: 'fixed', // Make the logo fixed
        top: '20px', // Adjust the top position as needed
        left: '20px', // Adjust the left position as needed
      }} 
    />
  );
};

export default Logo;
