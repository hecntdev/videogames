import React, { Component } from 'react'
import axios from 'axios'
import EditC from '../../components/Edit'
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      game: {},
      years: [],
      consoles: [],
      developers: []
    }

    this.handleSelect = this.handleSelect.bind(this)

  }

  componentWillMount() {
    console.log(process.env.REACT_APP_URI,'<---');
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.post(`${process.env.REACT_APP_URI}/game/findById`, {"id": id }).then(res => {
      const game = res.data
      this.setState({ game })
    })

    axios.get(`${process.env.REACT_APP_URI}/game/getDeveloper`).then(res => {
      const years = res.data
      this.setState({ years })
    })

    axios.get(`${process.env.REACT_APP_URI}/game/getConsoles`).then(res => {
      const consoles = res.data
      this.setState({ consoles })
    })

    axios.get(`${process.env.REACT_APP_URI}/game/getYears`).then(res => {
      const developers = res.data
      this.setState({ developers })
    })

  }

  handleSelect(v, e) {
    console.log(v);
    console.log(e);
  }

  render() {
    return (
      <EditC
        data={this.state.game}
        years={this.state.years}
        consoles={this.state.consoles}
        developers={this.state.developers}
        handleSelect={this.handleSelect}
      />
    )
  }
}

export default withRouter(Edit)
