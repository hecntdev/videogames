import React, { Component } from 'react'
import axios from 'axios'
import HomeC from '../../components/Home'
import swal from 'sweetalert';

import '../../assets/css/index.css'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      games: [],
      open: false,
      toggleDescription: false,
      image: '',
      yearsF: [],
      developersF: [],
      options: {
        page: 1,
        sizePerPage: 5,
        sizePerPageList: [ {
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: '15', value: 15
        } ]
      },
      form: {
        name: "",
        image: "",
        description: "",
        developer: { name: "" }
      }
    }

    this.handleText = this.handleText.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleDev = this.handleDev.bind(this)
    this.handleImg = this.handleImg.bind(this)
    this.setOpen = this.setOpen.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleView = this.handleView.bind(this)
    this.setOpenDescription = this.setOpenDescription.bind(this)
    this.handleGoto = this.handleGoto.bind(this)

  }

  componentWillMount() {
    // this.props.getConsultaTipoBitacora()
    // this.props.getConsultaPersonalInterno()
    console.log(process.env.REACT_APP_URI,'<---');
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_URI}/home/games`)
    .then(res => {
      const games = res.data;
      let years = []
      let developers = []
      let yearsF = []
      let developersF = []

      games.forEach((item, i) => {
        years.push(item.year)
        developers.push(item.developer.name)
      });

      years = [...new Set(years)];
      developers = [...new Set(developers)];

      years.sort()
      developers.sort()

      years.forEach((item, i) => {
        yearsF.push({ key:i, "text": item, value: item })
      });

      developers.forEach((item, i) => {
        developersF.push({ key:i, "text": item, value: item })
      });

      console.log(yearsF);
      console.log(developersF);

      this.setState({ games, yearsF, developersF });
    })
  }

  handleYear(v, e) {
    console.log(e.value);
    axios.post(`${process.env.REACT_APP_URI}/home/findYear`, {"year": e.value}).then(res => {
      const games = res.data
      this.setState({ games })
    })
  }

  handleDev(v, e) {
    console.log(e.value);
    axios.post(`${process.env.REACT_APP_URI}/home/findDevelop`, {"developer": e.value}).then(res => {
      const games = res.data
      this.setState({ games })
    })
  }

  handleText(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
    axios.post(`${process.env.REACT_APP_URI}/home/findName`, {"name": event.target.value}).then(res => {
      const games = res.data
      this.setState({ games })
    })
  }

  handleImg(v, e) {
    this.setState({ open: true, image: e.value.image })
  }

  setOpen(v) {
    this.setState({ open: v })
  }

  setOpenDescription(v) {
    this.setState({ toggleDescription: v })
  }

  handleDelete(v, e) {
    swal({
      title: "¿Estas seguro que deseas eliminar el titulo " + e.value.name + " ?",
      text: "Una vez que lo elimines no podras recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.post(`${process.env.REACT_APP_URI}/home/deleteOne`, {"name": e.value.name, "year": e.value.year}).then(res => {
          window.location.reload();
        })
      } else {
        swal("No se elimino el registro!");
      }
    });
  }

  handleView(v) {
    this.setState({ toggleDescription: true, form: v })
  }

  handleGoto() {
    window.location = "add"
  }

  render() {
    return (
      <HomeC
        data={this.state.games}
        handleText={this.handleText}
        handleYear={this.handleYear}
        handleImg={this.handleImg}
        handleDev={this.handleDev}
        handleDelete={this.handleDelete}
        handleView={this.handleView}
        handleGoto={this.handleGoto}
        years={this.state.yearsF}
        developers={this.state.developersF}
        toggle={this.state.open}
        image={this.state.image}
        setOpen={this.setOpen}
        toggleDescription={this.state.toggleDescription}
        setOpenDescription={this.setOpenDescription}
        form={this.state.form}
      />
    )
  }
}

export default Home
