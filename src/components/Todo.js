import React from 'react'
import PropTypes from 'prop-types'
import { Button, Segment } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text, group }) => (
  <Segment as={Button}
    color={completed ? 'grey' : 'teal'}
    defaultChecked={completed ? true : false}
    onClick={onClick}
    fluid>
    {text}
  </Segment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
