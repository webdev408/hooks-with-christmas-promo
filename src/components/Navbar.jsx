import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-info">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">tekSol</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <NavLink class="nav-link active" aria-current="page" to="/"><i className="fas fa-home">Home</i></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/tasks"><i className="fas fa-tools">Tasks</i></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/maps"><i className="fas fa-map-signs">Maps</i></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/nobel"><i className="fas fa-clipboard">Nobel</i></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/xmas"><i className="fas fa-tree">Xmas</i></NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;
