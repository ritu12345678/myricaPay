import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { VirtualScroller } from 'primereact/virtualscroller';
import HighRiskTransactionCard from './HighRiskTransactionCard';
import report from "../../../assets/report.png"
import user from "../../../assets/user.png"
const AMLTabContent = () => {
    const options = [
        { label: 'Last 7 Days', value: '7days' },
        { label: 'Last 30 Days', value: '30days' },
        { label: 'This Month', value: 'thisMonth' },
        { label: 'Custom', value: 'custom' },
    ];

    const [selectedRange, setSelectedRange] = useState('7days');

    const highRiskTransactions = [
        { heading: '#TRX-78945', content: 'AML Alert - Suspicious Pattern' },
        { heading: '#TRX-78946', content: 'AML Alert - Large Amount' },
        { heading: '#TRX-78947', content: 'AML Alert - Suspicious Pattern' },
        { heading: '#TRX-78948', content: 'AML Alert - Large Amount' },
    ];

    const itemTemplate = (transaction) => (
        <div style={{ marginBottom: '1rem' }}>
            <HighRiskTransactionCard
                heading={transaction.heading}
                content={transaction.content}
            />
        </div>
    );

    return (
        <>
            <div className='d-flex align-items-center justify-content-between mb-30'>
                <p className='p-0 m-0 text-black-custom fs-16 fw-500'>Risk Distribution</p>
                <Dropdown
                    className='chip-dropdown'
                    value={selectedRange}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="All Types"
                    style={{ width: '150px' }}
                    onChange={(e) => setSelectedRange(e.value)}
                />
            </div>

            <div>
                <p className='p-0 m-0 text-black-custom fs-16 fw-500 text-start mb-2'>
                    High Risk Transactions
                </p>
                <div style={{ height: '200px', overflowY: 'auto' }}>
                    <VirtualScroller
                        className="hide-scrollbar"
                        items={highRiskTransactions}
                        itemSize={120}         // approximate height of each card
                        orientation="vertical"
                        style={{ height: '200px', width: '100%' }}  // fixed height for scroll
                        itemTemplate={itemTemplate}
                    />
                </div>
            </div>
            <div className="d-flex gap-2 mt-3">
                <button className=" btn btn-primary lightblue-btn ">
                    <img className="mb-1 pe-1" src={report} alt="Add" style={{ width: 18, height: 18 }} />
                    Generate SAR
                </button>

                <button type="button" className="btn btn-primary btn-outline-secondary blue-btn ">  <img className="mb-1 pe-1" src={user} alt="Add" style={{ width: 18, height: 18 }} /> Assign to Officer</button>

            </div>
        </>
    );
};

export default AMLTabContent;
