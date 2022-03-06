import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

export default class Routes extends Component {
  render() {
    return (
      <div>
          <Route path='/home' component={Home}/>
      </div>
    )
  }
}

