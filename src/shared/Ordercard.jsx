import React from 'react';
import p1 from '../assets/bakery.jpg'

const Ordercard = () => {

    return (
        <div>


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={p1}
                    alt="Delicious Burger"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title"> YOUR FAVOURITE GIFT</h2>
                  <p>Juicy grilled beef patty with melted cheddar cheese, lettuce, and our special sauce.</p>
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