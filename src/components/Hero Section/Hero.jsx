import React from 'react';
import styles from './Hero.module.scss';
import Button from '../Button/button';

const Hero = () => {

    return (
        <section className={styles.hero}>
            <div className={'container'}>
                <h1 className={styles.heroTitle}>Benvenuto in un mondo fantastico</h1>
                <p className={styles.heroSubtitle}>Una meravigliosa avventura ti attende...</p>
                <Button to="/books">Comincia il tuo viaggio</Button>
            </div>
        </section>
    )

}

export default Hero