import React from 'react'
import { Button, Checkbox, Form, Grid, Message, Image, Header, Icon, Divider, Input, Select, TextArea,  } from 'semantic-ui-react'
import '../../assets/css/index.css'
import souls from '../../assets/img/souls.png'

const Edit = (props) => {
  return (
    <div className="Container">
      <Header as='h2'>
        <Icon name='paper plane outline' />
        <Header.Content>Agregar nuevo VideoJuego</Header.Content>
      </Header>
      <Divider />
      <Message
        info
        icon='comment alternate outline'
        header='¡Recuerda!'
        content='Todos los campos son requeridos'
      />
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Nombre VideoJuego'
            placeholder='VideoJuego ...'
          />
          <Form.Select
            fluid
            label='Año'
            options={props.developers}
            placeholder='Año publicacion'
            onChange={(v, e) => props.handleDev(v, e)}
          />
          <Form.Select
            fluid
            label='Desarrollador'
            options={props.developers}
            placeholder='Buscar por Desarrollador'
            onChange={(v, e) => props.handleDev(v, e)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Consola'
            options={props.developers}
            placeholder='Consola'
            onChange={(v, e) => props.handleDev(v, e)}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Descripción'
          placeholder='Descripción ...'
        />
        <Button
          content="Agregar"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.setOpenDescription(false)}
          positive
        />
      </Form>
    </div>
  )
}

export default Edit
