import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CustomTable from "../../../../components/CustomTable";
import CustomChip from "../../../../components/ChipCustom";
import BroadcastFilterSection from "./BroadcastFilterSection";
import BroadcastStatModel from "../../../../components/BroadcastStatsModel";
import CustomOffcanvas from "../../../../components/CustomOffCanvas";
import AddBroadcastForm from "./AddBroadcastForm";


export default function BroadcastTable() {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const handleCloseCanvas = () => setShowOffCanvas(false);
    const handleOpenCanvas = () => setShowOffCanvas(true);

    const handleOpenModal = () => setShowDetailModal(true);
    const handleCloseModal = () => setShowDetailModal(false);
    // --- Mock Broadcast Data ---
    const rows = [
        {
            id: 1,
            broadcastId: "#B01",
            type: "Push",
            email: "campaign1@email.com",
            audience: "8K Users",
            engagement: "74%",
            status: "Active",
        },
        {
            id: 2,
            broadcastId: "#B02",
            type: "Email",
            email: "newsletter@email.com",
            audience: "12K Users",
            engagement: "62%",
            status: "Done",
        },
        {
            id: 3,
            broadcastId: "#B03",
            type: "SMS",
            email: "offer@email.com",
            audience: "5K Users",
            engagement: "58%",
            status: "Active",
        },
    ];

    // --- Table Columns ---
    const columns = [
        { field: "broadcastId", headerName: "Broadcast ID", flex: 1 },
        { field: "type", headerName: "Type", flex: 1 },
        { field: "email", headerName: "Email", flex: 2 },
        { field: "audience", headerName: "Audience", flex: 1 },
        { field: "engagement", headerName: "Engagement", flex: 1 },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => (
                <CustomChip label={params.value} type={params.value} />
            ),
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            sortable: false,
            renderCell: () => (
                <Box display="flex" gap={1}>
                    <IconButton
                        size="small"
                        onClick={handleOpenModal}
                        sx={{
                            color: "#6c757d",
                            "&:hover": { color: "#000" },
                        }}
                    >
                        <VisibilityOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        sx={{
                            color: "#6c757d",
                            "&:hover": { color: "#000" },
                        }}
                    >
                        <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <div className="card p-3 mb-4 mt-3" >
            {/* Filter Section */}
            <BroadcastFilterSection openCanvas={handleOpenCanvas} />

            {/* Broadcast Table (Full width) */}

            <CustomTable rows={rows} columns={columns} pageSize={5} />


            {/* Offcanvas for Create/Edit */}
            <CustomOffcanvas
                title="Broadcast Creation"
                show={showOffCanvas}
                onClose={handleCloseCanvas}
            >
                <AddBroadcastForm show={showOffCanvas} onClose={handleCloseCanvas} />
            </CustomOffcanvas>


            <BroadcastStatModel open={showDetailModal} handleClose={handleCloseModal} />
        </div>
    );
}
