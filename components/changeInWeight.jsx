import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const calculatePercentage = (ultrasonicValue) => {
  const binHeight = 3000;
  return ((binHeight - ultrasonicValue) / binHeight) * 100;
};


const changeInWeight = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chartContainerNode = chartContainer.current;
    const ctx = chartContainerNode.getContext('2d');


    // Assuming data.ultrasonic is a string like "0.00cm"
    const ultrasonicValue = parseInt(data.ultrasonic.replace('cm', ''), 10);
    const percentage = calculatePercentage(ultrasonicValue);


  }, [data]);

  return (
    <div>

    </div>
  );
};

export default changeInWeight;