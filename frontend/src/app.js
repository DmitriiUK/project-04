import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/common/Navbar'

import { HashRouter, Route, Switch } from 'react-router-dom'


import BikesIndex from './components/bikes/Index'
import BikesShow from './components/bikes/Show'
import BrandsIndex from './components/brands/Index'
import BrandsShow from './components/brands/Show'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Home from './components/pages/Home'

import 'bulma'
import './style.scss'

class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/bikes/:id" component={BikesShow} />
          <Route path="/bikes" component={BikesIndex} />
          <Route path="/brands/:id" component={BrandsShow} />
          <Route path="/brands" component={BrandsIndex} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />

        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
