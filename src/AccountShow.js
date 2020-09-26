import React from 'react'

const AccountShow = (props) => {
  var storage = window.localStorage
  var accountsArray = JSON.parse(storage.getItem("accounts"))
  var account = accountsArray.find(account => account.id == props.match.params.id)
  return (
    <h1>{account.title}</h1>
  )
}

export default AccountShow
