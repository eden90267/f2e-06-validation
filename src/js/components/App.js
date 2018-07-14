import React from 'react'
import {Route} from 'react-router-dom'

import CreateAccount from './CreateAccount'
import 'components/App.scss'


const App = () =>
  <Route path="/" component={CreateAccount} />


export default App