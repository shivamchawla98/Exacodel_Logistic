const HeroSlider = () => {
  return (
    <div className="font-sans  bg-white text-[#333] py-12 px-4  bg-gradient-to-r from-white via-[#E4FE66] to-[#7ed9aa]">
      <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
        <h2 className="lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">
          Logistics & Trade Finance solution
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <p className="text-base leading-relaxed">
              Today SeaRates can offer an extensive finance solution to support
              your international deals. Working with world&apos;s leading
              NBFC&apos;s through DP World&apos;s Finance we give you deferred
              payment options for either logistics services or even payments for
              the goods.
            </p>
            <div className="mt-12">
              <button
                type="button"
                className="bg-[#55F5A3] hover:bg-green-400 transition-all text-[#333] font-bold text-sm rounded-full px-5 py-3"
              >
                Getting Started
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img
                src="https://readymadeui.com/google-logo.svg"
                className="w-28 mx-auto"
                alt="google-logo"
              />
              <img
                src="https://readymadeui.com/facebook-logo.svg"
                className="w-28 mx-auto"
                alt="facebook-logo"
              />
              <img
                src="https://readymadeui.com/linkedin-logo.svg"
                className="w-28 mx-auto"
                alt="linkedin-logo"
              />
              <img
                src="https://readymadeui.com/pinterest-logo.svg"
                className="w-28 mx-auto"
                alt="pinterest-logo"
              />
            </div>
          </div>
          <div>
            <img
              src="https://readymadeui.com/readymadeui_banner.webp"
              className="shrink-0 w-full h-full rounded-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
