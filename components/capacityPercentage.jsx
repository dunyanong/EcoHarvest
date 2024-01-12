import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const calculatePercentage = (ultrasonicValue) => {
  const binHeight = 3000;
  return ((binHeight - ultrasonicValue) / binHeight) * 100;
};

const renderChartDetails = (ctx, percentage, centerX, centerY) => {
  // Display percentage
  ctx.font = 'bold 30px Arial';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Render the text containing the percentage
  ctx.fillText(`${percentage.toFixed(0)}% filled`, centerX, centerY - 15);
};


const Percentage = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chartContainerNode = chartContainer.current;
    const ctx = chartContainerNode.getContext('2d');

    // Check if there's an existing chart and destroy it
    if (chartContainerNode.chart) {
      chartContainerNode.chart.destroy();
    }

    // Assuming data.ultrasonic is a string like "0.00cm"
    const ultrasonicValue = parseInt(data.ultrasonic.replace('cm', ''), 10);
    const percentage = calculatePercentage(ultrasonicValue);

    // Create new chart
    chartContainerNode.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Filled', 'Empty'],
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: ['#000000', '#FFFFFF'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%', // Adjust the cutout based on your preference
        legend: {
          display: false, // Remove the legend
        },
        animation: {
          onComplete: (animation) => {
            const chartInstance = animation.chart;
            const centerY = (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2;
            const centerX = (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2;
      
            renderChartDetails(ctx, percentage, centerX, centerY);
          },
        },
      },
    });
  }, [data]);

  return (
    <div style={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }} className='pt-10'>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Percentage;