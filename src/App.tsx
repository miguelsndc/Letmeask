import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

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
      <Toaster />
      <Router>
        <Switch>
          <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rooms/new' component={NewRoom} />
            <Route exact path='/rooms/:id' component={Room} />
          </Switch>
          </AuthProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
