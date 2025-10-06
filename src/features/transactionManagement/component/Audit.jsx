import React from 'react'
import ComplianceCardHeading from './ComplianceCardHeading'
import AuditCard from './AuditCard'
import { Divider } from '@mui/material'
import RecentAuditCard from './RecentAuditCard'
import graph from "../../../assets/graph.png"
import reportwhite from "../../../assets/reportwhite.png"
const Audit = () => {
    return (
        <>
            <div className='card px-2 py-3 flex-fill p-component'>
                <ComplianceCardHeading heading="Audit & Reporting" />
                <div className='row mt-2 mb-3'>
                    <div className='col-md-4'>
                        <AuditCard />
                    </div>
                    <div className='col-md-4'>
                        <AuditCard />
                    </div>
                    <div className='col-md-4'>
                        <AuditCard />
                    </div>

                </div>
                <p className='m-0 p-0 text-black-custom fw-500 fs-16'>Recent Audit Trail </p>

                <RecentAuditCard />
                <RecentAuditCard />
                <div className="d-flex gap-2 mt-3">
                    <button className=" btn btn-primary lightblue-btn ">
                        <img className="mb-1 pe-1" src={reportwhite} alt="Add" style={{ width: 18, height: 18 }} />
                        Export Audit Log
                    </button>

                    <button type="button" className="btn btn-primary btn-outline-secondary blue-btn ">  <img className="mb-1 pe-1" src={graph} alt="Add" style={{ width: 18, height: 18 }} /> Generate Report</button>

                </div>

            </div>

        </>
    )
}

export default Audit
