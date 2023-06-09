import DropDownBar from '@/components/small components/DropDownBar';
import SearchToDesination from '@/components/small components/DestinationToSearchBar';
import SearchFromDesination from '@/components/small components/DestinationFromSearchBar';
import ContainerInputBar from '@/components/small components/ContainerInputBar';
import { BsArrowLeftRight } from 'react-icons/bs';
import ContainerFilter from '@/components/small components/ContainerFilter';
import ShipingLineFilter from '@/components/small components/ShipingLineFilter';
import ShippingProviderCard from '@/components/ShippingProviderCard';

function page() {
  let from = 'porbandar';
  let to = 'china';
  from = from.toUpperCase();
  to = to.toUpperCase();
  let testArr = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <section>
        <div
          style={{
            backgroundColor: '#f7b42c',
            backgroundImage: 'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
          }}
        >
          <div className="flex items-center justify-center font-black p-3 mb-2">
            <h1 className="font-InterFont tracking-wide text-3xl text-white">
              You Have Booked form {from} to {to}
            </h1>
          </div>
          <h6 className="text-base font-medium text-white leading-tight text-center">
            we are committed to delivering success, one mile at a time. With a
            focus on efficiency and reliability,
          </h6>
          <DropDownBar />
          <div className="mt-2 pb-2 flex justify-center w-full flex-wrap">
            <SearchFromDesination />
            <span className="" style={{ height: '36px', marginTop: '26px' }}>
              <BsArrowLeftRight
                size={50}
                color="white"
                style={{ paddingTop: '7px' }}
              />
            </span>
            <SearchToDesination />
          </div>
          <ContainerInputBar />
        </div>
      </section>

      <div className="flex justify-evenly">
        <div className=" ml-7">
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
