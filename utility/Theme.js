// Theme.js
export const lightTheme = {
    backgroundColor: '#ffffff',
    textColor: '#000000',
} 
  
  export const darkTheme = {
    backgroundColor: '#333333',
    textColor: '#ffffff',

  };
  
  export const Theme = (isDarkMode) => (isDarkMode ? darkTheme : lightTheme);
  