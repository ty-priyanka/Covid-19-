 import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (data) => {
    // if (!data.data) return null;
    console.log(data.data, "ioio")
    const chartData = {
        labels: ['Active Cases', 'Recovered', 'Deaths'],
        datasets: [
            {
                data: [100, 500,300],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
            }
        ]
    };

    const data1 = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return (
        <div>
            <Pie data={data1} />
        </div>
    );
};

export default PieChart;







