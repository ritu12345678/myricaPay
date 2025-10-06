import React from 'react'
import importgrey from "../../../../assets/importgrey.png"
import greysquare from "../../../../assets/greysquare.png"

const TransactionVolumeAndKeymatrics = () => {
    return (
        <div className='transactionvolume-keymatrics'>
            <div className='row d-flex flex-stretch'>
                
                {/* First Card */}
                <div className='col-md-6 d-flex'>
                    <div className='card flex-fill'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='p-0 m-0 heading-blue-18'>Transaction Volume Trend</p>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={importgrey} alt="import" />
                                    <img src={greysquare} alt="square" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Card - Key Metrics */}
                <div className='col-md-6 d-flex'>
                    <div className='card flex-fill'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <p className='p-0 m-0 heading-blue-18'>Key Metrics</p>
                            </div>

                            {/* Metric Rows */}
                            <div className='d-flex justify-content-between mb-2 bg-grey px-2 py-3 rounded'>
                                <span className='text-muted text-black-custom fs-16 fw-700'>Total Transaction</span>
                                <span className='fw-bold' style={{ color: "#007bff" }}>12,345</span>
                            </div>

                            <div className='d-flex justify-content-between mb-2 bg-grey px-2 py-3 rounded'>
                                <span className='text-muted text-black-custom fs-16 fw-700'>Total Volume</span>
                                <span className='fw-bold' style={{ color: "#28a745" }}>8,921</span>
                            </div>

                            <div className='d-flex justify-content-between mb-2 bg-grey px-2 py-3 rounded'>
                                <span className='text-muted text-black-custom fs-16 fw-700'>Average Transactions</span>
                                <span className='fw-bold' style={{ color: "#ffc107" }}>45,678</span>
                            </div>

                            <div className='d-flex justify-content-between bg-grey px-2 py-3 rounded'>
                                <span className='text-muted text-black-custom fs-16 fw-700'>Success Rate</span>
                                <span className='fw-bold' style={{ color: "#dc3545" }}>98.7%</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TransactionVolumeAndKeymatrics
