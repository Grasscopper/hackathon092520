import React from 'react'
import { Link } from 'react-router-dom'

const AccountTile = (props) => {
  return (
    <Link to={`/accounts/${props.account.id}`}>
      <li>{props.account.title}</li>
    </Link>
  )
}

export default AccountTile
