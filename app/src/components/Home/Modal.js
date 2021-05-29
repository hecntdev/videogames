import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import '../../assets/css/index.css'

const ModalV = (props) => {
  return (
    <Modal
      closeIcon
      open={props.toggle}
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(false)}
    >
      <Header icon='archive' content='Imagen' onClick={() => props.setOpen(false)} />
      <Modal.Content>
        <Image src={props.image} fluid />
      </Modal.Content>
    </Modal>
  )
}

export default ModalV
