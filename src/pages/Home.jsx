import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';
import Bgorderonline from './Bgorderonline';
import Tsestimonial from './Tsestimonial';

const Home = () => {
    return (
        <div>
            
            <Banner> </Banner>
            {/* <Orderonline></Orderonline> */}
            <Categories></Categories>

            <Popularitem></Popularitem>
            <Bgorderonline></Bgorderonline>
            <Tsestimonial></Tsestimonial>
        </div>
    );
};

export default Home;