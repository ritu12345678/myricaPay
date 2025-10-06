import React from 'react'

import AdminHeading from './AdminHeading'
import AdminTable from './AdminTable'
import AdminListFilter from './AdminListFilter'
const AdminTab = () => {
  return (
    <div className='px-3'>
    <AdminHeading/>
  
    <AdminTable/>
    </div>
  )
}

export default AdminTab
