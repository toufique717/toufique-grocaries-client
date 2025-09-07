import React from 'react';
import p1 from '../assets/bakery.jpg'

const Ordercard = ({item}) => {

  const {name,image,price,recipe}= item;

    return (
        <div className=''>


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={image}
                    alt="Delicious Burger"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                   <p className="absolute top-14 right-14 bg-black text-white text-sm font-semibold px-3 py-1 rounded-md shadow-lg">
                      ${price}
                 </p>
                  <h2 className="card-title">{name}</h2>
                   
                  <p> {recipe}</p>
                  <div className="card-actions">
                    <button className="bg-white rounded-md text-yellow-600 border-b-2 border-yellow-500 px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

             
            
        </div>
    );
};

export default Ordercard;