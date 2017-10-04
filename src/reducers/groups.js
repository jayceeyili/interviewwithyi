const groups = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      console.log(action);
      return [
        ...state,
        {
          text: action.text,
          color: 'red'
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
