import React from "react";
import { ProgressBar } from "primereact/progressbar";


const agents = [
  { name: "GlobalPay Solutions", location: "New York, USA", value: 125480, max: 150000, color: "#4CAF50", icon: "pi pi-user" }, // Green
  { name: "QuickSend Ltd", location: "London, UK", value: 98325, max: 150000, color: "#00BCD4", icon: "pi pi-user" }, // Cyan
  { name: "FastMoney Inc", location: "Dubai, UAE", value: 87650, max: 150000, color: "#FF9800", icon: "pi pi-user" }, // Orange
  { name: "CashConnect", location: "Lagos, Nigeria", value: 72840, max: 150000, color: "#F44336", icon: "pi pi-user" }, // Red
  { name: "TransferPro", location: "Mumbai, India", value: 65210, max: 150000, color: "#9C27B0", icon: "pi pi-user" }, // Purple
];

const TopPerformingAgents = () => {
  return (
    <div className="card h-100 top-performer">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">Top Performing Agents</h5>
          <h6 className="text-blue-custom mb-0">View All</h6>
        </div>

        {agents.map((agent, index) => (
          <div
            key={index}
            className={`d-flex align-items-center ${
              index < agents.length - 1 ? "mb-3" : ""
            }`}
          >
            {/* Agent icon with color background */}
            <div
              className="agent-icon-wrapper me-3"
              style={{
                backgroundColor: `${agent.color}1A`, // Light tint (10% opacity)
              }}
            >
              <i className={`${agent.icon} fs-5`} style={{ color: agent.color }}></i>
            </div>

            {/* Agent info */}
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="fw-semibold">{agent.name}</div>
                <div className="fw-semibold">${agent.value.toLocaleString()}</div>
              </div>
              <small className="text-muted d-block mb-1">{agent.location}</small>

              {/* Progress bar */}
              <ProgressBar
                value={(agent.value / agent.max) * 100}
                showValue={false}
                className="custom-progress"
                style={{
                  height: "0.4rem",
                  "--progress-color": agent.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingAgents;
