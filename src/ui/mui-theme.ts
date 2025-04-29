import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { size: 'medium' },
              style: {
                ".MuiOutlinedInput-input": {
                  padding: "14.5px 14px"
                },
                ".css-q7n77g-MuiFormLabel-root-MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)"
                }
              }
            }
          ]
        }
      }
    }
  },
  palette: {
    primary: {
      100: '#A7B6BE',
      200: '#8DA0AB',
      300: '#748A98',
      400: '#5A7485',
      500: '#2F4550', // original
      600: '#263841',
      700: '#1E2B32',
      800: '#151E23',
      900: '#0D1114',
      main: '#2F4550', 
      contrastText: '#F4F4F9', 
    },
    secondary: {
      100: '#DFF1F0',
      200: '#CBE8E6',
      300: '#B8DBD9', // original sky
      400: '#A5CFCD',
      500: '#92C3C1',
      600: '#7FB7B5',
      700: '#6CABA9',
      800: '#599F9D',
      900: '#469391',
      main: '#B8DBD9', 
      contrastText: '#1A1A1A',
    },
  }
})

export default theme;