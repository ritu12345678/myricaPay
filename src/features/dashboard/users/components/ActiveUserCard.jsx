import React from "react";
import Avatar from "@mui/material/Avatar";

const ActiveUserCard = ({ name, country, agentId, transactions, image }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between p-2 border rounded-3 mb-2"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Left: Avatar + Name */}
      <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
        <Avatar
          alt={name}
          src={image}
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#3b82f6", // blue background if no image
            fontSize: "1rem",
          }}
        >
          {!image && name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </Avatar>

        <div>
          <p className="m-0 fw-semibold">{name}</p>
          <p className="m-0 text-muted" style={{ fontSize: "0.85rem" }}>
            Agent #{agentId} • {country}
          </p>
        </div>
      </div>

      {/* Right: Transactions */}
      <div className="text-end">
        <p className="m-0 fw-bold">{transactions}</p>
        <p className="m-0 text-muted" style={{ fontSize: "0.85rem" }}>
          Transactions
        </p>
      </div>
    </div>
  );
};

export default ActiveUserCard;
