import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles//theme"
import GlobalStyles from "./styles/global"
import { Routes } from './routes'
import { BasketProvider } from './hooks/basketManager'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <BasketProvider>
        <Routes/>
      </BasketProvider>
    </ThemeProvider>

  </React.StrictMode>,
)
