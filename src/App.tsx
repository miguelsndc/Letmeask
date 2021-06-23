import './services/firebase'

import { Home } from './pages/Home/'
import { NewRoom } from './pages/newRoom'
import { GlobalStyles } from './styles/globals'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LightTheme from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms/new' component={NewRoom} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
