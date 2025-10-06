import React from 'react';

export const KycOverviewCard = ({
    title,
    value,
    unit, // e.g. "Open"
    change,
    trend = "neutral",
    subtitle,
    className,
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
            
                <p className="text-muted small ">{title}</p>

          
                <div className="d-flex justify-content-between align-items-end flex-wrap">
                    <div className="d-flex align-items-baseline flex-wrap">
                        <h3 className="fw-bold mb-0 fs-28" >
                            {value}
                        </h3>
                        {unit && (
                            <span className="ms-2 text-secondary fw-medium">{unit}</span>
                        )}
                    </div>

                    {/* {change !== undefined && (
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
          )} */}
                </div>
                {subtitle && <p className="text-muted small mt-0 mb-0">{subtitle}</p>}
            </div>
        </div>
    );
};
