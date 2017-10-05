import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    // eslint-disable-next-line
    <Item.Content
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      >
      {children}
    </Item.Content>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link



// <a href="#"
//   onClick={e => {
//     e.preventDefault()
//     onClick()
//   }}
//   >
//   {children}
// </a>
