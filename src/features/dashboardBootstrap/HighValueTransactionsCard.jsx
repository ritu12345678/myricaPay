import React, { useMemo } from "react";

const StatusBadge = ({ status }) => {
  const styleByStatus = {
    "Review Required": "bg-warning-subtle text-warning-emphasis",
    Flagged: "bg-danger-subtle text-danger-emphasis",
    Processing: "bg-info-subtle text-info-emphasis",
  };
  const className = styleByStatus[status] || "bg-secondary-subtle text-secondary-emphasis";
  return <span className={`badge rounded-pill px-2 py-1 ${className}`}>{status}</span>;
};

const HighValueTransactionsCard = () => {
  const txs = useMemo(() => ([
    { id: 1, corridor: "USA > Mexico", role: "Retail Agent #24563", amount: 9850, status: "Review Required" },
    { id: 2, corridor: "UK > Nigeria", role: "Digital Partner #1078", amount: 12400, status: "Flagged" },
    { id: 3, corridor: "USA > India", role: "Corporate Client #3594", amount: 8720, status: "Approved" },
    { id: 4, corridor: "UAE > Pakistan", role: "Retail Agent #40589", amount: 7350, status: "Processing" },
  ]), []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fs-6 fw-semibold">High-Value Transactions</div>
          <button className="btn btn-link btn-sm text-decoration-none">Export</button>
        </div>
        <div className="list-group list-group-flush">
          {txs.map((tx) => (
            <div key={tx.id} className="list-group-item px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{tx.corridor}</div>
                  <div className="small text-muted">{tx.role}</div>
                </div>
                <div className="text-end">
                  <div className="fw-bold">${tx.amount.toLocaleString()}</div>
                  <StatusBadge status={tx.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighValueTransactionsCard;
