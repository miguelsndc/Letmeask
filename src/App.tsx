import './services/firebase'

import { Home } from './pages/Home/'
import { GlobalStyles } from './styles/globals'
import { ThemeProvider } from 'styled-components'
import LightTheme from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
