import React from 'react';
import Sectiontitle from './Sectiontitle';
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'

const Callus = () => {
    return (
        <div>

            <section>
              <div>
                  <p className='bg-black text-4xl text-center p-8'>Call us : +880170999709</p>
              </div>
          </section>

          <section>
            <div>
                 <Sectiontitle
                      heading={'Should Try'}
                    subheading={'Public RECOMMENDS'}>

                 </Sectiontitle>
            </div>


             <div className="grid grid-cols-3 gap-6">
  {/* Card 1 */}
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

  {/* Card 2 */}
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={p2}
        alt="Spicy Chicken Pizza"
        className="rounded-xl w-full h-48 object-cover"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title"> YOUR FAVOURITE VEGETABLES</h2>
      <p>Hot and cheesy pizza topped with spicy grilled chicken, bell peppers, and onions.</p>
      <div className="card-actions">
        <button className="bg-white rounded-md text-yellow-600 border-b-2 border-yellow-500 px-4 py-2 hover:bg-black hover:text-white transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={p3}
        alt="Chocolate Lava Cake"
        className="rounded-xl w-full h-48 object-cover"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">YOUR FAVOURITE LEMON</h2>
      <p>Warm, gooey chocolate cake with a molten chocolate center, served with vanilla ice cream.</p>
      <div className="card-actions">
        <button className="bg-white rounded-md text-yellow-600 border-b-2 border-yellow-500 px-4 py-2 hover:bg-black hover:text-white transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

          </section>

            
        </div>
    );
};

export default Callus;