import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExploreCard.module.scss';

const ExploreCard = ({ to, image, text }) => {

    return (
        <Link to={to} className={styles.linkCard}>
            <img className={styles.icon} src={image} />
            <p className={`titleFont ${styles.linkName}`}>{text}</p>
        </Link>
    )

}

export default ExploreCard;

