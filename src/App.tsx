import './App.css'

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { Card, Typography } from '@mui/joy';

const githubTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: '#2DA44E',
          solidHoverBg: '#2C974B',
          solidActiveBg: '#298E46',
        },
        neutral: {
          outlinedBg: '#F6F8FA',
          outlinedHoverBg: '#F3F4F6',
          outlinedActiveBg: 'rgba(238, 239, 242, 1)',
          outlinedBorder: 'rgba(27, 31, 36, 0.15)',
        },
        focusVisible: 'rgba(3, 102, 214, 0.3)',
        background: {
          body: 'lightgray',
        }
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
  fontSize: {
    lg: '4.125rem',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '6px',
          boxShadow: '0 1px 0 0 rgba(27, 31, 35, 0.04)',
          transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
          transitionProperty: 'color,background-color,box-shadow,border-color',
          ...(ownerState.size === 'md' && {
            fontWeight: 600,
            minHeight: '32px',
            fontSize: '14px',
            '--Button-paddingInline': '1rem',
          }),
          ...(ownerState.color === 'success' &&
            ownerState.variant === 'solid' && {
              '--gh-palette-focusVisible': 'rgba(46, 164, 79, 0.4)',
              border: '1px solid rgba(27, 31, 36, 0.15)',
              '&:active': {
                boxShadow: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)',
              },
            }),
          ...(ownerState.color === 'neutral' &&
            ownerState.variant === 'outlined' && {
              '&:active': {
                boxShadow: 'none',
              },
            }),
        }),
      },
    },
  },
});

const fluentTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0078D4',
          solidHoverBg: '#106EBE',
          solidActiveBg: '#005A9E',
          solidDisabledBg: '#F3F2F1',
          solidDisabledColor: '#A19F9D',
        },
        neutral: {
          outlinedBg: '#fff',
          outlinedColor: '#201F1E',
          outlinedDisabledBg: '#F3F2F1',
          outlinedDisabledColor: '#A19F9D',
          outlinedDisabledBorder: '#C8C6C4',
          outlinedBorder: '#8A8886',
          outlinedHoverBg: '#F3F2F1',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: '#EDEBE9',
        },
        focusVisible: '#323130',
        background: {
          body: 'lightblue',
        }
      },
    },
  },
  focus: {
    default: {
      outlineOffset: -1,
      outlineWidth: '1px',
    },
  },
  fontFamily: {
    body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
  },
  fontSize: {
    lg: '3.125rem',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '--Button-iconOffsetStep': 0,
          ...(ownerState.variant === 'solid' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
              outlineColor: '#fff',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
            },
          }),
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '20px',
            fontSize: '14px',
            fontWeight: 600,
            minHeight: '32px',
            borderRadius: '2px',
            paddingLeft: 20,
            paddingRight: 20,
          }),
        }),
      },
    },
  },
});


const chakraTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#319795',
          solidHoverBg: '#2C7A7B',
          solidActiveBg: '#285E61',
          outlinedColor: '#2C7A7B',
          outlinedBorder: '#2C7A7B',
          outlinedHoverBorder: undefined,
          outlinedHoverBg: '#E6FFFA',
          outlinedActiveBg: '#B2F5EA',
        },
        focusVisible: 'rgba(66, 153, 225, 0.6)',
        background: {
          body: 'lightgreen',
        }
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'Inter, var(--chakra-fontFamily-fallback)',
  },
  fontSize: {
    lg: '2.125rem',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:focus': theme.focus.default,
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            borderRadius: '0.375rem',
            paddingInline: '1rem',
          }),
        }),
      },
    },
  },
});

const mantineTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#228be6',
          solidHoverBg: '#1c7ed6',
          solidActiveBg: undefined,
          softColor: '#228be6',
          softBg: 'rgba(231, 245, 255, 1)',
          softHoverBg: 'rgba(208, 235, 255, 0.65)',
          softActiveBg: undefined,
          outlinedColor: '#228be6',
          outlinedBorder: '#228be6',
          outlinedHoverBg: 'rgba(231, 245, 255, 0.35)',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
        background: {
          body: 'lightpink',
        }
      },
    },
  },
  fontFamily: {
    body: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  fontSize: {
    lg: '5.125rem',
  },
  focus: {
    default: {
      outlineWidth: '2px',
      outlineOffset: '2px',
      outlineColor: '#339af0',
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transition: 'initial',
          borderRadius: '4px',
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            minHeight: '36px',
            fontSize: '14px',
            paddingInline: '18px',
          }),
          '&:active': {
            transform: 'translateY(1px)',
          },
        }),
      },
    },
  },
});

function App() {

  const [theme, setTheme] = useState(githubTheme)

  return (
    <CssVarsProvider theme={theme}>
      <Typography sx={{ fontSize: (theme) => theme.vars.fontSize.lg, color: (theme) => theme.vars.palette.primary.softActiveBg }} level="h1">Vite + ReactJS + Joy UI Dynamic Theme</Typography>
      <Card sx={{ background: (theme) => theme.vars.palette.background.body }}>
        <Button color="success" variant="solid">Solid</Button>
        <Button color="neutral" variant="outlined">Outlined</Button>
        <Button color="neutral" variant="outlined" disabled>Disabled</Button>
        <Button color="neutral" variant="outlined" loading>Loading</Button>
      </Card>
      <div className='card'>
        <Button color="neutral" variant="outlined" onClick={() => setTheme(githubTheme)} >Github Theme</Button>
        <Button color="neutral" variant="outlined" onClick={() => setTheme(fluentTheme)} >Fluent Theme</Button>
        <Button color="neutral" variant="outlined" onClick={() => setTheme(chakraTheme)} >Chakra Theme</Button>
        <Button color="neutral" variant="outlined" onClick={() => setTheme(mantineTheme)} >Mantine Theme</Button>
      </div>
    </CssVarsProvider>
  )
}

export default App
