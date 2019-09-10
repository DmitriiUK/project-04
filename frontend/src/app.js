import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'


import BikesIndex from './components/bikes/Index'
import BikesShow from './components/bikes/Show'
import BrandsIndex from './components/brands/Index'
import BrandsShow from './components/brands/Show'

import 'bulma'
import './style.scss'

class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/bikes/:id" component={BikesShow} />
          <Route path="/bikes" component={BikesIndex} />
          <Route path="/brands/:id" component={BrandsShow} />
          <Route path="/brands" component={BrandsIndex} />

        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
