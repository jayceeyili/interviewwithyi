import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddGroup from '../containers/AddGroup'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddGroup />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
