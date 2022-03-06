import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { GiSittingDog } from 'react-icons/gi'
import './css/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
          <div className='logo'>
              < GiSittingDog />
          </div>
          <div className='header'>
              <h1>Cryptdog</h1>
          </div>
          <div className='navlink'>
            
            <NavLink
              to="/home"
              id="link"
              >Home</NavLink>
              <NavLink
              to="/trending"
              id="link"
              >Trending</NavLink>
              <NavLink
              to="/portfolio"
              id="link"
              >Portfolio</NavLink>
              <NavLink
              to="/register"
              id="link"
              >Register</NavLink>
              <NavLink
              to="/signin"
              id="link"
              >Signin</NavLink>
          </div>
      </div>
    )
  }
}
