import React from 'react';
import {IoIosPeople} from "react-icons/io"
import {LuActivity} from "react-icons/lu"
import {FaUserCog} from "react-icons/fa"

function Card({title, numbers, icons}: any) {
  return (
    <div className="
                p-6 mx-8 bg-white rounded-xl 
                shadow-lg flex items-center space-x-4
                w-1/3 h-28
    " 
        // style={{width: "190px", height: "98px"}}
    >
        {icons === 'IoIosPeople' ? <IoIosPeople size={80} color='green'/> 
        : icons === 'activity' ? <LuActivity size={80}/> : <FaUserCog size={80} />
        }
        
      <div style={{width: "190px", height: "98px"}} className='mx-auto my-auto'>
        <div className="text-xl font-medium text-black text-center">{numbers}</div>
        <p className="text-slate-500 text-center">{title}</p>
      </div>
    </div>
  );
}

export default Card;
