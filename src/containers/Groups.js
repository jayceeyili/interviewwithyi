import React from 'react'
import FilterLink from './FilterLink'
import { connect } from 'react-redux'
import { selectGroup } from '../actions'
import { Menu } from 'semantic-ui-react'

let Groups = ({ dispatch, groups }) => {
  return (
    <Menu vertical secondary fluid>
      {groups.map((group, i) => (
        <Menu.Item
          link
          key={i} name={group.text}
          onClick={ (e, {name}) => dispatch(selectGroup(name)) }
        >
          <FilterLink filter={group.text} key={i}>
            { group.text }
          </FilterLink>
        </Menu.Item>
      ))}
    </Menu>
  )
}

Groups = connect( state => ({groups: state.groups}))(Groups)

export default Groups;
