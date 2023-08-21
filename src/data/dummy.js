import React from 'react';
import { FiShoppingBag, FiCreditCard, FiSettings } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield, BsToggles2 } from 'react-icons/bs';
import { BiStore } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';
import { MdOutlineCampaign, MdOutlineLocalOffer } from 'react-icons/md';


import { GrNotification } from 'react-icons/gr';


import APSD from './APSD.png';
import totalrevenues from './total-revenues.png';
import peoplevisited from './people-visited.png';
import UPSD from './UPSD.png';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.Sku}
      alt="order-item"
    />
  </div>
);

export const gridSalesBar = (props) => (
  <>
    <div className="w-full bg-red-200 rounded-full h-2.5 dark:bg-red-700">
      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${props.Sku}%` }} />
    </div>
    <p className="text-sm text-center text-100">{props.Sku}</p>
  </>

);

export const barData = [
  { x: 'Store1', y: 1000 },
  { x: 'Store2', y: 2500 },
  { x: 'Store3', y: 7000 },
  { x: 'Store4', y: 3400 },
  { x: 'Store5', y: 1050 },
  { x: 'Store6', y: 3005 },
];

export const populareGrid = [
  {
    field: 'ItemName',
    headerText: 'Item Category',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Stock Status',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
];

export const populareData = [
  {
    ItemName: 'Item name1',
    Status: 'In Stock',
  },
  {
    ItemName: 'Item name2',
    Status: 'Out Of Stock',
  },
  {
    ItemName: 'Item name3',
    Status: 'In Stock',
  },
  {
    ItemName: 'Item name4',
    Status: 'Out Of Stock',
  },
];

export const salesData = [
  {
    ItemName: 'Item name1',
    APSD: '$856.60',
    UPSD: '99.64',
    Sku: 25,
  },
  {
    ItemName: 'Item name2',
    APSD: '$282.45',
    UPSD: '51.18',
    Sku: 40,
  },
  {
    ItemName: 'Item name3',
    APSD: '$395.73',
    UPSD: '136.13',
    Sku: 0,
  },
  {
    ItemName: 'Item name4',
    APSD: '$37.06',
    UPSD: '7.64',
    Sku: 125,
  },
  {
    ItemName: 'Item name5',
    APSD: '$590.60',
    UPSD: '294.64',
    Sku: 25,
  },
  {
    ItemName: 'Item name6',
    APSD: '$108.60',
    UPSD: '62.98',
    Sku: 90,
  },
];

export const salesGrid = [
  {
    field: 'ItemName',
    headerText: 'Item Category',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'APSD',
    headerText: 'APSD',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'UPSD',
    headerText: 'UPSD',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    headerText: 'SKU',
    template: gridSalesBar,
    textAlign: 'Center',
  },
];

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const links = [
  {
    links: [
      {
        name: 'Dashboard',
        icon: <RiDashboardLine />,
      },
      {
        name: 'Sales',
        icon: <MdOutlineLocalOffer />,
      },
      {
        name: 'Product',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Stores',
        icon: <BiStore />,
      },
      {
        name: 'Campaign',
        icon: <MdOutlineCampaign />,
      },
      {
        name: 'Notification',
        icon: <GrNotification />,
      },
      {
        name: 'Setting',
        icon: <FiSettings />,
      },
      {
        name: 'Theam',
        icon: <BsToggles2 />,
      },
    ],
  },
];

export const EarningImage1 = () => (
  <div className="flex items-center gap-2">
    <img
      className="w-10 h-10"
      src={totalrevenues}
      alt="img"
    />
  </div>
);

export const EarningImage2 = () => (
  <div className="flex items-center gap-2">
    <img
      className="w-10 h-10"
      src={peoplevisited}
      alt="img"
    />
  </div>
);

export const EarningImage3 = () => (
  <div className="flex items-center gap-2">
    <img
      className="w-10 h-10"
      src={APSD}
      alt="img"
    />
  </div>
);

export const EarningImage4 = () => (
  <img
    className="w-10 h-10"
    src={UPSD}
    alt="img"
  />

);

export const earningData = [
  {
    icon: totalrevenues,
    amount: '$4001.23',
    percentage: '',
    title: 'Total Revenue',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
    subtitle: 'Deposite: $3333',
  },
  {
    icon: peoplevisited,
    amount: '10,233',
    percentage: '',
    title: 'Peopel Visited',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: APSD,
    amount: '423,39',
    percentage: '',
    title: 'Average per store day',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: UPSD,
    amount: '39,354',
    percentage: '',
    title: 'Unit per store day',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const stackedChartData = [
  { x: 'Jan', y: 111.1 },
  { x: 'Feb', y: 127.3 },
  { x: 'Mar', y: 143.4 },
  { x: 'Apr', y: 159.9 },
  { x: 'May', y: 159.9 },
  { x: 'Jun', y: 159.9 },
  { x: 'July', y: 159.9 },
  { x: 'Jul', y: 111.1 },
  { x: 'Aug', y: 127.3 },
  { x: 'Sep', y: 143.4 },
  { x: 'Oct', y: 159.9 },
  { x: 'Nov', y: 159.9 },
  { x: 'Dec', y: 159.9 },
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const pieChartData = [
  { x: 'Category1', y: 18, text: '18' },
  { x: 'Category2', y: 8, text: '8' },
  { x: 'Category3', y: 15, text: '15' },
  { x: 'Category4', y: 11, text: '11' },
  { x: 'Category5', y: 18, text: '18' },
  { x: 'Category6', y: 14, text: '14' },
  { x: 'Category7', y: 16, text: '16' },
];
