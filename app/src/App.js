import logo from './assets/img/mushroom.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/Home'
import Login from './containers/Login'
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
        <Menu.Item name='testimonials'>
          Dashboard
        </Menu.Item>
        <Menu.Item name='sign-in'>
          Sign-in
        </Menu.Item>
      </Menu>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
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
