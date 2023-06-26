import React from 'react';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';

import Header from "./components/Header"
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [openPoint, setOpenPoint] = useState('');
  const [highPoint, setHighPoint] = useState('');
  const [lowPoint, setLowPoint] = useState('');
  const [volumePoint, setVolumePoint] = useState('');
  const [finalPrediction, setPrediction] = useState({'prediction': "Prediction"});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpenChange = (event) => {
		setOpenPoint(event.target.value);
	};
  const handleHighChange = (event) => {
		setHighPoint(event.target.value);
	};
  const handleLowChange = (event) => {
		setLowPoint(event.target.value);
	};
  const handleVolumeChange = (event) => {
		setVolumePoint(event.target.value);
	};
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  }
  const handeEndDate = (event) => {
    setEndDate(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/loadinitialdata/');
        const jsonData = await response.json();
        const variableFromJson = JSON.parse(jsonData);
        setData(variableFromJson);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    
    fetchData();
  }, [])

  const handePrediction = (event) => {
    event.preventDefault();
    try{
      fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: JSON.stringify({
          Open: openPoint,
          High: highPoint,
          Low: lowPoint,
          Vol: volumePoint
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => {setPrediction(json); console.log(json)});
    }
    catch(error){
      console.log('Error:', error);
    }
  }

  const filterGraphRange = (event) => {
    event.preventDefault();
    try{
      fetch("http://127.0.0.1:8000/getdaterange/", {
        method: "POST",
        body: JSON.stringify({
          StartDate: startDate,
          EndDate: endDate,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => {setData(JSON.parse(json))});
    }
    catch(error){
      console.log('Error:', error);
    }
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-4" style={{height: "94vh"}}>
        <div className="" style={{backgroundColor: "#d4edf7"}}>
          <div className="m-10">
            <div style={{textAlign: "center", color: "black", fontWeight: "800", fontSize: "22px", marginBottom: "2rem"}}>
              Heating Oil Futures - USA 🇺🇸 (NYFN3)
            </div>
            <form onSubmit={(e) => {filterGraphRange(e)}}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                    <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="startdate" required onChange={handleStartDate} min='1990-01-31' max='2023-03-30'/>
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                    <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="startdate" required onChange={handeEndDate} min='1990-01-31' max='2023-03-31'/>
                </div>
              </div>
              <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Range</button>
              </div>
            </form>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0"></hr>
          <div className="m-10">
            <div style={{textAlign: "center", color: "black", fontWeight: "700", fontSize: "20px", marginBottom: "2rem"}}>
              Predict Futures
            </div>
            <form onSubmit={(event)=>{handePrediction(event)}}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="openpoint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Open</label>
                        <input type="float" id="openpoint" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Opening Point" required autoComplete='off' onChange={handleOpenChange}/>
                    </div>  
                    <div>
                        <label htmlFor="highpoint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">High</label>
                        <input type="float" id="highpoint" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="High Point" required  autoComplete='off' onChange={handleHighChange}/>
                    </div>
                    <div>
                        <label htmlFor="lowpoint" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Low</label>
                        <input type="float" id="lowpoint" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Low Point" required autoComplete='off' onChange={handleLowChange}/>
                    </div>
                    <div>
                        <label htmlFor="volume" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume (K unit)</label>
                        <input type="float" id="volume" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Low Point" required autoComplete='off' onChange={handleVolumeChange}/>
                    </div>
                    <div style={{paddingTop: "28px"}}>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predict</button>
                    </div>
                </div>
            </form>
            <div>
              <label htmlFor="prediction" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Price Prediction</label>
              <input type="float" id="prediction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" autoComplete='off' disabled placeholder={finalPrediction['prediction']}/>
            </div>
            <div className="my-12 text-center text-gray-900">
              Developed by Aditya Patel &#169; 2023 
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mt-10">
            <ResponsiveContainer width="90%" height={250}>
              <ScatterChart
                margin={{
                  top: 10,
                  right: 40,
                  left: 40,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="Open" name="Open" domain={['auto', 'auto']} />
                <YAxis type="number" dataKey="High" name="High" domain={['auto', 'auto']}/>
                <ZAxis type="number" dataKey="Low"  name="Low" domain={['auto', 'auto']} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="gray" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="90%" height={250}>
              <LineChart
                width={500}
                height={500}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 40,
                  left: 40,
                  bottom: 0,
                }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="90%" height={250}>
              <LineChart
                width={500}
                height={500}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 40,
                  left: 40,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Line type="monotone" dataKey="High" stroke="green" fill="#82ca9d" dot={false} />
                <Line type="monotone" dataKey="Low" stroke="red" fill="#82ca9d" dot={false} />
                <Line type="monotone" dataKey="Open" stroke="blue" fill="#82ca9d" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
