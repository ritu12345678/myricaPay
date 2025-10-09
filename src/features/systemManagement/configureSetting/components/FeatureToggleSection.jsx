import React, { useState } from "react";
import FeatureToggleCard from "./FeatureToggleCard";
import { MonetizationOn, Payment, AccountBalanceWallet } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function FeatureToggleSection() {
  const [moneyTransfer, setMoneyTransfer] = useState(true);
  const [billPay, setBillPay] = useState(false);
  const [digitalWallet, setDigitalWallet] = useState(true);

  const [corridors, setCorridors] = useState({
    "USA → Mexico": true,
    "USA → India": false,
    "USA → Philippines": true,
  });

  const [billCountries, setBillCountries] = useState({
    India: true,
    "United States": false,
  });

  const [walletCountries, setWalletCountries] = useState({
    India: true,
    "United States": true,
  });

  const handleToggleChange = (setFunc, state, label) => {
    setFunc({ ...state, [label]: !state[label] });
  };

  return (
    <div className="card">
<div className="card-body">
  
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 2,
      }}
    >
      {/* Money Transfer */}
      <FeatureToggleCard
        icon={<MonetizationOn sx={{ color: "#2E7D32" }} />}
        title="Money Transfer"
        switchValue={moneyTransfer}
        onSwitchChange={() => setMoneyTransfer(!moneyTransfer)}
        toggles={Object.keys(corridors).map((key) => ({
          label: key,
          value: corridors[key],
        }))}
        onToggleChange={(label) =>
          handleToggleChange(setCorridors, corridors, label)
        }
        buttonLabel="Configure more corridors"
      />

      {/* Bill Pay */}
      <FeatureToggleCard
        icon={<Payment sx={{ color: "#F9A825" }} />}
        title="Bill Pay"
        switchValue={billPay}
        onSwitchChange={() => setBillPay(!billPay)}
        toggles={Object.keys(billCountries).map((key) => ({
          label: key,
          value: billCountries[key],
        }))}
        onToggleChange={(label) =>
          handleToggleChange(setBillCountries, billCountries, label)
        }
        buttonLabel="Configure more corridors"
      />

      {/* Digital Wallet */}
      <FeatureToggleCard
        icon={<AccountBalanceWallet sx={{ color: "#1976D2" }} />}
        title="Digital Wallet"
        chipLabel="Beta Feature"
        switchValue={digitalWallet}
        onSwitchChange={() => setDigitalWallet(!digitalWallet)}
        toggles={Object.keys(walletCountries).map((key) => ({
          label: key,
          value: walletCountries[key],
        }))}
        onToggleChange={(label) =>
          handleToggleChange(setWalletCountries, walletCountries, label)
        }
        buttonLabel="Configure more corridors"
      />
    </Box>
      </div>
      </div>
  );
}
