import React from 'react';
import ExploreCard from './Explore Card/ExploreCard';
import styles from './ExploreSection.module.scss';

const ExploreSection = () => {

    return (
        <section className={styles.exploreSectionBg}>
            <div className='container'>
                <div className={styles.exploreSection}>
                    <h2 className={`titleFont ${styles.sectionTitle}`}>ESPLORA</h2>
                    <div className={styles.iconsSection}>
                        <ExploreCard
                            to="/map"
                            image="/icon-map.svg"
                            text="MAPPA"
                        />
                        <ExploreCard
                            to="/characters"
                            image="/icon-characters.svg"
                            text="PERSONAGGI"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExploreSection