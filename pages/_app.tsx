import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#5956E9',
    secondary: '#999FAE',
    darkText: '#292930',
    darkBackground: '#27272E'
  },
  fontSizes: {
    links: '16px',
    h1: '96px',
    description: '18px',
    albumTitle: '24px'
  },
  fonts: {
    primary: ["'DM Sans', sans-serif"],
    secondary: ["'Poppins', sans-serif"]
  },
  sizes: {
    wrapper: '1040px',
    header: '1280px'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
