import React from "react"

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li className='nav-item'>
          <a className='nav-link' href="/">Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="about-us">About</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="portfolio">Portfolio</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="contact-us">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
