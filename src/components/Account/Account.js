import React from 'react'
import Search from '../Search/Search'
import TransactionForm from '../TrasactionForm/TransactionForm'
import TransactionList from '../TransactionList/TransactionList'

function Account() {
  return (
    <div>
        <Search/>
        <TransactionForm/>
        <TransactionList/>
    </div>
  )
}

export default Account