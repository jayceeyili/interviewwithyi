import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'

let AddGroup = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addGroup(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Group
        </button>
      </form>
    </div>
  )
}
AddGroup = connect()(AddGroup)

export default AddGroup;
