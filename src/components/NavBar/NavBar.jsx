import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const NavBar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); //definisco lo stato del dropdown come chiuso di default

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); //chiamo la funzione per cambiare la variabile di stato
    }

    return (
        <nav className={`container ${styles.navbar}`}>
            <ul className={`row ${styles.navLinks}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">L'autore</NavLink>
                </li>
                <li>
                    <NavLink to="/book">Il libro</NavLink>
                </li>
                <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>Extra &#9207;</span>
                    {isDropdownOpen && ( //se isDropdownOpen è true, allora appare ciò che è nelle parentesi. if non si può usare
                        <ul>
                            <li>
                                <NavLink to="/map">Mappa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/characters">Personaggi</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/news">Eventi</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;