import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBanner from '../../BistroBanner/BistroBanner';
import PopularMenu from '../../PopularMenu/PopularMenu';
import ChefRecommends from '../../ChefRecommends/ChefRecommends';
import Featured from '../../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBanner></BistroBanner>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;