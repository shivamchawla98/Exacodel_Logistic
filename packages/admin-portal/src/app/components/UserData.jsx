import Card from "./Card";
import {FaFilter} from "react-icons/fa"

function UserData() {
  return (
    <>
      <div className="flex justify-center mx-auto w-1/2">
        <Card icons={'IoIosPeople'} title={'Total Users'} numbers={234} />
        <Card icons={'activity'} title={'Total Users'} numbers={234} />
        <Card icons={'default'} title={'Total Users'} numbers={234} />
      </div>
      <h1 className="text-2xl ml-4 font-semibold">Members</h1>
      <button
        className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        style={{
          width: '110px',
        }}
      >
        <FaFilter style={{ display: 'inline', marginRight: '4px' }} />
        filter
      </button>

      <div
        className="px-4 pb-2 overflow-x-auto overflow-y-scroll h-1/2 "
        data-path="0.0.0.0"
      >
        <table
          className="table-auto w-full text-left min-w-max border"
          data-path="0.0.0.0.0"
        >
          <thead className="border-b" data-path="0.0.0.0.0.0">
            <tr data-path="0.0.0.0.0.0.0">
              <th className="pl-6 py-5" scope="col" data-path="0.0.0.0.0.0.0.0">
                <button
                  className="flex items-center"
                  data-path="0.0.0.0.0.0.0.0.0"
                >
                  <small
                    data-config-id="col1-header"
                    data-path="0.0.0.0.0.0.0.0.0.0"
                  >
                    Surname
                  </small>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-1-2"
                    data-path="0.0.0.0.0.0.0.0.0.1"
                  >
                    <path
                      d="M11.3327 6.00002L7.99935 2.66669L4.66602 6.00002M4.66602 10L7.99935 13.3334L11.3327 10"
                      stroke="#C5C5C5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-path="0.0.0.0.0.0.0.0.0.1.0"
                    />
                  </svg>
                </button>
              </th>
              <th className="px-3 py-5" scope="col" data-path="0.0.0.0.0.0.0.1">
                <button
                  className="flex items-center"
                  data-path="0.0.0.0.0.0.0.1.0"
                >
                  <small
                    data-config-id="col2-header"
                    data-path="0.0.0.0.0.0.0.1.0.0"
                  >
                    Name
                  </small>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-2"
                    data-path="0.0.0.0.0.0.0.1.0.1"
                  >
                    <path
                      d="M11.3327 6.00002L7.99935 2.66669L4.66602 6.00002M4.66602 10L7.99935 13.3334L11.3327 10"
                      stroke="#C5C5C5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-path="0.0.0.0.0.0.0.1.0.1.0"
                    />
                  </svg>
                </button>
              </th>
              <th className="px-3 py-5" scope="col" data-path="0.0.0.0.0.0.0.2">
                <button
                  className="flex items-center"
                  data-path="0.0.0.0.0.0.0.2.0"
                >
                  <small
                    data-config-id="col3-header"
                    data-path="0.0.0.0.0.0.0.2.0.0"
                  >
                    E-mail
                  </small>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-3-2"
                    data-path="0.0.0.0.0.0.0.2.0.1"
                  >
                    <path
                      d="M11.3327 6.00002L7.99935 2.66669L4.66602 6.00002M4.66602 10L7.99935 13.3334L11.3327 10"
                      stroke="#C5C5C5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-path="0.0.0.0.0.0.0.2.0.1.0"
                    />
                  </svg>
                </button>
              </th>
              <th className="px-3 py-5" scope="col" data-path="0.0.0.0.0.0.0.3">
                <button
                  className="flex items-center"
                  data-path="0.0.0.0.0.0.0.3.0"
                >
                  <small
                    data-config-id="col4-header"
                    data-path="0.0.0.0.0.0.0.3.0.0"
                  >
                    Package
                  </small>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-4-2"
                    data-path="0.0.0.0.0.0.0.3.0.1"
                  >
                    <path
                      d="M11.3327 6.00002L7.99935 2.66669L4.66602 6.00002M4.66602 10L7.99935 13.3334L11.3327 10"
                      stroke="#C5C5C5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-path="0.0.0.0.0.0.0.3.0.1.0"
                    />
                  </svg>
                </button>
              </th>
              <th className="pr-6 py-5" scope="col" data-path="0.0.0.0.0.0.0.4">
                <button
                  className="flex items-center"
                  data-path="0.0.0.0.0.0.0.4.0"
                >
                  <small
                    data-config-id="col5-header"
                    data-path="0.0.0.0.0.0.0.4.0.0"
                  >
                    Purchased
                  </small>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-5-2"
                    data-path="0.0.0.0.0.0.0.4.0.1"
                  >
                    <path
                      d="M11.3327 6.00002L7.99935 2.66669L4.66602 6.00002M4.66602 10L7.99935 13.3334L11.3327 10"
                      stroke="#C5C5C5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-path="0.0.0.0.0.0.0.4.0.1.0"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody data-path="0.0.0.0.0.1" className="">
            <tr className="border-b" data-path="0.0.0.0.0.1.0">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.0.0">
                <small
                  className="font-normal"
                  data-config-id="col1-1"
                  data-path="0.0.0.0.0.1.0.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.0.1">
                <small data-config-id="col2-1" data-path="0.0.0.0.0.1.0.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.0.2">
                <small data-config-id="col3-1" data-path="0.0.0.0.0.1.0.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.0.3">
                <small data-config-id="col4-1" data-path="0.0.0.0.0.1.0.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.0.4">
                <small data-config-id="col5-1" data-path="0.0.0.0.0.1.0.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr className="border-b" data-path="0.0.0.0.0.1.1">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.1.0">
                <small
                  className="font-normal"
                  data-config-id="col1-2"
                  data-path="0.0.0.0.0.1.1.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.1.1">
                <small data-config-id="col2-2" data-path="0.0.0.0.0.1.1.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.1.2">
                <small data-config-id="col3-2" data-path="0.0.0.0.0.1.1.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.1.3">
                <small data-config-id="col4-2" data-path="0.0.0.0.0.1.1.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.1.4">
                <small data-config-id="col5-2" data-path="0.0.0.0.0.1.1.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr className="border-b" data-path="0.0.0.0.0.1.2">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.2.0">
                <small
                  className="font-normal"
                  data-config-id="col1-3"
                  data-path="0.0.0.0.0.1.2.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.2.1">
                <small data-config-id="col2-3" data-path="0.0.0.0.0.1.2.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.2.2">
                <small data-config-id="col3-3" data-path="0.0.0.0.0.1.2.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.2.3">
                <small data-config-id="col4-3" data-path="0.0.0.0.0.1.2.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.2.4">
                <small data-config-id="col5-3" data-path="0.0.0.0.0.1.2.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr className="border-b" data-path="0.0.0.0.0.1.3">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.3.0">
                <small
                  className="font-normal"
                  data-config-id="col1-4"
                  data-path="0.0.0.0.0.1.3.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.3.1">
                <small data-config-id="col2-4" data-path="0.0.0.0.0.1.3.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.3.2">
                <small data-config-id="col3-4" data-path="0.0.0.0.0.1.3.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.3.3">
                <small data-config-id="col4-4" data-path="0.0.0.0.0.1.3.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.3.4">
                <small data-config-id="col5-4" data-path="0.0.0.0.0.1.3.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr data-path="0.0.0.0.0.1.4">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.4.0">
                <small
                  className="font-normal"
                  data-config-id="col1-5"
                  data-path="0.0.0.0.0.1.4.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.1">
                <small data-config-id="col2-5" data-path="0.0.0.0.0.1.4.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.2">
                <small data-config-id="col3-5" data-path="0.0.0.0.0.1.4.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.3">
                <small data-config-id="col4-5" data-path="0.0.0.0.0.1.4.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.4.4">
                <small data-config-id="col5-5" data-path="0.0.0.0.0.1.4.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr data-path="0.0.0.0.0.1.4">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.4.0">
                <small
                  className="font-normal"
                  data-config-id="col1-5"
                  data-path="0.0.0.0.0.1.4.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.1">
                <small data-config-id="col2-5" data-path="0.0.0.0.0.1.4.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.2">
                <small data-config-id="col3-5" data-path="0.0.0.0.0.1.4.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.3">
                <small data-config-id="col4-5" data-path="0.0.0.0.0.1.4.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.4.4">
                <small data-config-id="col5-5" data-path="0.0.0.0.0.1.4.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr data-path="0.0.0.0.0.1.4">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.4.0">
                <small
                  className="font-normal"
                  data-config-id="col1-5"
                  data-path="0.0.0.0.0.1.4.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.1">
                <small data-config-id="col2-5" data-path="0.0.0.0.0.1.4.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.2">
                <small data-config-id="col3-5" data-path="0.0.0.0.0.1.4.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.3">
                <small data-config-id="col4-5" data-path="0.0.0.0.0.1.4.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.4.4">
                <small data-config-id="col5-5" data-path="0.0.0.0.0.1.4.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
            <tr data-path="0.0.0.0.0.1.4">
              <th className="pl-6 py-5" scope="row" data-path="0.0.0.0.0.1.4.0">
                <small
                  className="font-normal"
                  data-config-id="col1-5"
                  data-path="0.0.0.0.0.1.4.0.0"
                >
                  Kowalski
                </small>
              </th>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.1">
                <small data-config-id="col2-5" data-path="0.0.0.0.0.1.4.1.0">
                  Pawel
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.2">
                <small data-config-id="col3-5" data-path="0.0.0.0.0.1.4.2.0">
                  kowalski@pstls.com
                </small>
              </td>
              <td className="px-3 py-5" data-path="0.0.0.0.0.1.4.3">
                <small data-config-id="col4-5" data-path="0.0.0.0.0.1.4.3.0">
                  Standard
                </small>
              </td>
              <td className="pr-6 py-5" data-path="0.0.0.0.0.1.4.4">
                <small data-config-id="col5-5" data-path="0.0.0.0.0.1.4.4.0">
                  04/12/2022
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserData;
