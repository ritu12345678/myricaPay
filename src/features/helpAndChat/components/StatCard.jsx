import React from 'react';

export const StatCard = ({
  title,
  value,
  unit, // e.g. "Open"
  change,
  trend = "neutral",
  subtitle,
  className,
  icon, // optional: string className or ReactNode
  iconBg, // optional: background color for icon container
  iconColor, // optional: icon color override
}) => {
  const getTrendColor = () => {
    if (trend === "up") return "success";
    if (trend === "down") return "danger";
    return "secondary";
  };

  const getTrendIcon = () => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "";
  };

  const getTrendSign = () => {
    if (change === undefined) return "";
    if (change > 0) return "+";
    return "";
  };

  const renderIcon = () => {
    if (!icon) return null;
    const content = typeof icon === "string" ? <i className={icon} /> : icon;
    return (
      <span
        className="d-inline-flex align-items-center justify-content-center rounded-3"
        style={{
          width: 34,
          height: 34,
          background: iconBg || "rgba(4,62,114,0.08)",
          color: iconColor || "#0A6EC7",
        }}
      >
        {content}
      </span>
    );
  };

  return (
    <div
      className={`card border-0 shadow-sm h-100 ${className || ""}`}
      style={{
        borderRadius: "12px",
        background: "#fff",
        minHeight: "140px",
      }}
    >
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ padding: "1rem 1.25rem" }}
      >
        {/* Header: title + optional icon */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="text-muted small mb-0">{title}</p>
          {renderIcon()}
        </div>

        {/* Value + Change Row */}
        <div className="d-flex justify-content-between align-items-end flex-wrap">
          <div className="d-flex align-items-baseline flex-wrap">
            <h3 className="fw-bold mb-0" style={{ fontSize: "1.75rem" }}>
              {value}
            </h3>
            {unit && (
              <span className="ms-2 text-secondary fw-medium">{unit}</span>
            )}
          </div>

          {change !== undefined && (
            <span
              className={`badge bg-${getTrendColor()} bg-opacity-10 text-${getTrendColor()} fw-semibold d-flex align-items-center gap-1`}
              style={{
                borderRadius: "8px",
                fontSize: "0.85rem",
                padding: "0.35rem 0.5rem",
              }}
            >
              <span>{getTrendIcon()}</span>
              <span>
                {getTrendSign()}
                {Math.abs(change)}%
              </span>
            </span>
          )}
        </div>
        {subtitle && <p className="text-muted small mt-2 mb-0">{subtitle}</p>}
      </div>
    </div>
  );
};
