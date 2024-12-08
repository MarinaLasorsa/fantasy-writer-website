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
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/about">L'autore</NavLink>
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/book">Il libro</NavLink>
                </li>
                <li className={styles.linkItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>Extra &#9207;</span>
                    {isDropdownOpen && ( //se isDropdownOpen è true, allora appare ciò che è nelle parentesi. if non si può usare
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <NavLink to="/map" className={styles.dropdownLink}>Mappa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/characters" className={styles.dropdownLink}>Personaggi</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className={styles.linkItem}>
                    <NavLink to="/news">Eventi</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;