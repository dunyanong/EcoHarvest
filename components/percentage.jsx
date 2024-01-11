import React from 'react';

const Percentage = ({ data }) => {
  // logic comment percentage = bin height - input height / bin height
  

  // Assuming data.ultrasonic is a string like "0.00cm"
  const ultrasonicValue = parseInt(data.ultrasonic.replace('cm', ''), 10);
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>{ultrasonicValue}</p>
            <p className='text-gray-600'>Soil Moist</p>
          </div>
          <p className={`bg-green-200 flex justify-center items-center p-2 rounded-lg`}>
            <span className={`text-green-700 text-lg`}>10%</span>
          </p>
        </div>

          
    </div>
  );
};

export default Percentage;
