import ShippingFilter from '@/app/bookings/components/ShippingFilter';

function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 bg-gradient-to-tl from-white to-sky-200">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Payments tool for software companies
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          From checkout to global sales tax compliance, companies.
        </p>
        <ShippingFilter />
      </div>
    </section>
  );
}

export default Hero;
