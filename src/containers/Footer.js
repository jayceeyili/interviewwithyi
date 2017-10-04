import React from 'react'
import FilterLink from './FilterLink'
import { connect } from 'react-redux'

let Footer = ({ dispatch, groups }) => {

  return (
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
      {", "}
      {groups.map((group, i) => (
        <FilterLink filter={group.text} key={i}>
          { group.text }
        </FilterLink>
      ))}
    </p>
  )
}

Footer = connect( state => ({groups: state.groups}))(Footer)

export default Footer;

// <FilterLink filter="FAMILY">
// FAMILY
// </FilterLink>
// {", "}
// <FilterLink filter="WORK">
// WORK
// </FilterLink>
