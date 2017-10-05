const groups = (state = [{text: 'Family'}], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}

export default groups;
