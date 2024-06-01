import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = ({onSubmit}) => {
    const [term,setTerm]=useState("")
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(term);
        onSubmit(term)
    }
    const handleOnChange = (e) => {
        setTerm(e.target.value)
        // console.log(term);
    }
  return (
      <div className="search-bar" >
          <form className="search-bar-form" onSubmit={handleFormSubmit}>
              <label htmlFor="">Enter Search Term</label>
              <input onChange={handleOnChange} className="search-bar-input" />

          </form>

    </div>
  )
}

export default SearchBar








