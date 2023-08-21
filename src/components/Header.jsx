/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Header = ({ title }) => (
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <div className=" mb-10">
        <p className="ml-5 text-3xl font-bold tracking-tight text-black-300 dark:text-white">
          {title}
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Store</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Store1</option>
            <option>Store 2</option>
            <option>Store3 </option>
          </select>

        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Date Form</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>2018-08-31</option>
          </select>

        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Date To</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>2018-08-31</option>
          </select>

        </div>
      </div>
    </div>
  </div>
);

export default Header;
