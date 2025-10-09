import React from 'react'
import DashbordStatCard from '../../components/DashboardStatCard'


import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const UserCardSection = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Total Users" value="12456" trend="up" change="12.5" subtitle="vs last week" icon={< GroupIcon style={{ color: "#3b82f6", fontSize: 22 }} />} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Active Users" value="12456" trend="up" change="12.5" subtitle="vs last week"
                        icon={<PersonIcon style={{ color: "blue", fontSize: 22 }} />} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="New Registrations" value="8942" trend="down"
                        change="5.5" subtitle="vs last week" icon={< PersonAddAltIcon style={{ color: "green", fontSize: 22 }} />} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Average Session Duration" value="1245" trend="up" change="2.1"
                        subtitle="vs last week" icon={< AccessTimeFilledIcon style={{ color: "blue", fontSize: 22 }} />} />
                </div>
            </div>
        </div>
    )
}

export default UserCardSection
