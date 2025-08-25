import React, { useState } from 'react';
import Coverimage from '../shared/Coverimage';
import orderimage from '../assets/bakery.jpg'


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ordercard from '../shared/Ordercard';
import usemenu from '../hooks/usemenu';

const Order = () => {
    const[menu] = usemenu();

      const offered = menu.filter(item=>item.category === 'offered');
     const vegetables = menu.filter(item=>item.category === 'salad');
      const fruits = menu.filter(item=>item.category === 'soup');
       const snacks = menu.filter(item=>item.category === 'pizza');
        const cosmetic = menu.filter(item=>item.category === 'dessert');
   

    const[tabindex,settabindex] = useState(0)

    return (
        <div>

             
            <Coverimage title1={'order food'} title2={'Ordering food online is quick and convenient. With just a few clicks, you can explore different restaurants, check menus, and choose your favorite meals. From fast food to healthy options, everything is available at your doorstep. Online food delivery saves time, offers variety, and makes eating more enjoyable anytime.'} image={orderimage}></Coverimage>


            <div>

                <Tabs selectedIndex={tabindex} onSelect={(index) => settabindex(index)}>
      <TabList>
        <Tab>Vegetables</Tab>
        <Tab>Fruits</Tab>
        <Tab>Snacks</Tab>
        <Tab>Cosmetics</Tab>
        <Tab>Cleaning</Tab>
        
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      
    </Tabs>

            </div>

            <Ordercard></Ordercard>
            
        </div>
    );
};

export default Order;