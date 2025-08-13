import React from 'react';

const Popular = ({item}) => {
    const{name,image,recipe,price} =item;
    return (
        <div>

           <div className='flex gap-2 p-4'>
              <div>
                <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] pt-1 ' src={image} alt="Description of image"></img>
              </div>
              <div>
                <p className='uppercase text-lg'>{name}------------------------</p>
               <p>{recipe}</p>
              </div>
              <div>
                <p className='text-yellow-600'>${price}</p>
              </div>
        </div>

            
        </div>
    );
};

export default Popular;