import React, { useState, useEffect } from 'react'

import AccountTile from './AccountTile'

const Expenses = (props) => {
  let [accounts, setAccounts] = useState([])
  let [account, setAccount] = useState({
    title: ""
  })

  useEffect(() => {
    let storage = window.localStorage
    let storedAccounts = storage.getItem("accounts") //JSON string
    if (storedAccounts != null) {
      setAccounts(JSON.parse(storedAccounts))
    }
  }, [])

  const update = (event) => {
    event.preventDefault()
    setAccount({
      ...account,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const postAccount = (event) => {
    event.preventDefault()
    let storage = window.localStorage
    let storedAccounts = storage.getItem("accounts") //JSON string
    if (storedAccounts != null) {
      let accountsArray = JSON.parse(storedAccounts) //JSON to array
      accountsArray.push(account) //push new account on array
      let accountsString = JSON.stringify(accountsArray) //Array to JSON
      storage.setItem("accounts", accountsString) //save new account
    }
    else {
      let accountsArray = []
      accountsArray.push(account)
      let accountsString = JSON.stringify(accountsArray)
      storage.setItem("accounts", accountsString)
    }
    setAccounts([
      ...accounts,
      account
    ])
    clearAccountForm()
  }

  const clearAccountForm = () => {
    setAccount({
      title: ""
    })
  }

  let accountTiles = accounts.map((account) => {
    return (
      <AccountTile account={account} />
    )
  })

  return (
    <div className="grid-container">
      <h1>Expense Tracker</h1>
      <form onSubmit={postAccount} autoComplete="off">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={account.title}
          onChange={update} />
        <button type="submit">Save</button>
      </form>
      <h3>Accounts</h3>
      <ul>
      {accountTiles}
      </ul>
    </div>
  )
}

export default Expenses
