const selectGroup = (state = {group: 'Family'}, action) => {
  switch (action.type) {
    case 'SELECT_GROUP':
      return {group: action.group}
    default:
      return state
  }
}

export default selectGroup;
