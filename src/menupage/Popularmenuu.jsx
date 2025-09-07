 

 
import { Link } from 'react-router-dom';
import Coverimage  from '../shared/Coverimage'
import Popular from '../shared/Popular';

const Popularmenuu = ({image,title1,title2,item}) => {
    return (
        <div>

            
             {title1 && <Coverimage image={image} title1={title1} title2={title2} ></Coverimage>}
            
               <section className='grid grid-cols-2'>

                {
                    item.map(item=><Popular
                    
                    key={item._id}
                    item={item}>

                    </Popular>)
                }

                </section>

                <section className='flex justify-center p-4'>
                     <Link to={`/order/${title1}`}>

                      <button
  class="bg-white uppercase rounded-md    text-yellow-400 border-b-2 border-yellow-400 px-4 py-2 transition-colors duration-200 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
>
   order your favourite food
</button>
                     </Link>

                </section>
            
        </div>
    );
};

export default Popularmenuu;