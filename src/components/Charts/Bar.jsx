import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, BarSeries, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';

import { barData } from '../../data/dummy';

const Bar = () => (
  <div className=" w-full">
    <ChartComponent
      id="charts"
      style={{ textAlign: 'center' }}
      legendSettings={{ enableHighlight: true }}
      primaryXAxis={{
        valueType: 'Category',
        majorGridLines: { width: 0 },
      }}
      primaryYAxis={{
        labelFormat: '{value}k',
        title: '',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
      }}
      chartArea={{ border: { width: 0 } }}
      title=""
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          BarSeries,
          DataLabel,
          Category,
          Legend,
          Tooltip,
          Highlight,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={barData}
          xName="x"
          yName="y"
          type="Bar"
          columnSpacing={0.1}
          width={2}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>

);

export default Bar;
