import React from 'react';
import styles from './HeroSection.module.scss';
import Button from '../../../components/Button/button';

const HeroSection = () => {

    return (
        <section className={styles.hero}>
            <div className='container'>
                <h1 className={`titleFont ${styles.heroTitle}`}>Benvenuto in un mondo fantastico</h1>
                <p className={styles.heroSubtitle}>Una meravigliosa avventura ti attende...</p>
                <Button to="/book" section="hero">Comincia il tuo viaggio</Button>
            </div>
        </section>
    )

}

export default HeroSection