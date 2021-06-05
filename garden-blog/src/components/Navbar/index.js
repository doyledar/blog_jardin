import React, { useState } from 'react';
import Footer from '../Footer';
import Logo from '../Logo';
import Dropdown from '../Menus/Dropdown'
import ALink from '../Lists/ALink'
import { NavLink } from 'react-router-dom'
import './style.css'


const Navbar = (props) => {

    //const [search, setSearch] = useState(false)

    const submitSearch = (e) => {
        e.preventDefault()
        alert('coucou')
    }

    return (
        <div className="navbar regular-nav nav-wrapper smoothie">
            <div className="container">
                <div className="row">
                    <Logo />
                    <div className="col-sm-8">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <NavLink to="/" className="menuLien">Accueil</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="menuLien">A propos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/news" className="menuLien">Nouvelles</NavLink>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle menuLien" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Agenda<span class="caret"></span></a>
                                        <Dropdown>
                                            <ALink>janvier</ALink>
                                            <ALink>février</ALink>
                                            <ALink>mars</ALink>
                                            <ALink>avril</ALink>
                                            <ALink>mai</ALink>
                                            <ALink>juin</ALink>
                                            <ALink>juillet</ALink>
                                            <ALink>août</ALink>
                                            <ALink>septembre</ALink>
                                            <ALink>octobre</ALink>
                                            <ALink>novembre</ALink>
                                            <ALink>décembre</ALink>
                                        </Dropdown>
                                </li>
                                <li>
                                    <NavLink to="/Contact" className="menuLien">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Admin" className="menuLien">Admin</NavLink>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle menuLien" data-toggle="dropdown"><i class="glyphicon glyphicon-search"></i></a>
                                    <ul className="dropdown-menu">
                                        <form onSubmit={ submitSearch }className="form-inline">
                                            <button type="submit" className="btn btn-default pull-right"><i class="glyphicon glyphicon-search"></i></button>
                                            <input type="text" className="form-control pull-left" placeholder="Search" />
                                        </form>
                                    </ul>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
