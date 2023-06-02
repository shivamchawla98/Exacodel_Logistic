
import { FcViewDetails,FcCustomerSupport } from 'react-icons/fc';

function LeftbarUser({change}) {
  return (
    <div className="font-InterFont">
      

      <aside
        className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-gray-900 p-2"
        style={{ height: '100vh', paddingTop: '50px' }}
        x-show="asideOpen"
      >
        <a
          onClick={() => change()}
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 text-white hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <FcViewDetails
              style={{
                margin: '3px',
              }}
            />
          </span>
          <span>Admin</span>
        </a>
        <a
          href="#"
          className="text-white flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-cart" />
            <FcCustomerSupport
              style={{
                margin: '3px',
              }}
            />
          </span>
          <span>Customer</span>
        </a>
      </aside>
    </div>
  );
}

export default LeftbarUser;
