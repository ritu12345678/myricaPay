import React from "react";

const Trend = ({ percent, direction = "up", label = "vs last week" }) => {
  const isUp = direction === "up";
  const textClass = isUp ? "text-success" : "text-danger";
  const arrow = isUp ? "bi-arrow-up" : "bi-arrow-down";

  return (
    <div className={`d-flex align-items-center gap-1 small ${textClass}`}>
      <i className={`bi ${arrow}`}></i>
      <span className="fw-semibold">{Math.abs(percent)}%</span>
      <span className="text-muted">{label}</span>
    </div>
  );
};

const MetricCard = ({
  title,
  value,
  iconClass = "bi-graph-up",
  iconBg = "rgba(13,110,253,.1)", // bootstrap primary w/ opacity
  iconColor = "#0d6efd",
  trendPercent,
  trendDirection,
  trendLabel,
  className,
}) => {
  return (
    <div className={`card border-0 shadow-sm h-100 ${className || ""}`} style={{ borderRadius: "12px" }}>
      <div className="card-body position-relative" style={{ padding: "1rem 1rem" }}>
        {/* Icon top-right */}
        <div
          className="position-absolute top-0 end-0 translate-middle-y me-3 mt-3 d-flex align-items-center justify-content-center"
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: iconBg,
            color: iconColor,
          }}
          aria-hidden="true"
        >
          <i className={`bi ${iconClass}`}></i>
        </div>

        {/* Title */}
        <p className="text-muted small mb-2">{title}</p>

        {/* Value */}
        <h4 className="fw-bold mb-2" style={{ fontSize: "1.5rem" }}>
          {value}
        </h4>

        {/* Trend */}
        {typeof trendPercent === "number" && (
          <Trend percent={trendPercent} direction={trendDirection} label={trendLabel} />
        )}
      </div>
    </div>
  );
};

export default MetricCard;
