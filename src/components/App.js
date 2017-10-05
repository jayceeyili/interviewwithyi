import React from 'react'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import AddGroup from '../containers/AddGroup'
import VisibleTodoList from '../containers/VisibleTodoList'
import Groups from '../containers/Groups'
import { Grid, Menu } from 'semantic-ui-react'
import '../App.css'

const App = () => (
  <div className='app'>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={4}>
          <AddGroup />
        </Grid.Column>
        <Grid.Column width={12}>
          <Menu borderless fluid secondary>
            <Menu.Item>
              <Footer />
            </Menu.Item>
            <Menu.Item position='right'>
              <AddTodo />
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Groups />
        </Grid.Column>
        <Grid.Column width={12}>
          <VisibleTodoList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default App
