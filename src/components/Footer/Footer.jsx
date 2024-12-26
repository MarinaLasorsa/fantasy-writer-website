import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <>
            <footer className={styles.pageFooter}>
                <div className="container">
                    <div className={`row ${styles.footerRow}`}>
                        <p>Made with &#10024; by Mary</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer