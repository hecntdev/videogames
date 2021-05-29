import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
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
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="orange"
          content="Editar"
          labelPosition='right'
          icon='pencil alternate'
          onClick={() => props.setOpenDescription(false)}
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
