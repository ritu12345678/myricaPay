import React from "react";

const UserCard = ({ icon, heading, value, color }) => {
  return (
    <div className="user_card card d-flex flex-row align-items-center card-shadow py-2 px-3">
      {/* Icon on the left */}
      <div style={{ color, fontSize: "28px" }} className="me-3">
       <img src={icon} alt="img"/>
      </div>

      {/* Text on the right */}
      <div>
        <h6 className="mb-1 fs-6 text-lightgrey text-nowrap ">{heading}</h6>
        <p className="mb-0 subheading-black">{value}</p>
      </div>
    </div>
  );
};

export default UserCard;
