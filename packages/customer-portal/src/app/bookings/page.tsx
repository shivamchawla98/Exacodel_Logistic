import DropDownBar from '@/components/small components/DropDownBar';
import SearchToDesination from '@/components/small components/DestinationToSearchBar';
import SearchFromDesination from '@/components/small components/DestinationFromSearchBar';
import ContainerInputBar from '@/components/small components/ContainerInputBar';
import { BsArrowLeftRight } from 'react-icons/bs';
import ContainerFilter from '@/components/small components/ContainerFilter';
import ShipingLineFilter from '@/components/small components/ShipingLineFilter';
import ShippingProviderCard from '@/components/ShippingProviderCard';
import ShippingFilter from './components/ShippingFilter';

function page() {
  let from = 'porbandar';
  let to = 'china';
  from = from.toUpperCase();
  to = to.toUpperCase();
  let testArr = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <section className="bg-white dark:bg-gray-900 h-full bg-yellow-400">

          <div className="flex items-center justify-center font-black p-3 mb-2 pt-10">
          <h1 className="mb-4 mt-7 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              You Have Booked form {from} to {to}
            </h1>
          </div>
          <h6 className="text-base font-medium text-white leading-tight text-center">
            we are committed to delivering success, one mile at a time. With a
            focus on efficiency and reliability,
          </h6>
          <ShippingFilter />
      </section>

      <div className="md:flex md:justify-evenly">
        <div className=" p-7 md:ml-7 lg:ml-7">
          <ContainerFilter />
          <ShipingLineFilter />
        </div>
        <div className='w-3/6 mx-auto'>
        {testArr.map((element) =>  <ShippingProviderCard img="1" key={element} fromDestination="Abbu Dhabi" toDestination="Bandar Abbas" />)}

        </div>
        
      </div>
    </>
  );
}

export default page;
