import {FcViewDetails, FcAddressBook} from "react-icons/fc";
import {FaLuggageCart} from "react-icons/fa"
import {BsNewspaper} from "react-icons/bs"
import {AiTwotoneSetting} from "react-icons/ai"

function LeftbarUser() {
  return (
    <div className="font-InterFont">
        <aside
  className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
  style={{ height: "90.5vh" }}
  x-show="asideOpen"
>
  <a
    href="#"
    className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
  >
    <span className="text-2xl">
      <FcViewDetails style={{
      margin: "3px"
    }}/>
    </span>
    <span>My Details</span>
  </a>
  <a
    href="#"
    className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
  >
    <span className="text-2xl">
      <i className="bx bx-cart" />
      <FcAddressBook style={{
      margin: "3px"
    }}/>
    </span>
    <span>My Address Book</span>
  </a>
  <a
    href="#"
    className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
  >
    <span className="text-2xl">
      <FaLuggageCart color="green" style={{
      margin: "3px"
    }}/>
    </span>
    <span>My Orders</span>
  </a>
  <a
    href="#"
    className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
  >
    <span className="text-2xl">
      <BsNewspaper style={{
      margin: "3px"
    }}/>
    </span>
    <span>My Newsletter</span>
  </a>
  <a
    href="#"
    className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
  >
    <span className="text-2xl">
      <AiTwotoneSetting color="blue"     style={{
      margin: "3px"
    }}/>
    </span>
    <span>Accout Settings</span>
  </a>
</aside>

    </div>
  )
}

export default LeftbarUser