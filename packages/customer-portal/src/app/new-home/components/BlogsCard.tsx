import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

function BlogsCard() {
  return (
    <div className="w-60 flex-center flex-col">
      <Image src="/images/w1.jpg" alt="ship Images" height={300} width={210} />
      <div className="flex justify-evenly item-center mt-2">
        <FaRegCalendarAlt className="h-10 w-10 text-orange-500 pr-4 border-r border-gray-300" />
        <div className="flex-center flex-col">
          <h3 className="h3-semibold text-gray-950">08</h3>
          <p className="text-gray-600 text-xs ml-4 paragraph-normal">
            September
          </p>
        </div>
      </div>
      <div className="flex-center flex-col">
        <p className="paragraph-medium w-full text-base text-center text-gray-900">
          Empowering Nation Through International Trade
        </p>
        <p className="text-xs text-gray-700 w-full mt-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi,
          consequatur molestiae,
        </p>
      </div>
    </div>
  );
}

export default BlogsCard;
