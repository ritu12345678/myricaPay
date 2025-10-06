import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CloseIcon from "@mui/icons-material/Close";
// Sample data
const data = [
  { role: 'Admin', users: 12 },
  { role: 'Editor', users: 18 },
  { role: 'Viewer', users: 25 },
  { role: 'Moderator', users: 8 },
];

const RoleBarChart = () => {
  const renderCard = () => {
    return (<>
      <div className='d-flex align-items-center gap-2 rounded bg-danger-subtle p-3 mb-2'>
        <CloseIcon className='text-danger' />
        <div>
          <p class="small  mb-2 text-danger">Test mode: These API keys will only work with test mode data. Help↗</p>
        </div>
      </div>
    </>)
  }
  return (

    <div className='row mt-3'>
      <div className='col-md-9'>
        <div className='card'>
          <div className='card-body'>
            <div>  <h6 className='ps-5 fw-600'>Roles Distribution</h6>
              <h5 className='ps-5 mt-3 fw-600'>100%</h5>
              <i className="bi bi-graph-up text-success ps-5"></i><span className='text-success'>+ 0%</span></div>
            <div style={{ width: '100%', height: 230 }}>   <ResponsiveContainer>

              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barGap={20} // space between bars
              >

                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#1E90FF" barSize={70} /> {/* Blue bars */}
              </BarChart>
            </ResponsiveContainer></div>

          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='card'>
          <div className='card-body'>
            <h6>Alerts</h6>
            {renderCard()}
            {renderCard()}
            {renderCard()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleBarChart;
