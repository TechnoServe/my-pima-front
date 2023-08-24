import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: 'rgba(8, 124, 143, 1)',
            color: '#FFF',
            border: 'none',
            boxShadow: '2px 8px 13px 1px rgba(17, 38, 146, 0.15)',
            transition: 'box-shadow 0.3s ease-in-out'
          }
        }
      }
    },

    MuiTab: {
      styleOverrides: {
        root: {
          '.MuiTab-textColorPrimary': {
            color: '#25245D'
          }
        }
      }
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none'
            },
            backgroundColor: '#F1F5F9'
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2A59FE'
            }
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: '8px' // Add margin above the menu container
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#F1F5F9'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          fontSize: '12px'
        }
      }
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',
          color: '#2B2B2B'
        }
      }
    }
  },
  typography: {
    fontFamily: 'inherit'
  }
})

export default theme
