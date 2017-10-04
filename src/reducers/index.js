import { combineReducers } from 'redux'
import todos from './todos'
import groups from './groups'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  groups,
  todos,
  visibilityFilter
})

export default todoApp
