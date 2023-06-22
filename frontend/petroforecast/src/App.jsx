import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';

import Header from "./components/Header"
import "./App.css"

function App() {

  const data = [
    {
      "Date": "2009-12-04",
      "Price": 2.0593,
      "Open": 2.065,
      "High": 2.1197,
      "Low": 2.0477,
      "Vol": 15.38
    },
    {
      "Date": "2009-12-03",
      "Price": 2.0815,
      "Open": 2.0718,
      "High": 2.0946,
      "Low": 2.0531,
      "Vol": 14.02
    },
    {
      "Date": "2009-12-02",
      "Price": 2.0677,
      "Open": 2.107,
      "High": 2.1107,
      "Low": 2.0571,
      "Vol": 15.29
    },
    {
      "Date": "2009-12-01",
      "Price": 2.1075,
      "Open": 2.0796,
      "High": 2.1262,
      "Low": 2.0768,
      "Vol": 13.68
    },
    {
      "Date": "2009-11-30",
      "Price": 2.0479,
      "Open": 2.0111,
      "High": 2.0736,
      "Low": 1.9917,
      "Vol": 55.05
    },
    {
      "Date": "2009-11-27",
      "Price": 2.0096,
      "Open": 2.0349,
      "High": 2.0349,
      "Low": 1.9103,
      "Vol": 30.98
    }
  ]

  const printData = () => {
    const url = 'http://127.0.0.1:8000/';
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        // Use the jsonData variable here
        console.log(jsonData[0]);
      })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.log('Error:', error);
    });
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-4" style={{height: "94vh"}}>
        <div className="" style={{backgroundColor: "#d4edf7"}}>
          <div className="m-10">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                    <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="startdate" />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                    <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="startdate" />
                </div>
              </div>
            </form>
          </div>
          <hr className="h-px my-8 bg-gray-900 border-0"></hr>
          <div className="m-10">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opening</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Opening Point" required autoComplete='off'/>
                    </div>  
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">High</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="High Point" required  autoComplete='off'/>
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Low</label>
                        <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Low Point" required autoComplete='off'/>
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume</label>
                        <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Low Point" required autoComplete='off'/>
                    </div>
                    <div style={{paddingTop: "28px"}}>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{printData()}}>Prompt</button>
                    </div>
                </div>
            </form>
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
                <CartesianGrid />
                <XAxis type="number" dataKey="Open" name="stature" />
                <YAxis type="number" dataKey="High" name="weight" />
                <ZAxis type="number" dataKey="Low"  name="score" />
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
              <YAxis />
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
                <YAxis />
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
