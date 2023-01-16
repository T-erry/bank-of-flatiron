import React, {useState} from 'react'

function TransactionForm({newData}) {
  const [formData, setFormData] = useState({
    date:"",
    description: " ",
    category: "amount",
    amount: ""
  });
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response=> response.json())
    .then(data=> newData(data))

  }

  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;
    console.log(key);
    console.log(value);
    setFormData({
      ...formData, [key]: value
    });
   
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="TransactionInputs m-3">
    <input type="date" onChange={handleChange}  className="form-control mb-2" name="date"/>
    <input type="text" onChange={handleChange} className="form-control mb-2 text-muted" name="description" placeholder="Description" />
    <input type="text" onChange={handleChange} className="form-control mb-2 text-muted" name="category" placeholder="category" />
    <input type="number" onChange={handleChange} className="form-control mb-2 text-muted" name="amount" placeholder="amount" />
  </div>
  <div className='d-flex justify-content-center'>
  <button type="submit" className="btn btn-primary mx-auto">Add Transaction</button>
  </div>
  
</form>
    </div>
  )
}

export default TransactionForm