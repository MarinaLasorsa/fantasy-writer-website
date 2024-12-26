import React from 'react';
import styles from './SocialsSection.module.scss';

const SocialsSection = () => {
    return (
        <section className={styles.socialsSectionBg}>
            <div className="container">
                <div className={styles.socialsSection}>
                    <h2 className={`titleFont ${styles.sectionTitle}`}>CONNETTITI SUI SOCIAL</h2>
                    <div className={styles.iconsSection}>
                        <a href='#'><img className={styles.socialsIcon} src="/fb-logo.png" /></a>
                        <a href='#'><img className={styles.socialsIcon} src="/ig-logo.png" /></a>
                        <a href='#'><img className={styles.socialsIcon} src="/twt-logo.png" /></a>
                        <a href='#'><img className={styles.socialsIcon} src="/tiktok-logo.png" /></a >
                    </div >
                </div>
            </div>
        </section >
    )
}

export default SocialsSection