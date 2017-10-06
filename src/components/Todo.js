import React from 'react'
import PropTypes from 'prop-types'
import { List, Checkbox, Segment } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text, group }) => (
  <List.Item>
    <Segment color={completed ? 'grey' : 'teal'} >
      <Checkbox
        defaultChecked={completed ? true : false}
        onClick={onClick}
        label={text}
      />
    </Segment>
  </List.Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
