import Link from "next/link"

function Button({title, href}: any) {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        <Link href={href} className="text-sm font-semibold leading-6 z-40 bg-sky-500 px-3 rounded-md shadow-sm  text-white hover:bg-sky-400 hover:scale-95 py-1" type="button">
            {title}
        </Link>
    </div>
  )
}

export default Button