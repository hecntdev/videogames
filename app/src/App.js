import logo from './assets/img/mushroom.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/Home'
import Login from './containers/Login'
import Add from './containers/Add'
import Edit from './containers/Edit'
import { Menu } from 'semantic-ui-react'

function App() {

  return (
    <>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>
        <Menu.Item name='features'>
          VideoJuegos
        </Menu.Item>
        <Menu.Item name='Dashboard' onClick={() => window.location = "/home"}>
          Dashboard
        </Menu.Item>
        <Menu.Item name='sign-in' onClick={() => window.location = "/"}>
          Sign-in
        </Menu.Item>
      </Menu>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
