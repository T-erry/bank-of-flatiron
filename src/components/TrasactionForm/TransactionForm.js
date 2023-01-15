import React from 'react'

function TransactionForm() {
  return (
    <div>
        <form>
  <div className="transaction-form m-3">
    <input type="date"  className="form-control mb-2" name="date"/>
    <input type="text" className="form-control mb-2" name="description" placeholder="Description" />
    <input type="text" className="form-control mb-2" name="category" placeholder="category" />
    <input type="number" className="form-control mb-2" name="amount" placeholder="amount" />
  </div>
  <button type="submit" class="btn btn-primary">Add Transaction</button>
</form>
    </div>
  )
}

export default TransactionForm