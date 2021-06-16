import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">TrackMe</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/' className="nav-link" >Exercises<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/create' className="nav-link" >Create Exercise</Link>
                </li>
                <li className="nav-item">
                    <Link to='/edit/:id' className="nav-link" >Edit Exercise</Link>
                </li>
                <li className="nav-item">
                    <Link to='/users/new' className="nav-link" >Create User</Link>
                </li>
                <li className="nav-item">
                    <Link to='/users' className="nav-link" >User List</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}
