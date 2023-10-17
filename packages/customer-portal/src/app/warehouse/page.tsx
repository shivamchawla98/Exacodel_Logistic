'use client'
import { useState } from "react";
import BookModal from "./components/BookModal";
import Card from "./components/Card"
import { FiSearch } from 'react-icons/fi';





const arr = [1,2,3,4,5];

const SearchBar = () => {

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">

        <div className="relative text-gray-600">
          <input
            type="text"
            placeholder="Search Storage Location..."
            className="w-full h-10 px-5 text-white pr-10 text-sm rounded-full bg-sky-800 focus:outline-none focus:border-sky-400 focus:ring focus:ring-indigo-200"
          />
          <div className="absolute right-0 top-0 mt-3 mr-4">
            <FiSearch className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    );
  };

function Page() {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    return (
        <main className="bg-white my-6">
                  <BookModal  isOpen= {isOpen} closeModal= {closeModal} />
                <SearchBar />
                {arr.map((index: any) => <Card key={index} openModal={openModal} />)}

        </main>
    )
}

export default Page