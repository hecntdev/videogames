import React, { Component } from 'react'
import axios from 'axios'
import EditC from '../../components/Edit'
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

class Edit extends Component {

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
    const id = this.props.match.params.id;
    axios.post(`${process.env.REACT_APP_URI}/game/findById`, {"id": id }).then(res => {
      console.log(res,'<------');
    })
  }

  render() {
    return (
      <EditC

      />
    )
  }
}

export default withRouter(Edit)
