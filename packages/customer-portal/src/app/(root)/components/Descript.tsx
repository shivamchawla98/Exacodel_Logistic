import Image from "next/image";
import image from "../../../asset/images/descript.jpg";

function Descript() {
  return (
    <section className="h-screen  flex justify-center relative">
      <div className=" h-full w-full absolute top-0 bg-sky-500">
        <Image
          src={image}
          alt="Picture of the description"
          quality={100}
          className="w-full h-3/5 rounded-br-[348px] rounded-bl-[348px]"
        />
      </div>
      <div className="absolute bottom-0 lg:p-10 flex justify-center flex-col lg:pl-80 pl-6 pb-24 lg:pb-36">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold leading-none  tracking-tight border-l-8 pl-5 border-white md:text-5xl lg:text-4xl text-white">
            Get back to growth with CRM.
          </h1>
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight pl-5 md:text-5xl lg:text-6xl text-white">
            6+ Months
          </h1>
          <p className="text-lg font-normal text-white lg:text-xl lg:pr-36">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Descript;
