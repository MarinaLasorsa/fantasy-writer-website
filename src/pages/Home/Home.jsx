import React from 'react';
import styles from './Home.module.scss';
import HeroSection from './Hero Section/HeroSection';
import BookSection from './Book Section/BookSection';
import ExploreSection from '../../components/Explore Section/ExploreSection';

const Home = () => {

    return (
        <>
            <div>
                <HeroSection />
                <BookSection />
                <ExploreSection />
            </div>
        </>
    )
}

export default Home