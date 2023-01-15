import React from "react";

function TransactionList({transactions}) {
  return (
    <div className="TransactionList">
      <table>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
  
  {transactions.map((transaction)=>{
     console.log(transaction);
   return <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>

    </tr>

  })}
       
        
  </tbody>
</table>

    </div>
  );
}

export default TransactionList;
