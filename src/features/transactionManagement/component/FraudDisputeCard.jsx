import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Card } from 'primereact/card';
import CustomChip from '../../../components/ChipCustom';
const FraudDisputeCard = ({heading,content,label,type}) => {
    console.log("labelll",label)
    return (
        <>


            <div className='highRisk-card  d-flex align-items-center justify-content-between border-lightgrey rounded p-2 '>
                <div>
                    <p className='p-0 m-0 text-black-custom fw-500 fs-16'>{heading}</p>
                    <p className='p-0 m-0 text-darkgrey fw-400 fs-14'>{content}</p>
                </div>
                <div className='d-flex align-item-center'>
                    <CustomChip label={label} type={type}/>
                </div>

            </div>

        </>
    )
}

export default FraudDisputeCard

