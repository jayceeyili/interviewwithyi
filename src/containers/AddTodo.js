import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch, groups }) => {
  let input, select;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, select.value))
        input.value = ''
      }}>
        <select ref={node => {
            select = node
          }}>
          { groups.map((group, i) => (
            <option value={group.text} key={i}>{ group.text }</option>
          ))}
        </select>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  groups: state.groups
})

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
