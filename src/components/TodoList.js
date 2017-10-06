import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import img from '../todo.jpg'
import { List, Image, Popup, Icon } from 'semantic-ui-react'

const TodoList = ({ todos, onTodoClick }) => {
  const empty = todos.length === 0;
  const style = {
    borderRadius: 30,
    opacity: 0.7,
    padding: '0.5em',
  }

  return (
    <div>
      {empty ? (
        <Popup trigger={<Image src={img} className='img' />}
        position='top right'
        inverted
        style={style}
        >
          <Popup.Content>
            <Icon name='idea' />
          </Popup.Content>
        </Popup>
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
