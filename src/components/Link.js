import React from 'react'
import PropTypes from 'prop-types'
import { List, Segment } from 'semantic-ui-react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <Segment as={List.Item}
        color={active ? 'red' : ''}
        secondary
        textAlign='center'>
        {children}
      </Segment>
    )
  }

  return (
    // eslint-disable-next-line
    <Segment as={List.Item}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      textAlign='center'
    >
      {children}
    </Segment>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
