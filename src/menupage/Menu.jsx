import React from 'react';
import { Helmet } from 'react-helmet-async';
import Coverimage from '../shared/Coverimage';
import backimage from '../assets/backimage.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Toufique Restaurant Menu</title>
            </Helmet>
            <h1>This is menu</h1>

            <Coverimage
            image={backimage}
            title1={"our products"}
            title2={"welcome our shop"}>

            </Coverimage>
        </div>
    );
};

export default Menu;