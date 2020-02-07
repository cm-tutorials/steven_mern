import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
  render () {
    return (
      <div className="Login">
        Hey! This is login!

        <h4 className="">Redirect to Register!!</h4>
        <Link
          to="/register"
        >
        Redirect
        </Link>
      </div>
    )
  }
}

export default Login
