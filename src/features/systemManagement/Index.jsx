import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import ConfigureSettingTab from './configureSetting/Index';

// Material icons
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';

const SystemManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of tabs
  const tabs = [
    { label: 'Configure Setting', icon: <SettingsIcon />, content: <ConfigureSettingTab /> },
    { label: 'Notification Management', icon: <NotificationsActiveIcon />, content: <div>Notification Tab</div> },
    { label: 'System Monitoring & Health', icon: <FavoriteIcon />, content: <div>System Monitoring</div> },
    { label: 'Ticket Management', icon: <AddCircleIcon />, content: <div>Ticket Management</div> },
    { label: 'Conversation', icon: <MenuIcon />, content: <div>Conversation</div> },
  ];

  // Helper to render header with conditional color
  const renderHeader = (icon, text, isActive) => {
    const color = isActive ? '#1976D2' : '#6c757d'; // blue if active, gray otherwise
    return (
      <span className="d-flex align-items-center gap-1" style={{ color }}>
        {React.cloneElement(icon, { fontSize: 'small', style: { color } })}
        <span>{text}</span>
      </span>
    );
  };

  return (
    <div className='dashboard hide-tab-content mt-0'>
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            header={renderHeader(tab.icon, tab.label, activeIndex === index)}
          />
        ))}
      </TabView>

      {/* Tab Content */}
      <div className="mt-3">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default SystemManagement;
