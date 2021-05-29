import React from 'react'
import { Button, Checkbox, Form, Grid, Message, Image, Header, Icon, Divider, Input, Select, TextArea, Table  } from 'semantic-ui-react'
import '../../assets/css/index.css'
import souls from '../../assets/img/souls.png'

const Add = (props) => {
  return (
    <div className="Container">
      <Header as='h2'>
        <Icon name='paper plane outline' />
        <Header.Content>Agregar VideoJuego</Header.Content>
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
            value={props.form.name}
            name='name'
            onChange={props.handleText}
            error={props.form.name_e}
          />
          <Form.Select
            fluid
            label='Año'
            options={props.years}
            placeholder='Año publicacion'
            onChange={(v, e) => props.handleSelect(v, e)}
            name='year'
            value={props.form.year}
            error={props.form.year_e}
          />
          <Form.Select
            fluid
            label='Desarrollador'
            options={props.developers}
            placeholder='Buscar por Desarrollador'
            name='developer'
            value={props.form.developer.name}
            onChange={(v, e) => props.handleSelect(v, e)}
            error={props.form.developer_e}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Consola'
            options={props.consoles}
            placeholder='Consola'
            name='console'
            onChange={(v, e) => props.handleSelectConsole(v, e)}
            error={props.form.console_e}
          />
        </Form.Group>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Consolas</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {props.form.console.map(( listValue, index ) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell collapsing>
                    <Icon name={listValue.name.includes('Playsta') ? 'playstation' : listValue.name.includes('Xbox') ? 'xbox' : listValue.name.includes('Nintendo') ? 'nintendo switch' : 'gamepad' } /> {listValue.name}
                  </Table.Cell>
                  <Table.Cell textAlign='right'>
                    <Button negative onClick={() => props.handleDelete(listValue)}>Eliminar</Button>
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
          value={props.form.description}
          onChange={props.handleText}
          error={props.form.description_e}
        />
        <Button
          content="Agregar"
          labelPosition='right'
          icon='checkmark'
          onClick={props.handleSend}
          positive
        />
      </Form>
    </div>
  )
}

export default Add
