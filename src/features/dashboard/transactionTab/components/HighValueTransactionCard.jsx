
import React from "react";
import DashboardCard from "../../components/DashboardCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorIcon from "@mui/icons-material/Error";
const transactions = [
    { from: 'USAaaa', to: 'Mexico', amount: 9850, status: 'Review Required', statusColor: 'warning', agent: 'Retail Agent #1234' },
    { from: 'UK', to: 'Nigeria', amount: 12400, status: 'Flagged', statusColor: 'danger', agent: 'Digital Partner #1378' },
    { from: 'USA', to: 'India', amount: 8720, status: 'Approved', statusColor: 'success', agent: 'Corporate Client #2364' },
    { from: 'UAE', to: 'Pakistan', amount: 7350, status: 'Processing', statusColor: 'info', agent: 'Retail Agent #9999' },
];




const HighValueTransactionsList = () => {
  const getThemeByStatus = (status) => {
    switch (status.toLowerCase()) {
      case "review required":
        return { bg: "bg-warning-subtle", text: "text-warning", border: "border-warning", icon: <AccessTimeIcon /> };
      case "flagged":
        return { bg: "bg-danger-subtle", text: "text-danger", border: "border-danger", icon: <ErrorIcon /> };
      case "approved":
        return { bg: "bg-success-subtle", text: "text-success", border: "border-success", icon: <CheckCircleIcon /> };
      case "processing":
        return { bg: "bg-info-subtle", text: "text-info", border: "border-info", icon: <AccessTimeIcon /> };
      case "completed":
        return { bg: "bg-primary-subtle", text: "text-primary", border: "border-primary", icon: <CheckCircleIcon /> };
      default:
        return { bg: "bg-light", text: "text-secondary", border: "border-secondary", icon: <AccessTimeIcon /> };
    }
  };

  return (
    <DashboardCard title="High-Value Transactions" className="flex-fill">
      {transactions.map((tx, index) => {
        const theme = getThemeByStatus(tx.status);
        return (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-between p-3 mb-3 rounded border ${theme.bg} ${theme.border}`}
          >
            <div>
              <div className="fw-semibold">
                {tx.from} <i className="bi bi-arrow-right mx-1"></i> {tx.to}
              </div>
              <small className="text-muted d-block">{tx.agent}</small>
            </div>

            <div className="text-end">
              <div className="fw-bold fs-6">${tx.amount.toLocaleString()}</div>
              <div className={`fw-semibold d-flex align-items-center justify-content-end gap-1 text-nowrap ${theme.text}`}>
                <span className="status-icon-circle d-flex align-items-center justify-content-center">
                  {theme.icon}
                </span>
                {tx.status}
              </div>
            </div>
          </div>
        );
      })}
    </DashboardCard>
  );
};

export default HighValueTransactionsList;

