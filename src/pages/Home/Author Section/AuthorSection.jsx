import React from 'react';
import styles from './AuthorSection.module.scss';
import Button from '../../../components/Button/button';

const AuthorSection = () => {

    return (
        <section className={styles.authorSection}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className={styles.authorPic} src='/author-pic.png' />
                    </div>
                    <div className={`col-6 ${styles.authorInfo}`}>
                        <h2 className={styles.sectionTitle}>Chi è Nome Autore?</h2>
                        <p className={styles.sectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione et non fugit suscipit, perferendis facilis id dolorum maxime fugiat atque totam esse quis ipsa exercitationem ipsam tenetur! Eum atque veritatis facilis ipsa!</p>
                        <Button to="/about" section="book">Scopri di più</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthorSection