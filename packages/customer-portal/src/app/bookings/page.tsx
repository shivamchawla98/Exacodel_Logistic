import DropDownBar from '@/components/small components/DropDownBar';
import SearchToDesination from '@/components/small components/DestinationToSearchBar';
import SearchFromDesination from '@/components/small components/DestinationFromSearchBar';
import ContainerInputBar from '@/components/small components/ContainerInputBar';
import { BsArrowLeftRight } from 'react-icons/bs';

function page() {
  let from = 'porbandar';
  let to = 'china';
  from = from.toUpperCase();
  to = to.toUpperCase();
  return (
    <section
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
        we are committed to delivering success, one mile at a time. With a focus
        on efficiency and reliability,
      </h6>
      <DropDownBar />
      <div className="mt-2 pb-2 flex justify-center w-full flex-wrap">
        <SearchFromDesination />
        <span className="bg-white">
          <BsArrowLeftRight size={36} style={{ paddingTop: '7px' }} />
        </span>
        <SearchToDesination />
      </div>
      <ContainerInputBar />
    </section>
  );
}

export default page;
