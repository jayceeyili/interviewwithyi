import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'
import { Button, Input, Segment } from 'semantic-ui-react'

let AddGroup = ({ dispatch }) => {
  let input

  return (
    <Segment inverted color='grey'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addGroup(input.value))
        input.value = ''
      }}>
        <Input
          type='text'
          placeholder='Group'
          action
          fluid
        >
          <input ref={node => {
            input = node
          }} />
          <Button type="submit"  icon='plus'/>
        </Input>
      </form>
    </Segment>
  )
}

const mapStateToProps = (state) => ({
  group: state.groups
})

AddGroup = connect(mapStateToProps)(AddGroup)

export default AddGroup;
