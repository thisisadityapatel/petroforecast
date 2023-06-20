import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
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
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Opening Point" required />
                    </div>  
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">High</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="High Point" required />
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Low</label>
                        <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Low Point" required />
                    </div>
                    <div style={{paddingTop: "28px"}}>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Prompt</button>
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
                <XAxis type="number" dataKey="uv" name="stature" unit="cm" />
                <YAxis type="number" dataKey="pv" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="green" fill="#82ca9d" />
                <Line type="monotone" dataKey="uv" stroke="blue" fill="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
