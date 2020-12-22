import React from 'react'

const Filter = () => {
  return (
    <>
      <form className="form" id="form">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Country"
        />

        <div className="select">
          <select name="select" id="select">
            <option value="Filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default Filter
