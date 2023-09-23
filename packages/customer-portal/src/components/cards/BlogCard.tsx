/* eslint-disable @next/next/no-img-element */
import { BsArrowRight } from 'react-icons/bs';
import lady from '../../asset/images/lady.png';

function BlogCard({ id, imageUrl, datetime, date, href, title }: any) {
  return (
    <article
      key={id}
      className="relative h-72 sm:h-96 lg:h-80 overflow-hidden rounded-2xl shadow-lg bg-gray-900"
    >
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 z-10" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 z-20" />

      <div className="absolute bottom-4 left-4 sm:left-6 lg:left-8 z-30">
        <time dateTime={datetime} className="text-gray-300 text-xs">
          {date}
        </time>
      </div>
      <h3 className="absolute bottom-14 left-4 sm:left-6 lg:left-8 z-30 text-lg font-semibold leading-6 text-white">
        <a href={href} className="hover:underline">
          {title}
        </a>
      </h3>
      <a href={href} className="absolute bottom-4 right-4 sm:right-6 lg:right-8 z-30 text-gray-300 hover:text-white">
        <BsArrowRight className="inline-block mr-1" /> Read More
      </a>
    </article>
  );
}

export default BlogCard;
