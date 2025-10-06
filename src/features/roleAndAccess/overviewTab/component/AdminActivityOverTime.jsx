import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const data = [
  { day: 'Day1', activity: 5 },
  { day: 'Day2', activity: 8 },
  { day: 'Day3', activity: 12 },
  { day: 'Day4', activity: 7 },
  { day: 'Day5', activity: 15 },
  { day: 'Day6', activity: 10 },
  { day: 'Day7', activity: 18 },
];
const AdminActivityOverTime = () => {
    return (
        <div className='row px-3 mt-3'>
            <div className='card'>
                <div className='card-body'>
                    <div>  <h6 className='ps-5 fw-600'>Roles Distribution</h6>
                        <h5 className='ps-5 mt-3 fw-600'>100%</h5>
                        <i className="bi bi-graph-up text-success ps-5"></i><span className='text-success'>+ 0%</span></div>
                     <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          {/* Line + Fill */}
          <Area
            type="monotone"
            dataKey="activity"
            stroke="#1E90FF"
            fillOpacity={1}
            fill="url(#colorBlue)"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminActivityOverTime
