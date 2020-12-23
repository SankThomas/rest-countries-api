import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon')
    const header = document.querySelector('.header')
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll('ul')

    moon.addEventListener('click', () => {
      document.body.classList.toggle('light-theme')
      header.classList.toggle('light-theme')

      details.forEach((detail) => {
        detail.classList.toggle('light-theme')
      })

      uls.forEach((ul) => {
        ul.classList.toggle('light-theme')
      })
    })
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <i className="fas fa-moon" onClick={() => changeTheme()}></i>
        </div>
      </header>
    </>
  )
}

export default Header
