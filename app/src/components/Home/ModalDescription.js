import React from 'react'
import { Button, Header, Image, Modal, Icon, Table } from 'semantic-ui-react'
import '../../assets/css/index.css'

const ModalDescription = (props) => {
  return (
    <Modal
      onClose={() => props.setOpenDescription(false)}
      onOpen={() => props.setOpenDescription(true)}
      open={props.toggleDescription}
    >
      <Modal.Header>{props.form.name}</Modal.Header>
      <Modal.Content image>
        <Image size='big' src={props.form.image} wrapped />
        <Modal.Description>
          <Header>Videojuego - {props.form.name}</Header>
          <p>
            {props.form.description}
          </p>
          <h4>Desarrollador:</h4>
          <p>{props.form.developer.name}</p>
          <h4>Consolas:</h4>
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
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="orange"
          content="Editar"
          labelPosition='right'
          icon='pencil alternate'
          onClick={() => props.handleEdit(props.form)}
        />
        <Button
          content="Ok"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.setOpenDescription(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDescription
