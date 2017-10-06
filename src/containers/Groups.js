import React from 'react'
import FilterLink from './FilterLink'
import { connect } from 'react-redux'
import { selectGroup } from '../actions'
import { Menu, List } from 'semantic-ui-react'

let Groups = ({ dispatch, groups }) => {
  return (
    <Menu vertical secondary fluid>
      {groups.map((group, i) => (
        <Menu.Item
          key={i} name={group.text}
          onClick={ (e, {name}) => dispatch(selectGroup(name)) }
        >
          <List.Item>
            <FilterLink filter={group.text} key={i}>
              { group.text }
            </FilterLink>
          </List.Item>
        </Menu.Item>
      ))}
    </Menu>
  )
}

Groups = connect( state => ({groups: state.groups}))(Groups)

export default Groups;
