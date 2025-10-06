import React from 'react'
import { VirtualScroller } from 'primereact/virtualscroller';
import FraudDisputeCard from './FraudDisputeCard';
import whiteflag from '../../../assets/whiteflag.png'
const FraudAllCaseTab = () => {
  const fraudcases = [
  { 
    heading: 'USA → #DISP-4532 - Unauthorized Transaction', 
    content: 'Customer claims transaction #TRX-78940 was not authorized',
    label: "High",
    type: "Medium"
  },
  { 
    heading: 'USA → Mexico', 
    content: 'Volume: $450K / Limited',
    label: "High",
    type: "Rejected"
  },
  { 
    heading: 'USA → Mexico', 
    content: 'Volume: $450K / Limited',
    label: "High",
    type: "Pending"
  },
  { 
    heading: 'USA → Mexico', 
    content: 'Volume: $450K / Limited',
    label: "High",
    type: "high"
  },
];

    const itemTemplate = (transaction) => (
        <div style={{ marginBottom: '1rem' }}>
            <FraudDisputeCard
                heading={transaction.heading}
                content={transaction.content}
                label={transaction.label}
                type={transaction.type}
            />
        </div>
    );
    return (
        <div>
            <p className='m-0 p-0 text-black-custom fw-500 fs-16 mb-2'>ActiveDispute </p>
            <div style={{ height: '12.5rem', overflowY: 'auto' }}>
                <VirtualScroller
                    className="hide-scrollbar"
                    items={fraudcases}
                    itemSize={120}
                    orientation="vertical"
                    style={{ height: '12.5rem', width: '100%' }}
                    itemTemplate={itemTemplate}
                />
            </div>
            <div className="d-flex gap-2 mt-3">
                <button className=" btn btn-primary lightblue-btn ">
                    <img className="mb-1 pe-1" src={whiteflag} alt="Add" style={{ width: 18, height: 18 }} />
                    Export Audit Log
                </button>

                <button type="button" className="btn btn-primary btn-outline-secondary blue-btn ">  + New Dispute </button>

            </div>

        </div>
    )
}

export default FraudAllCaseTab
