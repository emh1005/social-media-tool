import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContentCreationTool from './contentCreationTool';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet"></link>
  {/* <h1>Social Media Content Creation Tool</h1>
  <p>Select a social media platform:</p>
  <input type="radio" id="fb" value="facebook" name="social" onChange="sendSelection()" />
  <label>Facebook</label><br />
  <input type="radio" id="twitter" value="twitter" name="social" />
  <label>Twitter</label><br />
  <input type="radio" id="instagram" value="instagram" name="social" />
  <label>Instagram</label><br />

  <p id="content"></p> */}
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  <ThemeProvider theme={theme}>
    <ContentCreationTool />
  </ThemeProvider>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
