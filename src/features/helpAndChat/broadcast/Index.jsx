import React from 'react'
import BroadcastCardSection from './component/BroadcastCardSection'
import BroadcastTable from './component/BroadcastTable'

const BroadcastTab = () => {
  return (
    <div className='px-3'>
      <BroadcastCardSection/>
      <BroadcastTable/>
    </div>
  )
}

export default BroadcastTab
