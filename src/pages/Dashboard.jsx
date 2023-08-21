/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Stacked, Pie, Header, Sales, PopulareSales, Bar } from '../components';
import { earningData, pieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="mt-10">
      <Header categpory="page" title="Dashboard" />
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex m-3 flex-wrap justify-center items-center">
          {earningData.map((item) => (
            <div key={item.title} className="flex m-3 flex-wrap bg-white h-34 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-200 pt-5 pb-5 ">
              <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10"
                    src={item.icon}
                    alt="img"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                <p className="ml-3">
                  <span className="text-md font-semibold">{item.title}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-400  mt-1 ml-3">{item.amount}</p>
                <p className="text-sm text-gray-400  mt-1 ml-3">{item.subtitle}&nbsp;</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 ">
            <p>Total Revenues</p>
            <div className="flex items-center gap-4">
              <p className="text-right text-gray-600 hover:drop-shadow-xl">
                <span>Average: <font>$200</font></span>
              </p>
            </div>
            <div>
              <Stacked currentMode={currentMode} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 ">
            <p>Top Popular Sales Items</p>
            <Sales />
          </div>
        </div>

      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 ">
            <p>Sales by category</p>
            <Pie id="pie-chart" data={pieChartData} legendVisiblity height="full" />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 ">
            <p>Today's Weather - 8c</p>
            <p>People Alwasy buy Items in this wather</p>
            <PopulareSales />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 ">
            <p>Stores Revenu</p>
            <Bar />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
