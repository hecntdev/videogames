import React from 'react'
import { Button, Checkbox, Form, Grid, Message, Image, Header, Icon, Divider, Input, Select, TextArea, Table  } from 'semantic-ui-react'
import '../../assets/css/index.css'
import souls from '../../assets/img/souls.png'

const Edit = (props) => {
  return (
    <div className="Container">
      <Header as='h2'>
        <Icon name='paper plane outline' />
        <Header.Content>Editar VideoJuego {props.data.name}</Header.Content>
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
            value={props.data.name}
            name='name'
          />
          <Form.Select
            fluid
            label='Año'
            options={props.years}
            placeholder='Año publicacion'
            onChange={(v, e) => props.handleSelect(v, e)}
            name='year'
            value={props.data.year}
          />
          <Form.Select
            fluid
            label='Desarrollador'
            options={props.developers}
            placeholder='Buscar por Desarrollador'
            name='developer'
            value={props.data.developer.name}
            onChange={(v, e) => props.handleSelect(v, e)}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Consola'
            options={props.consoles}
            placeholder='Consola'
            name='console'
            value={props.data.console.name}
            onChange={(v, e) => props.handleSelect(v, e)}
          />
        </Form.Group>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Consolas</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {props.data.console.map(( listValue, index ) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell collapsing>
                    <Icon name={listValue.name.includes('Playsta') ? 'playstation' : listValue.name.includes('Xbox') ? 'xbox' : listValue.name.includes('Nintendo') ? 'nintendo switch' : 'gamepad' } /> {listValue.name}
                  </Table.Cell>
                  <Table.Cell textAlign='right'>
                    <Button negative>Eliminar</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Descripción'
          placeholder='Descripción ...'
          name="description"
          value={props.data.description}
        />
        <Button
          content="Editar"
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
