import React from 'react'
import SupportCardSection from './components/SupportCardSection'
import TicketTable from './components/SupportTicketTable'

const SupportTicketsTab = () => {
  return (
    <div className='px-3 mt-1 '>
        <SupportCardSection/>
        <TicketTable/>
      
    </div>
  )
}

export default SupportTicketsTab
