import React from 'react'
import { Button, Checkbox, Form, Grid, Message, Image } from 'semantic-ui-react'
import '../../assets/css/index.css'
import souls from '../../assets/img/souls.png'

const Login = (props) => {
  return (
    <div className="Container">
      <Grid divided='vertically'>
        <Grid.Row columns={2} className="centered">
          <Grid.Column>
            <Message
              icon='hand point right outline'
              header='Bienvenido a VideoJuegos'
              content='Para poder ingresar a la plataforma ingresa tu Usuario y Contraseña por favor'
              info
            />
            <Form>
              <Form.Field>
                <label>Usuario</label>
                <input placeholder='Usuario ...' name="user" onChange={props.handleText} />
              </Form.Field>
              <Form.Field>
                <label>Contraseña</label>
                <input placeholder='Contraseña ...' name="pass" onChange={props.handleText} type="password" />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Recordar Usuario' name="" />
              </Form.Field>
              <Button type='submit' onClick={props.handleLogin}>Iniciar Sesión</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Image src={souls} size='big' className="centered" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Login
