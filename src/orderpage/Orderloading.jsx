import React from 'react';
import Ordercard from '../shared/Ordercard';

const Orderloading = ({item}) => {
    return (
       
 <div>
    
                    <div className='grid grid-cols-3 gap-10'>
                        {
                       item.map(item=>
                         <Ordercard item={item}
                         key={item._id}>
             
                         </Ordercard>
                       )
                     }

                     


                     </div>

                      
 </div>


                      
            
            
    );
};

export default Orderloading;




 