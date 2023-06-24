"use state"
import {HiDocumentReport} from 'react-icons/hi'
import AddModule from './AddModule';

const ReportsTable = ({}) => {
  return (
    <>
    <div className="w-full mt-12 mx-auto">
      <p className="text-xl w-11/12 font-medium pb-3 flex items-center m-6 ml-8">
        <HiDocumentReport className="text-4xl  ml-4" /> Latest Reports
      </p>
      <div className="bg-gray-100 overflow-auto w-full flex justify-center">
        <table className="w-11/12 bg-gray-100">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Lian</td>
              <td className="w-1/3 text-left py-3 px-4">Smith</td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">Emma</td>
              <td className="w-1/3 text-left py-3 px-4">Johnson</td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            {/* Add more table rows as needed */}
          </tbody>
        </table>
      </div>
    </div>

    </>
  );
};

export default ReportsTable;
