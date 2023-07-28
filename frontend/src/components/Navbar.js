import React from 'react'
import { Link } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


function Navbar(props) {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-nav p-4">
      <div className="container-fluid">

        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>

        <a className="navbar-brand">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/forums">Forums</Link>
            </li>


          </ul>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">


            <div className="btn-group">
              <Link type="button" to="/profile" className="btn btn-success">Profile</Link>
              <Link type="button" to="/settings" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
              </ul>
            </div>

            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}
            {!user && (
              <div>
                <Link type="button" to="/login" className="btn btn-success">Login</Link>
                <Link type="button" to="/signup" className="btn btn-success">Signup</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
