import React, { useState, useEffect,useContext} from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianAxis} from 'recharts';

import TabChart from './Tabs';
import { AppContext } from '../AppContext'; 
import Card from './Card';


const Chart = () => {
  const { isContentVisible} = useContext(AppContext);
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
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 4200, pv: 2400, amt: 2400 },
        { name: 'March', uv: 2000, pv:  6000, amt: 9000 },
        { name: 'April', uv: 6000, pv: 9800, amt: 2290 },
        { name: 'May', uv: 6000, pv: 9800, amt: 2290 },
        { name: 'June', uv: 6000, pv: 9800, amt: 2290 },
      ],
      month: [
        // Add data for the Month tab
          // Add data for the Week tab
          { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
          { name: 'Feb', uv: 4200, pv: 2400, amt: 2400 },
          { name: 'March', uv: 2000, pv:  6000, amt: 9000 },
         
          { name: 'June', uv: 6000, pv: 9800, amt: 2290 },
      ],
      year: [
          // Add data for the Week tab
          { name: 'Jan', uv: 2000, pv: 2400, amt: 2400 },
          { name: 'Feb', uv: 3000, pv: 3200, amt: 2400 },
          { name: 'March', uv: 2000, pv:  6000, amt: 9000 },
          { name: 'April', uv: 3000, pv: 5000, amt: 6000 },
          { name: 'May', uv: 2000, pv: 3000, amt: 4290 },
          { name: 'June', uv: 6000, pv: 9800, amt: 2290 },
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


  const handleTabClick = (value, index) => {
    setActiveTab(value);
   
    // Do something with the value and index in this parent component
  };
  return (
    <div>
      <Card className2=" prl-20  mw-85 colorBG-Unset">
      <div className="mt-05">
       {isContentVisible && <TabChart  onTabClick={handleTabClick}  className="fade-in-out"/>}
       </div>
      </Card>
     <Card className1="mt-07" className2="p-20 mw-85">

      <div className="grid-container plr-10 ">
    <div className="grid-item">
    <div className="dot-with-text color-danger">Lower2:<span>$4.895</span></div>
    </div>
    <div className="grid-item">
    <div className="card-container">
    <div className="dot-with-text color-success">Higher:<span>$6.857</span></div>
    </div>
      
    </div>
  </div>
    <div className="chart-container">
   
     
      <div className="chart-card">
      <div className="responsive-chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <XAxis dataKey="name" tick={false} /> {/* Hide X-axis indications */}
            <YAxis hide /> {/* Hide Y-axis */}
            {/* Parabolic area chart with yellow color fill */}
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#ffa629"
              fill="#fff7ee"
              strokeWidth={3} 
              activeDot={{ r: 8, strokeWidth: 2, fill: '#ffa629' }} // Display dot at the last data point
              label={(props) => {
                const { x, y, value } = props;
                if (value === chartData[chartData.length - 1].pv) {
                  return (
                    <circle cx={x} cy={y} r={5} fill="#ffa629" />
                  );
                }
                return null;
              }}
            />
            
             <CartesianAxis
              axisLine={{ stroke: '#ffa629' }} // Change the X-axis line to red
              tickLine={false} // Hide tick line
              orientation="bottom" // Specify orientation as bottom for X-axis
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
      </div>
      </Card>
    </div>
  );
};

export default Chart;
