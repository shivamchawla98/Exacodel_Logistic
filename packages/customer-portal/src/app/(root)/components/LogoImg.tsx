import Image from "next/image"

function LogoImg({ href, imgSrc, Alt }: any) {
  return (
    <>
    <a
      href={href}
      className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
    >
      {/* <img src={imgSrc} alt={Alt} className="w-full h-10" /> */}
      <Image
        src={imgSrc}
        alt="logo"
        className="w-full"
        height={10}
        width={10}
      />
    </a>
  </>
  )
}

export default LogoImg