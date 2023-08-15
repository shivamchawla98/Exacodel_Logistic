
function OurProductCard({itemsArray}) {
    return (
      <div className="mx-auto w-full justify-center flex bg-white shadow-lg rounded-lg py-8  sm:max-w-none">
        {itemsArray.map((incentive) => (
          <div
            key={incentive.name}
            className="text-center sm:flex sm:text-left lg:block lg:text-center"
          >
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="mx-auto h-16 w-16"
                  src={incentive.imageSrc}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-sm font-medium text-gray-900">
                {incentive.name}
              </h3>
              <p className="mt-2 text-sm px-8 text-gray-500">
                {incentive.description}
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full">
              Know More
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default OurProductCard;
  