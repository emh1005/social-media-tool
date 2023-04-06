import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContentCreationTool from './contentCreationTool';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// create a theme for the app
const theme = createTheme({
  palette: {
    primary: {
      main: "#8244bd"
    },
    secondary: {
      main: "#b580ff"
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContentCreationTool />
    </ThemeProvider>
  </React.StrictMode>
</>
);