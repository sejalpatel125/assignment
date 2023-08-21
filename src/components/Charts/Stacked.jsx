/* eslint-disable operator-assignment */
import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

export const data1 = [
  { x: 'Jan', y: 400 },
  { x: 'Fab', y: 100 },
  { x: 'Mar', y: 200 },
  { x: 'Apr', y: 240 },
  { x: 'May', y: 300 },
];

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{ majorGridLines: { width: 0 }, minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, interval: 1, lineStyle: { width: 0 }, valueType: 'Category' }}
      primaryYAxis={{ title: '', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 }, minorTickLines: { width: 0 }, labelFormat: '{value}$' }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stackedChartData} xName="x" yName="y" name="" columnWidth={0.6} border={{ width: 1, color: 'white' }} type="StackingColumn" />

      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
