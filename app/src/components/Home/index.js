import React from 'react'
import { Header, Icon, Form, Grid, Message, Image, Divider, Table, Button } from 'semantic-ui-react'
import '../../assets/css/index.css'
import ModalC from './Modal.js'

const Home = (props) => {
  return (
    <div className="Container">
      <ModalC
        {...props}
      />

      <Header as='h2'>
        <Icon name='gamepad' />
        <Header.Content>
          Lista de VideoJuegos
          <Header.Subheader>Te mostramos nuestra lista actual de VideoJuegos</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />

      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Nombre' name="name" placeholder='Buscar por nombre' onChange={props.handleText}/>
          <Form.Select
            fluid
            label='Año'
            options={props.years}
            name='year'
            placeholder='Buscar por año'
            onChange={(v, e) => props.handleYear(v, e)}
          />
          <Form.Select
            fluid
            label='Desarrollador'
            options={props.developers}
            placeholder='Buscar por Desarrollador'
            onChange={(v, e) => props.handleDev(v, e)}
          />
        </Form.Group>
      </Form>

      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Año lanzamiento</Table.HeaderCell>
            <Table.HeaderCell>Imagen</Table.HeaderCell>
            <Table.HeaderCell>Descripción</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.data.map(( listValue, index ) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{listValue.name}</Table.Cell>
                <Table.Cell>{listValue.year}</Table.Cell>
                <Table.Cell>{listValue.description}</Table.Cell>
                <Table.Cell>
                  <Button color='blue' content='Ver imagen' icon='right arrow' labelPosition='right' value={listValue} onClick={(v, e) => props.handleImg(v, e)}/>
                </Table.Cell>
                <Table.Cell>
                  <Button color='red' content='Eliminar' icon='right arrow' labelPosition='right' value={listValue} onClick={(v, e) => props.handleDelete(v, e)}/>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

    </div>
  )
}

export default Home
