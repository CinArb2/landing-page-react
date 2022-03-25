import { ThemeProvider } from "styled-components";

const theme = {
  colour: {
    primary: 'transparent',
    secondary: 'white',
    tertiary: 'black',
    lightBlue: '#00ffe7',
    shadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  font: {
    size: {
      fontBase: '18px',
      extraLarge: 'clamp(3rem, 7vw, 8rem)',
      large: 'clamp(2rem, 5vw, 4rem)',
      medium: 'clamp(1.5rem, 5vw, 2.5rem)',
      small: 'clamp(1rem, 5vw, 1.5rem)',
    },
    family: 'Roboto, sans-serif',
  },
  breakpoint: {
    mobile: '375px',
    tablet: '610px',
    laptop: '1200px',
    desktop: '1600px',
  },
  spacing: {
    paddingBlockXl: '3rem',
    paddingBlockl: '2rem',
    marginBlock: '0.5rem',
    marginInline: '0.7rem',
    marginBottom: '2rem'
  }
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;