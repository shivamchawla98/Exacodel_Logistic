function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const HeroSlider = ({ title, para, heroImage, logo, gradient }: any) => {
  return (
    <div
      className={classNames(
        "font-sans  bg-white text-white pb-12 px-4 lg:h-screen",
        gradient
      )}
    >
      <div className=" max-lg:6xl max-md:max-w-md mx-auto max-md:text-center lg:h-screen">
        <h2 className="pt-10 md:text-5xl text-3xl h1-bold md:max-w-4xl">
          {title}
        </h2>
        <div className={classNames("grid md:grid-cols-2 gap-12 mt-8")}>
          <div>
            <p className="text-base paragraph-regular">{para}</p>
            <div className="mt-12">
              <button
                type="button"
                className="bg-white hover:bg-gray-100 transition-all text-[#333] font-bold text-sm rounded-md px-5 py-3"
              >
                Getting Started
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              {/* {logo.map(({ item, index }: any) => (
                <img
                  key={index}
                  src={item.img}
                  className="w-28 mx-auto"
                  alt={item.alt}
                />
              ))} */}
            </div>
          </div>
          <div>
            <img
              src={heroImage}
              className="shrink-0 w-full h-full rounded-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
