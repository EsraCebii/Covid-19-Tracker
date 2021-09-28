import React, {useEffect, useState} from 'react';
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData} from "../redux/contriesSlice"

function Chart() {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
          setDailyData(await fetchDailyData());
        };
        fetchAPI();
      }, []);
    return (
        <div>
        <Line
      data={{
        labels:34,
        datasets: [
          {
            data: 13,
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: 12,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
            
        </div>
    )
}

export default Chart
