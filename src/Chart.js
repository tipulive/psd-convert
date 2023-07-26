import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianAxis} from 'recharts';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Chart = () => {
  const [activeTab, setActiveTab] = useState('day');
  const [chartData, setChartData] = useState([]);

  // Simulate data fetching with a delay
  const fetchChartData = (tab) => {
    const data = {
      day: [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        // Add more data for the Day tab
      ],
      week: [
        // Add data for the Week tab
      ],
      month: [
        // Add data for the Month tab
      ],
      year: [
        // Add data for the Year tab
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data[tab]);
      }, 1000); // Simulate a delay of 1 second for data fetching
    });
  };

  useEffect(() => {
    fetchChartData(activeTab).then((data) => {
      setChartData(data);
    });
  }, [activeTab]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="chart-container">
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label="Day" value="day" />
        <Tab label="Week" value="week" />
        <Tab label="Month" value="month" />
        <Tab label="Year" value="year" />
      </Tabs>
      <div className="chart-card">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <XAxis dataKey="name" tick={false} /> {/* Hide X-axis indications */}
            <YAxis hide /> {/* Hide Y-axis */}
            {/* Parabolic area chart with yellow color fill */}
            <Area
              type="monotone"
              dataKey="pv"
              stroke="blue"
              fill="#ffc658"
              strokeWidth={3} 
              activeDot={{ r: 8, strokeWidth: 2, fill: '#ff0000' }} // Display dot at the last data point
              label={(props) => {
                const { x, y, value } = props;
                if (value === chartData[chartData.length - 1].pv) {
                  return (
                    <circle cx={x} cy={y} r={5} fill="#ff0000" />
                  );
                }
                return null;
              }}
            />
            
             <CartesianAxis
              axisLine={{ stroke: 'red' }} // Change the X-axis line to red
              tickLine={false} // Hide tick line
              orientation="bottom" // Specify orientation as bottom for X-axis
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
