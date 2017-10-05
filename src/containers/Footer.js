import React from 'react'
import FilterLink from './FilterLink'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

let Footer = ({ dispatch, groups }) => {

  return (
    <Menu borderless size='large' secondary >
      <Menu.Item  color='grey'/>
      <Menu.Item link>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
      </Menu.Item>
      <Menu.Item link>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </Menu.Item>
      <Menu.Item link>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </Menu.Item>
    </Menu>
  )
}

Footer = connect( state => ({groups: state.groups}))(Footer)

export default Footer;
