import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Inject } from '@syncfusion/ej2-react-grids';

import { salesData, salesGrid } from '../../data/dummy';

const Sales = () => (
  <div className=" md:m-10 p-2 bg-white rounded-3xl">
    <GridComponent
      id="gridcomp"
      dataSource={salesData}
      gridLines="Horizontal"
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {salesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Resize]} />
    </GridComponent>
  </div>
);
export default Sales;
