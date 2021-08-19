import React from 'react'

const Filter = ({searchInput, setSearchInput, setFiltered, countries}) => {
  // window.addEventListener('DOMContentLoaded', () => {
  //   const search = document.getElementById('search')

  //   search.addEventListener('click', (e) => {
  //     const { value } = e.target

  //     const countryName = document.querySelectorAll('.country-name')

  //     countryName.forEach((name) => {
  //       if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
  //         name.parentElement.parentElement.style.display = 'block'
  //       } else {
  //         name.parentElement.parentElement.style.display = 'none'
  //       }
  //     })
  //   })
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
      ))
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => searchCountries(e.target.value)}
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
