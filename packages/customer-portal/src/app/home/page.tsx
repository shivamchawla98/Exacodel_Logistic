import HomeCard from '@/components/HomeCard';
import Card2 from './components/Card2';
import bg from '../../asset/images/container1.png';
import Card3 from './components/Card3';
import Card4 from './components/Card4';

function Home() {
  return (
    <section className="">
      <div className="min-h-4/5 h- banner bg-yellow-400 w-full flex justify-between">
        <div className="align-center h-4/5 flex justify-center items-center mb-9 flex-col w-1/2">
          <h1 className=" mt-24 mb-1 ml-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Efficiently Moving The{' '}
            <span className="text-blue-600 dark:text-blue-500">
              World&apos;s Forward
            </span>
          </h1>
          <p className="text-lg mb-14 p-5 ml-7 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Empowering businesses with reliable logistics solutions, our company
            is committed to delivering excellence at every step.
          </p>
        </div>

        <img
          className="h-auto max-w-lg rounded-lg"
          src="/docs/images/examples/image-1@2x.jpg"
          alt="image description"
        />
      </div>

      <div className="mx-auto mt-8 card w-5/6  flex justify-center items-center bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all p-7">
        <h1 className="text-3xl font-bold text-gray-800 pr-8">
          The safest shipping services
        </h1>
        <p className="text-lg text-gray-600 w-2/4 pl-8">
          With a focus on efficiency, transparency, and customer satisfaction,
          we ensure seamless transportation, optimized warehousing, and timely
          delivery of goods. Our team of experienced professionals, coupled with
          cutting-edge technology, enables us to navigate{' '}
        </p>
      </div>

      <div className="flex justify-evenly flex-wrap mt-14">
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <div className=" m-24">
        <h4 className="ml-8 mt-6 text-2xl font-medium leading-tight text-primary">
          Get you&apos;r goods
          <br /> on the way!
        </h4>
        <div className="   flex items-center justify-center p-10 relative">
          <div></div>
          <div className="w-40 absolute border-2 p-2 border-gray-800 h-44  -top-5 right-14">
            <div className="bg-yellow-400 text-center h-40 flex justify-center items-center flex-col shadow-lg ">
              <h3 className="text-3xl font-semibold">172 +</h3>

              <p className="w-36 p-3">rvfdvnv sodvnonv svn</p>
            </div>
          </div>
          <iframe
            className="aspect-[16/9] w-full rounded-lg shadow-lg shadow-yellow-800/70"
            src="https://www.vecteezy.com/video/8084008-aerial-in-front-view-of-cargo-ship-carrying-container-and-running-with-tug-boat-for-export-goods-from-cargo-yard-port-to-custom-ocean-concept-freight-shipping-by-ship"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* video down content */}
      <div className="">
        <h4 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary text-center lg:text-4xl">
          Our Achivement Made Us Well Known Through
        </h4>

        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="flex justify-center lg:h-3/4 lg:justify-between  flex-wrap lg:p-8"
        >
          <div className="flex flex-col justify-center">
            <Card2 />
            <Card2 />
          </div>
          <div className="flex flex-col justify-center">
            <Card2 />
            <Card2 />
          </div>
        </div>
      </div>

      <div className="flex justiy-center flex-col mt-12">
        <div className="flex justify-evenly">
          <h4 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary lg:text-4xl">
            We Serve More Then
            <br /> 9+ Countries
          </h4>
          <button
            type="button"
            className="ml-6 mt-4 text-white h-11 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            View Countries
          </button>
        </div>

        <div className="flex justify-evenly mt-10">
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>

      <div className="flex justiy-center flex-col mt-24">
        <div className="flex justify-between mt-8 mb-8">
          <h4 className="mb-2 lg:ml-20 mt-0 text-2xl lg:w-2/5 font-semibold leading-tight text-primary lg:text-4xl">
            Global Shipment
            <br /> News
          </h4>
          <p className="text-gray-500 dark:text-gray-400 lg:pl-20 lg:w-1/2 p-4 lg:pl-50 lg:pr-7 flex justify-center">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical developmen.
          </p>
        </div>
        <div className="flex justify-evenly">
          <Card4 />
          <Card4 />
          <Card4 />
        </div>
        <div className='flex justify-center mt-8'>
          <button
            type="button"
            className="ml-6 mt-4 w-44 text-white h-11 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
