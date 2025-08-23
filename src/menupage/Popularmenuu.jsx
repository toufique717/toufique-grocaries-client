 

 
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
            
        </div>
    );
};

export default Popularmenuu;