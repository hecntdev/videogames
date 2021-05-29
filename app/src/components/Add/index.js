import React from 'react'
import { Button, Checkbox, Form, Grid, Message, Image, Header, Icon, Divider, Input, Select, TextArea,  } from 'semantic-ui-react'
import '../../assets/css/index.css'
import souls from '../../assets/img/souls.png'

const Add = (props) => {
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
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            options={[]}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Opinion'
          placeholder='Opinion'
        />
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='joe@schmoe.com'
          error={{
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          label='Label with htmlFor'
        />
      </Form>
    </div>
  )
}

export default Add
