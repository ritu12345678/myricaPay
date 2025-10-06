import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TermsEditor from './component/TermsAndCondition';
import StaticContentHeading from './component/StaticContentHeading';
import PrivacyPolicy from './component/PrivacyPolicy';
import AboutUs from './component/AboutUs';
import FaqEditor from './component/Faqs';
import ContactDetailTab from './component/ContactDetailTab';
const StaticContentManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Store both title & content for each tab
  const headingData = [
    {
      title: "terms&condition",
      content: "Last published: June 15, 2023 by Admin"
    },
    {
      title: "privacy policy",
      content: "Last updated: July 01, 2023 by Editor"
    },
    {
      title: "Frequently Asked Questions",
      content: "Last modified: Aug 20, 2023 by SuperAdmin"
    },
        {
      title: "about us",
      content: "Last modified: Aug 20, 2023 by SuperAdmin"
    },     {
      title: "contact details",
      content: "Last modified: Aug 20, 2023 by SuperAdmin"
    }
  ];

  return (
    <div className='hide-tab-content mt-0'>
      {/* Tabs (just for headers) */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
         
        
      >
        <TabPanel header="TERMS & CONDITIONS" />
        <TabPanel header="PRIVACY POLICY" />
        <TabPanel header="FAQs" />
         <TabPanel header="ABOUT US" />
          <TabPanel header="CONTACT DETAILS" />
      </TabView>

      {/* Heading Section */}
      <div className="mt-0 mb-2 pt-0">
        <StaticContentHeading
          title={headingData[activeIndex].title}
          content={headingData[activeIndex].content}
        />
      </div>

      {/* Tab Content */}
      <div >
        {activeIndex === 0 && <TermsEditor />}
        {activeIndex === 1 && (
         <PrivacyPolicy/>
        )}
         {activeIndex === 2 && (
      <FaqEditor/>
        )}
        {activeIndex === 3 && (
      <AboutUs/>
        )}
          {activeIndex === 4 && (
      <ContactDetailTab/>
        )}
      </div>
    </div>
  );
};

export default StaticContentManagement;
