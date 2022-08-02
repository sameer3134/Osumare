import React from 'react'
import {FaMapMarker, FaMobile, FaSearch, FaSms, FaVideo, FaYoutube } from 'react-icons/fa'
const B = () => {
  return (
    <div>
        <section className="text-orange-800 body-font">
  <section className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-800 font-black"> We do these amazing stuff</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Digital marketing services that help you rank,
engage and convert</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaSearch size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">Search Engine Marketing</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaMobile size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">Mobile Marketing</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaSms size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">SMS Marketing</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaMapMarker size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">Google Map Marketing</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaVideo size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">Video Marketing</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-red-800 border p-4 rounded-lg hover:shadow-lg">
<FaYoutube size={50}/>  
          <div className="flex-grow">
            <h2 className="text-orange-800 mx-5 text-2xl title-font font-medium">Youtube Marketing</h2>
          </div>
        </div>
      </div>
    </div>
    </section>
</section>
    </div>
  )
}

export default B