import React, {useState, useEffect} from 'react'
import Search from '../Search/Search'
import TransactionForm from '../TrasactionForm/TransactionForm'
import TransactionList from '../TransactionList/TransactionList'


function Account() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
      fetch("http://localhost:8001/transactions")
      .then((response)=> response.json())
      .then((data)=>{
        setTransactions(data)
      })
    }, [])
  return (
    <div>
        <Search/>
        <TransactionForm/>
        <TransactionList transactions={transactions}/>
    </div>
  );
}

export default Account