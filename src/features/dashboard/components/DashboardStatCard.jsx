import React from "react";


const DashbordStatCard = ({
  title = "",
  value = "",
  change = "",
  trend = "", // 'up' or 'down'
  description = "",
  icon = "",
}) => {
  const isPositive = trend === "up";

  return (
    <div
      className=" p-3 rounded shadow-sm bg-white"
      style={{ minWidth: 230 }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
        <p className="mb-1 text-secondary small fw-semibold">{title}</p>
        <h4 className="fw-bold mb-1">{value}</h4></div>
        <div
        className="d-flex justify-content-center align-items-center rounded-circle mb-3"
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#EEF4FF",
        }}
      >
  
        {icon}
      </div>
      </div>
  <div>
  <p className="mb-0 small">
    <span
      className={isPositive ? "text-success fw-bold fs-16 d-inline-flex align-items-center" : "text-danger fw-bold fs-16 d-inline-flex align-items-center"}
    >
      <span className="me-1">{isPositive ? "↑" : "↓"}</span>
      {change}
    </span>{" "}
    <span className="text-muted">{description}</span>
  </p>
</div>

      
    </div>
  );
};

export default DashbordStatCard;
