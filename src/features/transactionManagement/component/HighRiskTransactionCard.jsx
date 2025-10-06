import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Card } from 'primereact/card';
const HighRiskTransactionCard = ({heading,content}) => {
    return (
        <>


            <div className='highRisk-card  d-flex align-items-center justify-content-between border-lightgrey rounded p-2 '>
                <div>
                    <p className='p-0 m-0 text-black-custom fw-500 fs-16'>{heading}</p>
                    <p className='p-0 m-0 text-darkgrey fw-400 fs-14'>{content}</p>
                </div>
                <div className='d-flex align-item-center'>
                    <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" style={{ fontSize: '16px', color: '#000' }} />
                    </IconButton>
                    <p className='m-0 p-0 mb-1'><ArrowUpwardIcon style={{ fontSize: '16px', color: '#000' }} /></p>
                </div>

            </div>

        </>
    )
}

export default HighRiskTransactionCard

