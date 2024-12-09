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
                <li className={styles.linkItem}>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/about">L'AUTORE</NavLink>
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/book">IL LIBRO</NavLink>
                </li>
                <li className={styles.linkItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>EXTRA &#9207;</span>
                    {isDropdownOpen && ( //se isDropdownOpen è true, allora appare ciò che è nelle parentesi. if non si può usare
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <NavLink to="/map" className={styles.dropdownLink}>MAPPA</NavLink>
                            </li>
                            <li>
                                <NavLink to="/characters" className={styles.dropdownLink}>PERSONAGGI</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/news">EVENTI</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;