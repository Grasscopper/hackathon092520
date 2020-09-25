import React, { useState } from 'react'

const Expenses = (props) => {
  let [account, setAccount] = useState({
    title: ""
  })

  const update = (event) => {
    event.preventDefault()
    setAccount({
      ...account,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const postExpense = (event) => {
    event.preventDefault()
    let store = window.localStorage
    let storeAccount = JSON.stringify(account)
    store.setItem(storeAccount, storeAccount)
    setAccount({
      title: ""
    })
  }

  return (
    <div className="grid-container">
      <h1>Expenses</h1>
      <form onSubmit={postExpense} autoComplete="off">
        <label htmlFor="title">Title </label>
        <input
          id="title"
          name="title"
          type="text"
          value={account.title}
          onChange={update} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Expenses
