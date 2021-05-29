import React, { Component } from 'react'
import axios from 'axios'
import AddC from '../../components/Add'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

class Add extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pass: ''
    }

    // this.handleText = this.handleText.bind(this)

  }

  componentWillMount() {
    console.log(process.env.REACT_APP_URI,'<---');
  }

  componentDidMount() {

  }

  render() {
    return (
      <AddC

      />
    )
  }
}

export default Add
