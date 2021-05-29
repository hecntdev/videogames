import React, { Component } from 'react'
import axios from 'axios'
import AddC from '../../components/Add'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

class Add extends Component {

  constructor(props) {
    super(props)
    this.state = {
      developers: [],
      years: [],
      consoles: [],
      form: {
        name: '',
        name_e: false,
        description: '',
        description_e: false,
        developer: '',
        developer_e: false,
        year: '',
        year_e: false,
        console: [],
        console_e: false,
        image: '',
        is_active: false
      }
    }

    this.handleText = this.handleText.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSelectConsole = this.handleSelectConsole.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleExist = this.handleExist.bind(this)
    this.handleSend = this.handleSend.bind(this)

  }

  componentWillMount() {
    console.log(process.env.REACT_APP_URI,'<---');
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_URI}/game/getDeveloper`).then(res => {
      const developers = res.data
      this.setState({ developers })
    })

    axios.get(`${process.env.REACT_APP_URI}/game/getConsoles`).then(res => {
      const consoles = res.data
      this.setState({ consoles })
    })

    axios.get(`${process.env.REACT_APP_URI}/game/getYears`).then(res => {
      const years = res.data
      this.setState({ years })
    })
  }

  handleText(event) {
    event.preventDefault()
    this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value } })
  }

  handleSelect(v, e) {
    this.setState({ form: { ...this.state.form, [e.name]: e.value } })
  }

  handleExist(v, arr) {
    let count = 0
    arr.forEach((item, i) => {
      if (item.name === v) {
        count++
      }
    });

    return count > 0 ? true : false
  }

  handleSelectConsole(v, e) {
    let arr = this.state.form.console
    if (!this.handleExist(e.value, arr)) {
      arr.push({ name: e.value })
      this.setState({ form: { ...this.state.form, console: arr } })
    } else {
      swal({
        icon: "error",
        title: "¡Ops!",
        text: "Ya existe el registro seleccionado, favor de seleccionar uno diferente"
      })
    }
  }

  handleDelete(d) {
    let array = this.state.form.console
    const index = array.indexOf(d);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({ form: { ...this.state.form, console: array } })
  }

  handleValidate(d) {
    let description_e = false
    let name_e = false
    let year_e = false
    let developer_e = false
    let console_e = false

    console.log(d,'<-----');

    if (d.console.length === 0) {
      console_e = { content: 'Campo requerido', pointing: 'below', }
    } else {
      console_e = false
    }

    if (d.description.length === 0) {
      description_e = { content: 'Campo requerido', pointing: 'below', }
    } else {
      description_e = false
    }

    if (d.name.length === 0) {
      name_e = { content: 'Campo requerido', pointing: 'below', }
    } else {
      name_e = false
    }

    if (d.year.length === 0) {
      year_e = { content: 'Campo requerido', pointing: 'below', }
    } else {
      year_e = false
    }

    if (d.developer.length === 0) {
      developer_e = { content: 'Campo requerido', pointing: 'below', }
    } else {
      developer_e = false
    }

    this.setState({ form: { ...this.state.form, name_e, description_e, year_e, developer_e, console_e  } })
  }

  handleSend() {
    this.handleValidate(this.state.form)

    console.log(this.state.form.name.length > 0);
    console.log(this.state.form.description.length > 0);
    console.log(this.state.form.developer.length > 0);
    console.log(this.state.form.year.length > 0);
    console.log(this.state.form.console.length > 0);

    if (
      this.state.form.name.length > 0 &&
      this.state.form.description.length > 0 &&
      this.state.form.developer.length > 0 &&
      this.state.form.year.toString().length > 0 &&
      this.state.form.console.length > 0) {
      const obj = {
          "name": this.state.form.name,
          "description": this.state.form.description,
          "developer": { "name": this.state.form.developer },
          "year": this.state.form.year,
          "console": this.state.form.console,
          "image": "https://cdn.statically.io/img/www.itl.cat/pngfile/big/226-2261066_dark-souls-firelink-pixel-art.jpg",
          "is_active": true
      }

      axios.post(`${process.env.REACT_APP_URI}/game/insertOne`, obj).then(res => {
        window.location.reload();
      })

    }
  }

  render() {
    return (
      <AddC
        form={this.state.form}
        handleText={this.handleText}
        handleSelect={this.handleSelect}
        handleSelectConsole={this.handleSelectConsole}
        handleDelete={this.handleDelete}
        handleSend={this.handleSend}
        years={this.state.years}
        consoles={this.state.consoles}
        developers={this.state.developers}
      />
    )
  }
}

export default Add
