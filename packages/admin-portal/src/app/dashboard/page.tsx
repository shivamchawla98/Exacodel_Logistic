import Aside from './components/Aside';
import Header from './components/Header';
import ReportsTable from './components/Reports';

function page() {
  return (
    <div className='flex bg-gray-100'>
      <Aside />
      <div className='w-full' >
      <Header />
      <ReportsTable />
      </div>
    </div>
  );
}

export default page;
