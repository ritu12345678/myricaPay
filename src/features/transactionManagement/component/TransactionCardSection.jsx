import React from 'react'
import CustomCard from '../../../components/CustomCard'
import uparrow from "../../../assets/uparrow.png"
import pendingreview from "../../../assets/pendingreview.png"
import flag from "../../../assets/flag.png"
const TransactionCard = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-3 '>
          <CustomCard title="Total Transaction"
            value={"15,482"}
            content={"Last 30 days"}
            rightcontent={<div className='d-flex'> <img src={uparrow} className='h-16' />
              <h6 className='fs-16 text-lightblue'>8%</h6></div>} />
        </div>
       
        <div className='col-md-3 '>
          <CustomCard title="Pending Review"
            value={"243"}
            content={"Require Attention"}
            rightcontent={ <img src={pendingreview} />
             } />
        </div>
        <div className='col-md-3 '>
          <CustomCard title="Compliance Flag"
            value={"58"}
            content={"High Priority"}
            rightcontent={<img src={flag} />
              } />
        </div>
         <div className='col-md-3 '>
          <CustomCard title="Transaction Volume"
            value={"2.4M"}
            content={"Last 30 days"}
            rightcontent={<div className='d-flex'> <img src={uparrow} className='h-16' />
              <h6 className='fs-16 text-green'>8%</h6></div>} />
        </div>
      </div>
    </>
  )
}

export default TransactionCard
