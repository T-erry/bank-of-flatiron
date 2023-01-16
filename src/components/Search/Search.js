import React from 'react'
function Search({setSearch}) {
function handleSearch(e){
  setSearch(e.target.value)
  console.log(e.target.value);

}

  return (
    <div className='Search'>
<input type="text" onChange={handleSearch} className="form-control" placeholder='Search For Transaction'/>
    </div>
  )
}

export default Search