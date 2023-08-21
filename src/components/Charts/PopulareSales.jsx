import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Inject } from '@syncfusion/ej2-react-grids';

import { populareData, populareGrid } from '../../data/dummy';

const PopulareSales = () => (
  <div className=" md:m-10 p-2 bg-white rounded-3xl">
    <GridComponent
      id="gridcomp"
      dataSource={populareData}
      gridLines="Horizontal"
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {populareGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Resize]} />
    </GridComponent>
  </div>
);
export default PopulareSales;
