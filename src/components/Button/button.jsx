import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const Button = ({ to, children, section }) => {

    const buttonClass = `${styles.button} ${styles[section] || ''}`;

    return (
        <Link to={to} className={buttonClass}>
            {children}
        </Link>
    )
}

export default Button