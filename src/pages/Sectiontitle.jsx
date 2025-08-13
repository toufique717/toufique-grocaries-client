import React from 'react';

const Sectiontitle = ({heading,subheading}) => {
    return (
        <div>

           <div className='flex justify-center items-center text-center'>

             <div className='p-4'>
                <p className='pb-2 text-yellow-500 font-bold'>{heading}</p>
                <p className="border-t border-b border-white py-2 text-xl font-bold "> {subheading} </p>
             </div>
            
         </div>
            
        </div>
    );
};

export default Sectiontitle;