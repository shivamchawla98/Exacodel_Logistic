
import { useState } from 'react';
import Image from 'next/image';


const WarehousePricing = ({openModal}: any) => {
  const [activeTab, setActiveTab] = useState(0);


  const tabs = [
    { title: 'Small Size', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 19 },
    { title: 'Medium Size', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 39 },
    { title: 'Large Size', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 59 },
  ];

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };


  return (
    <div className="">
      <div className="container mx-auto  px-4 mt-8">
        <div className="">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg" alt="ware house image" className=' w-2/6'/>
              <div className="w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">New Ohio</h2>
                <h2 className=" text-base font-semibold">{tabs[activeTab].title}</h2>
                <p className="text-gray-600 mb-4">{tabs[activeTab].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-sky-600">${tabs[activeTab].price}</span>
                  <button
                  onClick={openModal}
                  className="px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 p-4">
              <div className="flex justify-between">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`px-4 py-2 text-sm ${
                      activeTab === index ? 'bg-sky-600 text-white' : 'bg-white text-sky-600 hover:bg-sky-100'
                    } rounded-full focus:outline-none`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehousePricing;
