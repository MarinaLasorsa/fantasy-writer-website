import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <>
            <header className={styles.pageHeader}>
                <div className='container'>
                    <div className={`row ${styles.headerRow}`}>
                        <img className={styles.authorLogo} src='../../../Logo.svg' alt='author logo' />
                        <NavBar />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header