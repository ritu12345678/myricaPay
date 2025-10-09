import React from 'react'
import DashbordStatCard from '../../components/DashboardStatCard'
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from '@mui/icons-material/Person';
const OverviewCardSection = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Total Transaction" value="12456" trend="up" change="12.5" subtitle="vs last week" icon={< AttachMoneyIcon style={{ color: "#3b82f6", fontSize: 22 }} />} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Transaction Value" value="12456" trend="up" change="12.5" subtitle="vs last week"  icon={< MonetizationOnIcon style={{ color: "light green", fontSize: 22 }}/>} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Active Users" value="8942" trend="up" change="5.5" subtitle="vs last week"  icon={< GroupIcon style={{ color: "violet", fontSize: 22 }}/>} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Active Agents" value="1245" trend="down" change="2.1" subtitle="vs last week"  icon={< PersonIcon style={{ color: "yellow", fontSize: 22 }}/>}/>
                </div>
            </div>
        </div>
    )
}

export default OverviewCardSection
