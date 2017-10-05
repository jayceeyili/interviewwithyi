import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Modal, Input, Label } from 'semantic-ui-react'

let AddTodo = ({ dispatch, group }) => {
  let input;
  return (
    <Modal trigger={<Button color='green' icon='plus'/>} dimmer size='large'>
      <Modal.Content>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value, group.group))
          input.value = ''
        }}>
          <Input
            type='text'
            placeholder='Add ToDo'
            action
            fluid
          >
          <Label color='teal' pointing='right'>{group.group}</Label>
            <input ref={node => {
              input = node
            }} />
            <Button type="submit">
              Add
            </Button>
          </Input>
        </form>
      </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  group: state.selectGroup
})

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
