import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <div>
        <List.Item >
          <List.Content>{children}</List.Content>
          <List.Icon name='circle'/>
        </List.Item>
      </div>
    )
  }

  return (
    // eslint-disable-next-line
    <div>
      <List.Item
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
      <List.Content>
        {children}
      </List.Content>
      </List.Item>
    </div>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
