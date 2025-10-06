import React from 'react';
import EmailAddressesCard from './EmailAddressCard';
import AddressCard from './AddressCard';
import PhoneNumbersCard from './PhoneNumberCard';
import OfficeHoursCard from './OfficeHoursCard';
import SocialMediaCard from "./SocialMediaCard"
// import OfficeHoursCard from './OfficeHoursCard';
// import PhoneNumbersCard from './PhoneNumbersCard';
// import SocialMediaCard from './SocialMediaCard';


const ContactDetailTab = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <AddressCard/>
          <PhoneNumbersCard />
          <EmailAddressesCard />
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <OfficeHoursCard />
          <SocialMediaCard />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailTab;