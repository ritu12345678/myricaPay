import React from 'react'
import square from "../../../assets/square.png"
import { Divider } from '@mui/material'
const ComplianceCardHeading = ({heading}) => {
  return (
    <>
    <div className='d-flex align-items-center justify-content-between'>
        <h2 className='heading-blue-20'>
{heading}
        </h2>
        <img src ={square} alt="no image"/>
    </div>
    <Divider/>
      
    </>
  )
}

export default ComplianceCardHeading
