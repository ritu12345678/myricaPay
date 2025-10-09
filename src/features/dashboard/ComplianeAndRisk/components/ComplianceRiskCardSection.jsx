import React from 'react'
import DashbordStatCard from '../../components/DashboardStatCard'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import IconWrapper from '../../../../components/IconWrapper';
const ComplianceCardSection = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Compliance Score" value="98.2%" trend="up" change="12.5" subtitle="vs last week" icon={ <IconWrapper bgColor="#DCFCE7"  shape="rounded">< HelpOutlineRoundedIcon style={{ color: "green", fontSize: 22,}} /></IconWrapper>} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="High Risk Alert" value="247" trend="up" change="12.5" subtitle="vs last week"
                        icon={ <IconWrapper bgColor="#FEE2E2"  shape="rounded">< HelpOutlineRoundedIcon style={{ color: "red", fontSize: 22,}} /></IconWrapper>} />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Pending Reviews" value="89" trend="down"
                        change="5.5" subtitle="vs last week" 
                         icon={
          <IconWrapper bgColor="#FEF9C3" shape="rounded">
            <AccessAlarmsRoundedIcon style={{ color: "#FFDB58", fontSize: 22 }} />
          </IconWrapper>
        } />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <DashbordStatCard title="Avg. Review Time" value="2.4h" trend="up" change="2.1"
                        subtitle="vs last week" icon={  <IconWrapper bgColor="#DBEAFE" shape="rounded">< AccessTimeFilledIcon style={{ color: "blue", fontSize: 22 }} /></IconWrapper>} />
                </div>
            </div>
        </div>
    )
}

export default ComplianceCardSection
