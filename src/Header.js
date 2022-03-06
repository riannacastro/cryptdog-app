import React, { Component } from 'react'

import { GiSittingDog } from 'react-icons/gi'


export default class Header extends Component {
  render() {
    return (
      <div>
          <div className='logo'>
              < GiSittingDog />
          </div>
          <div className='header'>
              <h1>Cryptdog</h1>
          </div>
      </div>
    )
  }
}
