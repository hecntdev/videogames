import React, { Component } from 'react'
import axios from 'axios'
import LoginC from '../../components/Login'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pass: ''
    }

    this.handleText = this.handleText.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

  }

  componentWillMount() {
    console.log(process.env.REACT_APP_URI,'<---');
  }

  handleLogin() {
    if (this.state.user === 'admin' && this.state.pass === 'admin') {
      window.location = "home"
    } else {
      swal({
        icon: "error",
        text: "Usuario y/o Contraseña incorrecta",
        title: "¡Ops!"
      });
    }
  }

  handleText(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {

  }

  render() {
    return (
      <LoginC
        handleLogin={this.handleLogin}
        handleText={this.handleText}
      />
    )
  }
}

export default Login
