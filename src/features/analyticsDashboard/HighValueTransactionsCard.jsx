import React from 'react';

const entries = [
  { corridor: 'USA > Mexico', agent: 'Retail Agent #2458', amount: 9850, status: 'Review Required', color: '#f59e0b' },
  { corridor: 'UK > Nigeria', agent: 'Digital Partner #1078', amount: 12400, status: 'Flagged', color: '#ef4444' },
  { corridor: 'USA > India', agent: 'Corporate Client #3534', amount: 8720, status: 'Approved', color: '#10b981' },
  { corridor: 'UAE > Pakistan', agent: 'Retail Agent #4092', amount: 7350, status: 'Processing', color: '#3b82f6' },
];

const HighValueTransactionsCard = () => {
  return (
    <div className="bg-white border rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold text-dark">High-Value Transactions</div>
        <button className="btn btn-link text-decoration-none text-secondary p-0" title="Export"><i className="bi bi-box-arrow-up-right"/></button>
      </div>
      <ul className="list-group list-group-flush">
        {entries.map((e, idx) => (
          <li key={idx} className="list-group-item px-0 d-flex justify-content-between align-items-start gap-3">
            <div className="d-flex flex-column">
              <div className="fw-semibold">{e.corridor}</div>
              <div className="text-secondary small">{e.agent}</div>
              <div className="small d-flex align-items-center gap-2 mt-1">
                <span className="rounded-circle" style={{ width: 8, height: 8, background: e.color }} />
                <span style={{ color: e.color }}>{e.status}</span>
              </div>
            </div>
            <div className="text-end ms-auto">
              <div className="fw-bold">${e.amount.toLocaleString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighValueTransactionsCard;
