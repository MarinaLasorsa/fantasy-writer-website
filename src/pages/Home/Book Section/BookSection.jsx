import React from 'react';
import styles from './BookSection.module.scss';
import Button from '../../../components/Button/button';

const BookSection = () => {

    return (
        <section className={styles.bookSection}>
            <div className='container'>
                <div className='row'>
                    <div className={`col-6 ${styles.bookInfo}`}>
                        <h2 className={`titleFont ${styles.sectionTitle}`}>TITOLO DEL LIBRO</h2>
                        <h4 className={styles.sectionSubtitle}>di Nome Autore</h4>
                        <p className={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veniam, quisquam vitae velit ab vero? Expedita assumenda eaque iure corporis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum cumque illo commodi?</p>
                        <Button to="/book" section="book">Scopri di più</Button>
                    </div>
                    <div className='col-6'>
                        <img className={styles.bookCover} src='/book-mockup-noshade.png' />
                    </div>
                </div>
            </div>
        </section >
    )

}

export default BookSection