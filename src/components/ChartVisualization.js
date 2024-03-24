import React, { useMemo } from 'react';
import Chart from "react-apexcharts";

const Graph = React.memo(({ data }) => {
  const options = useMemo(() => ({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: data.map((item) => item.name)
    }
  }), [data]);

  const series = useMemo(() => ([
    {
      name: "series-1",
      data: data.map((item) => item.grade)
    }
  ]), [data]);

  return (
    <div className='row' >
      <div className='col-3 ms-3 me-5'>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="500"
      />
      </div>
      <div className='col-3 me-5 ms-5'>
        <Chart
        options={options}
        series={series}
        type="line"
        width="500"
      />
      </div>
      <div className='col-3 me-5 ms-5'>
      <Chart
        options={options}
        series={series}
        type="area"
        width="500"
      />
      </div>
      
     </div>
  );
});

export default Graph;