import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';        // Critical/Warning alert (triangle)
           // System Info alert (circle 'i')
import PersonAddIcon from '@mui/icons-material/PersonAdd';    // Add User (Quick Actions)
import CreditCardIcon from '@mui/icons-material/CreditCard';  // New Transaction (Quick Actions)
import DownloadIcon from '@mui/icons-material/Download';
// Export Report (Quick Actions)
import FlagIcon from '@mui/icons-material/Flag';              // Review Flags (Quick Actions)
import ShieldIcon from '@mui/icons-material/Shield';          // Compliance Dashboard (large action)
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HighlightBorderWrapper from '../../../../components/HighLightBorderWrapper';
import AlertAndNotificationcard from './AlertAndNotificationcard';
import QuickActionCard from './QuickActionCard';

const AlertAndQuickAction = () => {

  const alertsData = [
    {
      type: 'critical',
      title: "Critical: 3 High-Risk Transactions Flagged",
      description: "Three transactions exceeding $50,000 have been flagged for review in the Nigeria-UK corridor.",
      actionText: "Review Now",
      Icon: WarningIcon,
      iconColor: '#dc3545',  // red
      iconSize: 28,
      titleClassName: 'text-danger',
      actionClassName: 'text-danger',
      backgroundColor: "#FEFCE8",
      borderColor: '#dc3545'
    },
    {
      type: 'warning',
      title: "Warning: 12 Agent KYC Verifications Expiring",
      description: "12 agent verifications will expire in the next 7 days. Renewal notices have been sent.",
      actionText: "View Agents",
      Icon: ErrorIcon,
      iconColor: '#ffc107',  // yellow/orange
      iconSize: 28,
      titleClassName: 'text-warning',
      actionClassName: 'text-warning',
      backgroundColor: "#FEFCE8",
      borderColor: '#F59E0B',
    },
    {
      type: 'info',
      title: "System: Monthly Compliance Report Generated",
      description: "The monthly compliance report for June 2023 has been generated and is ready for review.",
      actionText: "Download Report",
      Icon: InfoIcon,
      iconColor: '#0d6efd',  // blue
      iconSize: 28,
      titleClassName: 'text-primary',
      actionClassName: 'text-primary',
      borderColor: "#0A6EC7",
      backgroundColor: "#E5E7EB"
    },
  ];
  const quickActionData = [{ icon: PersonAddIcon, title: "Add User" },
  { icon: CreditCardIcon, title: "New Transaction" }, { icon: ChevronRightIcon, title: "Export Report" },
  { icon: FlagIcon, title: "Review Flag" }, { icon: ShieldIcon, title: "Compliance Dasboard" },
  ]
  return (
    <section className="alert-quick-action">
      <div className='row mt-3  d-flex align-items-stretch'>
        <div className='col-md-8 d-flex flex-column '>
          <div className='card p-1  flex-grow-1'>
            <div className='card-body'>
              <div className='d-flex align-items-center justify-content-between'>
                <h5>
                  Alert & Notification
                </h5>
                <h6 className='text-blue-custom'>View All</h6>
              </div>
              {alertsData.map((alert, index) => (
                <HighlightBorderWrapper key={index} borderColor={alert?.borderColor} backgroundColor={alert?.backgroundColor}>
                  <AlertAndNotificationcard
                    Icon={alert.Icon}
                    iconColor={alert.iconColor}
                    iconSize={alert.iconSize}
                    title={alert.title}
                    titleClassName={alert.titleClassName}
                    description={alert.description}
                    actionText={alert.actionText}
                    actionClassName={alert.actionClassName}
                  />
                </HighlightBorderWrapper>
              ))}
            </div>
          </div>

        </div>
        <div className='col-md-4 d-flex flex-column'>
          <div className='card p-1  flex-grow-1'>
            <div className='card-body'>
              <h5>Quick Action</h5>
              <div className='row'>
  {quickActionData.map((card, index) => {
  const colClass = index < 4 ? 'col-md-6' : 'col-12';
  return (
    <div key={index} className={colClass}>
      <QuickActionCard
        title={card.title}
        icon={card.icon}          // Pass the component reference
        iconColor="#0d6efd"       // blue color
        iconSize={28}
      />
    </div>
  );
})}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertAndQuickAction;
