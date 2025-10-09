import React from 'react'
import {
    ComposedChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import ApprovalRejectionChart from './ApproveRejectionChart';
import ProgressBarRejection from './ProgressBar';
const data = [
    { name: 'Jan', approvedRate: 70, rejectedRate: 30 },
    { name: 'Feb', approvedRate: 65, rejectedRate: 35 },
    { name: 'Mar', approvedRate: 75, rejectedRate: 25 },
    { name: 'Apr', approvedRate: 80, rejectedRate: 20 },
    { name: 'May', approvedRate: 72, rejectedRate: 28 },
    { name: 'Jun', approvedRate: 68, rejectedRate: 32 },
    { name: 'Jul', approvedRate: 78, rejectedRate: 22 },
    { name: 'Aug', approvedRate: 85, rejectedRate: 15 },
    { name: 'Sep', approvedRate: 70, rejectedRate: 30 },
    { name: 'Oct', approvedRate: 60, rejectedRate: 40 },
    { name: 'Nov', approvedRate: 73, rejectedRate: 27 },
    { name: 'Dec', approvedRate: 79, rejectedRate: 21 },
];
const rejectionData = [
  { label: 'Invalid Documents', count: '12,430', percentage: '100%', value: 100, color: '#3b82f6' }, // Blue
  { label: 'Incorrect Information', count: '6,900', percentage: '55.5%', value: 55.5, color: '#f97316' }, // Orange-Red
  { label: 'Suspicious Activity', count: '2,100', percentage: '16.9%', value: 16.9, color: '#10b981' }, // Green
  { label: 'Other', count: '750', percentage: '6.0%', value: 6.0, color: '#fcd34d' }, // Yellow-Orange
];
const ApproveAndRejectionRate = () => {
    return (
        <div className='row'>
            <div className='col-md-8'> <div className='card'>
                <div className='card-body'>
             
                    <div style={{height:"25rem"}}>
                    
                     <ApprovalRejectionChart/>
                    </div>

                </div>
            </div></div>
            <div className='col-md-4'>





    <div className="card shadow-sm rounded-3" style={{ maxWidth: '400px' }}>
      <div className="card-body p-4 rejection-bar">
        <h5 className="fw-bold mb-4">Rejection Reasons</h5>

        {rejectionData.map((item, index) => (
          // Use 'mb-0' only for the last item if you want minimal padding at the bottom
          <ProgressBarRejection
            key={index}
            label={item.label}
            count={item.count}
            percentage={item.percentage}
            progressValue={item.value}
            color={item.color}
            // If you want to replicate the original spacing exactly:
            // className={index === rejectionData.length - 1 ? "mb-0" : "mb-4"}
          />
        ))}
      </div>
    </div>

            </div>


        </div>
    )
}

export default ApproveAndRejectionRate
