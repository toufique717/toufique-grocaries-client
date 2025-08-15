import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';
import Bgorderonline from './Bgorderonline';
import Tsestimonial from './Tsestimonial';
import Bistrobackimage from './Bistrobackimage';
import Callus from './Callus';

const Home = () => {
    return (
        <div>
            
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