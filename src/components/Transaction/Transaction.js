import React from 'react'

function Transaction({id, date, description, category, amount}) {

  function handleDelete(){
    fetch(`http://localhost:8001/transactions/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type":  "application/json",
        "Accept":  "application/json"
      },
    })
    .then(r=> r.json())
    .then(alert("Transacton Deleted"))

  }
  return (
    <>
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete} className="btn btn-primary text-center">Delete</button></td>

    </tr>
    </>
  )
}

export default Transaction