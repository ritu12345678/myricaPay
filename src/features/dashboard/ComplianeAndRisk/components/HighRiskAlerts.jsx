import React from 'react'
import RiskScoreDistribution from './RiskScoreDistribution'
import HighRiskCard from './HighRiskAlertCard'
import HighlightBorderWrapper from '../../../../components/HighLightBorderWrapper'
import ErrorIcon from '@mui/icons-material/Error';

import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';        // Critical/Warning alert (triangle)
// System Info alert (circle 'i')
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardCard from '../../components/DashboardCard';
const HighRiskAlerts = () => {
    const alertsData = [
        {
            type: 'critical',
            title: "Unusual Transaction Volume",
            description: "Agent ID: 3321 • 150% increase",
            actionText: "6 hours ago",
            Icon: WarningIcon,
            iconColor: '#dc3545',  // red
            iconSize: 28,

            backgroundColor: "#FEFCE8",
            borderColor: '#dc3545'
        },
        {
            type: 'warning',
            title: "Suspicious Transaction Pattern",
            description: "User ID: 24587 • $15,000",
            actionText: "2hours ago",
            Icon: ErrorIcon,
            iconColor: '#ffc107',  // yellow/orange
            iconSize: 28,

            backgroundColor: "#FEFCE8",
            borderColor: '#F59E0B',
        },
        {
            type: 'info',
            title: "Multiple Failed KYC",
            description: "Agent ID: 1045 • 5 attempts",
            actionText: "4 hours ago",
            Icon: InfoIcon,
            iconColor: '#0d6efd',  // blue
            iconSize: 28,

            borderColor: "#0A6EC7",
            backgroundColor: "#E5E7EB"
        },
    ];
    return (
        <>
            <div className='row mt-3 d-flex align-items-stretch'>
                <div className='col-md-8 d-flex'>
                    <RiskScoreDistribution />
                </div>
                <div className='col-md-4 d-flex'>

                    <DashboardCard title="High Risk Alerts" className='flex-fill'>
                        {alertsData.map((alert, index) => (
                            <HighlightBorderWrapper key={index} borderColor={alert?.borderColor} backgroundColor={alert?.backgroundColor}>
                                <HighRiskCard
                                    Icon={alert.Icon}
                                    iconColor={alert.iconColor}
                                    iconSize={alert.iconSize}
                                    title={alert.title}

                                    description={alert.description}
                                    actionText={alert.actionText}

                                />
                            </HighlightBorderWrapper>
                        ))}
                    </DashboardCard>
                </div>
            </div>
        </>
    )
}

export default HighRiskAlerts
