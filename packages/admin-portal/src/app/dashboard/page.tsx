"use client"
import { useState } from 'react';
import Aside from './components/Aside';
import Header from './components/Header';
import ReportsTable from './components/Reports';
import AddModule from './components/AddModule';


function page() {
  const [showAddModule, setShowAddModule] = useState(false)
  function toggleAddModule(params: null) {
    setShowAddModule(!showAddModule);
    console.log(showAddModule);
    return showAddModule;
  }

  return (
    <div className='flex bg-gray-100'>
      <Aside toggleAddModule={toggleAddModule}/>
      <div className='w-full' >
      <Header />
      {showAddModule ? <AddModule /> :
      <ReportsTable showAddModule={showAddModule} />
      }
      
      </div>
    </div>
  );
}

export default page;
