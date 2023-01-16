import React, {useState, useEffect} from 'react'
import Search from '../Search/Search'
import TransactionForm from '../TrasactionForm/TransactionForm'
import TransactionList from '../TransactionList/TransactionList'


function Account() {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("");

    function updatedTransactions(newTransations){
      const updatedTransactionsArray = [...transactions, newTransations]
      setTransactions(updatedTransactionsArray);

    }
    useEffect(() => {
      fetch("http://localhost:8001/transactions")
      .then((response)=> response.json())
      .then((data)=>{
        setTransactions(data)
      })
    }, [])
  return (
    <div>
        <Search setSearch={setSearch}/>
        <TransactionForm newData={updatedTransactions}/>
        <TransactionList transactions={transactions} searchTerm={search}/>
    </div>
  );
}

export default Account