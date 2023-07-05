import LogoImg from "./LogoImg";

function Brand() {
  return (
    <section className="bg-white ">
      <div className="container flex h-[60vh] justify-center items-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <LogoImg
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
              />
              <LogoImg
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
              />
              <LogoImg
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
              />
              <LogoImg
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
