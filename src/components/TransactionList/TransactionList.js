import React from "react";

function TransactionList() {
  return (
    <div>
      <table class="table table-dark table-hover mt-5">
      <thead>
            <tr>
                <th class="header" scope="col">Date</th>
                <th class="header" scope="col">Description</th>
                <th class="header" scope="col">Category</th>
                <th class="header" scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CAT</td>
                <td>1st Aug</td>
                <td>Free</td>
                <td>Online</td>
            </tr>
            </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
