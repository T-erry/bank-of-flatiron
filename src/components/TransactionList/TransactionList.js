import React from "react";
import Transaction from "../Transaction/Transaction";

function TransactionList({ transactions, searchTerm }) {
  if (transactions) {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    return (
      <div className="TransactionList">
        <table>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* // lists all elements that will be rendered in jsx */}
            {filteredTransactions.map((transaction) => {
              return (
                <Transaction
                  key={transaction.id}
                  id={transaction.id}
                  date={transaction.date}
                  description={transaction.description}
                  category={transaction.category}
                  amount={transaction.amount}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionList;
