let initialState = [
  {text: 'Family'},
  {text: 'Work'},
  {text: 'Social'}
]

const groups = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default groups;
