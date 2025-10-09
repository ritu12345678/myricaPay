import React from 'react';
import DashbordStatCard from '../../components/DashboardStatCard';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import IconWrapper from '../../../../components/IconWrapper';

const AnalyticsCardSection = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {/* Card 1 */}
      <div className="flex-fill mx-1">
        <DashbordStatCard
          title="Total Revenue"
          value="$2.4M"
          trend="up"
          change="15.3"
          subtitle="vs last week"
          icon={
            <IconWrapper bgColor="#DCFCE7" shape="rounded">
              <HelpOutlineRoundedIcon className="text-success" fontSize="small" />
            </IconWrapper>
          }
        />
      </div>

      {/* Card 2 */}
      <div className="flex-fill mx-1">
        <DashbordStatCard
          title="Transaction Volume"
          value="247K"
          trend="up"
          change="8.5"
          subtitle="vs last week"
          icon={
            <IconWrapper bgColor="#FEE2E2" shape="rounded">
              <HelpOutlineRoundedIcon className="text-danger" fontSize="small" />
            </IconWrapper>
          }
        />
      </div>

      {/* Card 3 */}
      <div className="flex-fill mx-1">
        <DashbordStatCard
          title="Avg. Transaction Value"
          value="$2,834"
          trend="up"
          change="5.5"
          subtitle="vs last week"
          icon={
            <IconWrapper bgColor="#FEF9C3" shape="rounded">
              <AccessAlarmsRoundedIcon style={{ color: "#FFDB58" }} fontSize="small" />
            </IconWrapper>
          }
        />
      </div>

      {/* Card 4 */}
      <div className="flex-fill mx-1">
        <DashbordStatCard
          title="Customer Growth"
          value="2.4h"
          trend="up"
          change="12.4%"
          subtitle="vs last week"
          icon={
            <IconWrapper bgColor="#DBEAFE" shape="rounded">
              <AccessTimeFilledIcon className="text-primary" fontSize="small" />
            </IconWrapper>
          }
        />
      </div>

      {/* Card 5 */}
      <div className="flex-fill mx-1">
        <DashbordStatCard
          title="New Signups"
          value="1.2K"
          trend="up"
          change="9.8%"
          subtitle="vs last week"
          icon={
            <IconWrapper bgColor="#E0F2FE" shape="rounded">
              <AccessTimeFilledIcon className="text-primary" fontSize="small" />
            </IconWrapper>
          }
        />
      </div>
    </div>
  );
};

export default AnalyticsCardSection;
