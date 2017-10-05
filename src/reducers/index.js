import { combineReducers } from 'redux'
import todos from './todos'
import groups from './groups'
import selectGroup from './selectGroup'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  groups,
  todos,
  visibilityFilter,
  selectGroup
})

export default todoApp
