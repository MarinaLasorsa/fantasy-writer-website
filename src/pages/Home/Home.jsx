import React from 'react';
import styles from './Home.module.scss';
import HeroSection from './Hero Section/HeroSection';
import BookSection from './Book Section/BookSection';
import ExploreSection from '../../components/Explore Section/ExploreSection';
import AuthorSection from './Author Section/AuthorSection';
import SocialsSection from '../../components/Socials Section/SocialsSection';

const Home = () => {

    return (
        <>
            <div>
                <HeroSection />
                <BookSection />
                <ExploreSection />
                <AuthorSection />
                <SocialsSection />
            </div>
        </>
    )
}

export default Home