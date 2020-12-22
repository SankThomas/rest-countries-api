import React, { useState, useEffect } from 'react'

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
    }

    fetchCountries()
  }, [])

  return (
    <>
      <section className="countries">
        {countries.map((country) => {
          const {
            numericCode,
            name,
            flag,
            population,
            region,
            capital,
          } = country

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="details">
                <h4>
                  Name: <span>{name}</span>
                </h4>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Countries
