import React from "react";
import { Box, Typography, Divider, Switch, Button, Chip } from "@mui/material";

const FeatureToggleCard = ({
    icon,
    title,
    chipLabel,
    toggles = [],
    switchValue,
    onSwitchChange,
    onToggleChange,
    buttonLabel,
}) => {
    return (
        <Box
            className="custom-feature-card"
            sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 3,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                p: 2,
                backgroundColor: "#fff",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                }}
            >
                {/* Left: icon + title + optional chip */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <Box sx={{ fontSize: 26 }}>{icon}</Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                        {title}
                    </Typography>

                </Box>

                {/* Right: main switch */}
                <Switch checked={switchValue} onChange={onSwitchChange} color="primary" />
            </Box>

            <Divider sx={{ mb: 1 }} />

            {/* Toggles list */}
            <Box>
                {toggles.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 0.7,
                        }}
                    >
                        <Typography variant="body2">{item.label}</Typography>
                        <Switch
                            checked={item.value}
                            onChange={() => onToggleChange(item.label)}
                            size="small"
                        />
                    </Box>
                ))}
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* Footer button */}
            {chipLabel && (
                <Chip label={chipLabel} color="info" size="small" variant="outlined" />
            )}
            <Button variant="text" size="small" sx={{ textTransform: "none" }}>
                {buttonLabel}
            </Button>
        </Box>
    );
};

export default FeatureToggleCard;
