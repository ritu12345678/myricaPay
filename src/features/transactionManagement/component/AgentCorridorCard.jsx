import React from 'react'

import { Avatar } from 'primereact/avatar';
const AgentCorridorCard = ({ heading, content }) => {
    return (
        <>


            <div className='highRisk-card  d-flex align-items-center justify-content-between border-lightgrey rounded p-2 '>
                <div className='d-flex align-items-center gap-2'>
                    <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                    <div>
                        <p className='p-0 m-0 text-black-custom fw-500 fs-16'>{heading}</p>
                        <p className='p-0 m-0 text-darkgrey fw-400 fs-14'>{content}</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-secondary transparent-btn">Manage</button>
                </div>

            </div>

        </>
    )
}

export default AgentCorridorCard

