import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { NewRoom } from './pages/newRoom'
import { Home } from './pages/Home/'
import { Room } from './pages/Room'

import { AuthProvider } from './context/AuthContext'
import { GlobalStyles } from './styles/globals'

import LightTheme from './styles/themes/light'

import './services/firebase'
function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <AuthProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/rooms/new' component={NewRoom} />
          </AuthProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
