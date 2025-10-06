import React from "react";
import CustomChip from "../../../../components/ChipCustom";

const InfoCard = () => {
  const data = [
    { heading: "Last Generated", value: "July 1, 2023 - 09:00 AM" },
    { heading: "Creator", value: "john.smith" },
    { heading: "Role/Region", value: "Compliance Officer / 1234 Elm Street, Apartment 56B, Springfield, IL 62704, United States" },
    { heading: "Status", value: "Success", isStatus: true }, // mark as status
    { heading: "Retention", value: "12 Month" },
  ];

  return (
    <div className="info-container card" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <div className="card-body">
        <div className="d-flex gap-2 flex-wrap">
          {data.map((item, index) => {
            if (item.isStatus || item.heading.toLowerCase() === "status") {
              return (
                <div key={index} className="info-item" style={{ minWidth: "9.375rem", flex: "1 1 150px" }}>
                  <div className="heading" style={{ fontWeight: "bold", color: "#555" }}>
                    {item.heading}:<CustomChip label={item.value} type={item.value} />
                  </div>
                  
                </div>
              );
            }

            return (
              <div key={index} className="info-item" style={{ minWidth: "9.375rem", flex: "1 1 150px" }}>
                <div className="heading" style={{ fontWeight: "bold", color: "#555" }}>
                  {item.heading}
                </div>
                <div className="value" style={{ color: "#333", wordBreak: "break-word" }}>
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
