/* eslint-disable @next/next/no-img-element */
import { BsArrowRight } from 'react-icons/bs'
import lady from '../../asset/images/lady.png'

function BlogCard({id, imageUrl, datetime, date, href, title}: any) {
  return (
    <article
    key={id}
    className="h-64 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
  >
    <img src={imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      <time dateTime={datetime} className="mr-8">
        {date}
      </time>
    </div>
    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
      <a href={href}>
        <span className="absolute inset-0" />
        {title}
      </a>
    </h3>
  </article>
  )
}

export default BlogCard;