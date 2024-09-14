import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark', isDarkMode);
    htmlElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
