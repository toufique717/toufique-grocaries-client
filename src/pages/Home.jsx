import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';
import Bgorderonline from './Bgorderonline';
import Tsestimonial from './Tsestimonial';
import Bistrobackimage from './Bistrobackimage';
import Callus from './Callus';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title> Home Toufique Groceries Home</title>
            </Helmet>
            
            <Banner> </Banner>
            {/* <Orderonline></Orderonline> */}
            <Categories></Categories>
            <Bistrobackimage></Bistrobackimage>

            <Popularitem></Popularitem>
            <Callus></Callus>
            <Bgorderonline></Bgorderonline>
            <Tsestimonial></Tsestimonial>
        </div>
    );
};

export default Home;