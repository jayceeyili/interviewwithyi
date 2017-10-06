import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import img from '../todo.jpg'
import { List, Image } from 'semantic-ui-react'

const TodoList = ({ todos, onTodoClick }) => {
  const empty = todos.length === 0;

  return (
    <div>
      {empty ? (
        <Image src={img} className='img' />
      ) : (
      <List >
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            />
        )}
      </List>
      )}
    </div>
)}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
