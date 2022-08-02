import React from 'react'

const E = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-medium title-font mb-4 font-black text-red-800">contact us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-red-800 text-xl">Good Relation always need communication.</p>
    </div></div></section>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-red-800 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1 text-orange-800">Pune, Maharashtra</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-red-800 tracking-widest text-xs">EMAIL</h2>
          <a className="text-orange-800 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-red-800 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed text-orange-800">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-red-800 font-black text-3xl mb-1 font-medium title-font">GET IN TOUCH</h2>
          <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-xl text-red-800">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-red-800 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-red-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-xl text-red-800">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-red-800 focus:border-red-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-red-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-xl text-red-800">What's on your mind</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-red-800 focus:border-red-800 focus:ring-2 focus:ring-red-800 h-32 text-base outline-none text-red-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className='bg-red-800 text-orange-200 border border-orange-200 font-bold py-2 px-6 rounded hover:bg-orange-200 hover:text-red-800 hover:border-red-800 
    duration-500'>
          Submit 
        </button>
    </div>
  </div>
</section>
    </div>
  )
}

export default E