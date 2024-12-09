import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const Button = ({ to, children }) => {

    return (
        <Link to={to} className={styles.button}>
            {children}
        </Link>
    )
}

export default Button