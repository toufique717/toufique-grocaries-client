 
import { Helmet } from 'react-helmet-async';
import Coverimage from '../shared/Coverimage';
import backimage from '../assets/backimage.jpg'
import Sectiontitle from '../pages/Sectiontitle';
import usemenu from '../hooks/usemenu';



import vegetablesimage from '../assets/vegetabless.jpg'
import fruitsimage from '../assets/fruitss.jpg'
import snacksimage from '../assets/snacks.jpg'
import cosmetics from '../assets/cosmetics.jpg'
import Popularmenuu from './Popularmenuu';
//import Popularmenu from './Popularmenu';

const Menu = () => {
    const[menu] = usemenu();
    const offered = menu.filter(item=>item.category === 'offered');
     const vegetables = menu.filter(item=>item.category === 'salad');
      const fruits = menu.filter(item=>item.category === 'soup');
       const snacks = menu.filter(item=>item.category === 'pizza');
        const cosmetic = menu.filter(item=>item.category === 'dessert');
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

            <Sectiontitle heading={'--Dont Miss--'} subheading={'TODAYS OFFER'}></Sectiontitle>

            <Popularmenuu item={offered}></Popularmenuu>

            <Popularmenuu item={vegetables} image={vegetablesimage} title1={' vegetables'} title2={'A groceries shop is an essential part of daily life, providing fresh fruits, vegetables, snacks, and household items. It serves the community by offering quality products at affordable prices. Customers rely on groceries shops for convenience, nutrition, and variety. A friendly atmosphere makes shopping comfortable and enjoyable every day.'}></Popularmenuu>

              <Popularmenuu item={fruits} image={fruitsimage} title1={'fruits'} title2={'A groceries shop is an essential part of daily life, providing fresh fruits, vegetables, snacks, and household items. It serves the community by offering quality products at affordable prices. Customers rely on groceries shops for convenience, nutrition, and variety. A friendly atmosphere makes shopping comfortable and enjoyable every day.'}></Popularmenuu>


                <Popularmenuu item={snacks} image={snacksimage} title1={'snacks'} title2={'A groceries shop is an essential part of daily life, providing fresh fruits, vegetables, snacks, and household items. It serves the community by offering quality products at affordable prices. Customers rely on groceries shops for convenience, nutrition, and variety. A friendly atmosphere makes shopping comfortable and enjoyable every day.'}></Popularmenuu>



                  <Popularmenuu item={cosmetic} image={cosmetics} title1={' cosmetic'} title2={' A groceries shop is an essential part of daily life, providing fresh fruits, vegetables, snacks, and household items. It serves the community by offering quality products at affordable prices. Customers rely on groceries shops for convenience, nutrition, and variety. A friendly atmosphere makes shopping comfortable and enjoyable every day.'}></Popularmenuu>
        </div>
    );
};

export default Menu;
