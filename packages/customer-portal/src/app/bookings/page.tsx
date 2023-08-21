
import ContainerFilter from "@/components/small components/ContainerFilter";
import ShipingLineFilter from "@/components/small components/ShipingLineFilter";
import BookingCard from "./components/BookingCard";
import ShippingFilter from "./components/ShippingFilter";



function page() {
  let from = "porbandar";
  let to = "china";
  from = from.toUpperCase();
  to = to.toUpperCase();
  let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <section className="bg-white dark:bg-gray-900 h-full">
          <ShippingFilter />
          <div className="flex items-center justify-center font-black p-3 mb-2 pt-10">
          <h1 className="mx-auto text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl text-center">
              You Have Booked form <strong className='text-sky-400'>{from} </strong> to <strong className='text-rose-400'>{to}</strong>
            </h1>
          </div>
      </section>

      <div className="md:flex md:justify-evenly">
        <div className="p-7 md:ml-7 lg:ml-7 shadow-lg">
          <ContainerFilter />
          <ShipingLineFilter />
        </div>
        <div className='w-full p-2 lg:w-3/6 mx-auto'>
        {testArr.map((element) =>  <BookingCard img="1" key={element} fromDestination="Abbu Dhabi" toDestination="Bandar Abbas" />)}

        </div>

      </div>
    </>
  );
}

export default page;
