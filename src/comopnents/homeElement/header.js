import React from 'react'
import Image from 'next/image'
import header_logo from "../../../public/assets/images/Group 1000004908.png"

function Header() {
  return (
    <> 
      <nav className="navbar navbar-expand-lg">
        <div className="container-sm">
          <a className="navbar-brand" href="#">
            <Image src={header_logo} alt='header-logo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#service">Service</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#project">Project</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#careers">Careers</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Contact Now</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
