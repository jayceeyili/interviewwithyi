let nextTodoId = 0
export const addTodo = (text, group) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  group
})

export const addGroup = (text, color) => (
  {
    type: 'ADD_GROUP',
    text,
    color
  }
)

export const selectGroup = (group) => ({
  type: 'SELECT_GROUP',
  group
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
