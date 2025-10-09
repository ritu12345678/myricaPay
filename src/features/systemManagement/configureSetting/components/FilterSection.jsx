import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Box } from "@mui/material";

import CustomChip from "../../../../components/ChipCustom";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
const FilterSection = () => {
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCorridor, setSelectedCorridor] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedBusinessLine, setSelectedBusinessLine] = useState(null);

    const products = [
        { name: "Product A" },
        { name: "Product B" },
        { name: "Product C" },
    ];

    const corridors = [
        { name: "USA → Mexico" },
        { name: "USA → India" },
        { name: "USA → Philippines" },
    ];

    const regions = [
        { name: "North America" },
        { name: "Europe" },
        { name: "Asia" },
    ];

    const businessLines = [
        { name: "Retail" },
        { name: "Digital" },
        { name: "Corporate" },
    ];

    return (
        <div className="card p-3 mb-2 mt-1 shadow-sm">
            <div className="d-flex flex-wrap gap-3 align-items-end">

                {/* 1️⃣ Search Box */}
                <div className="flex-fill w-15">
                    <label className="form-label fw-medium">Search</label>
                    <InputText
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="w-100"
                        style={{ height: 38 }} // same as dropdowns
                    />
                </div>

                {/* 2️⃣ All Products */}
                <div className="flex-fill w-15">
                    <label className="form-label fw-medium">All Products</label>
                    <Dropdown
                        value={selectedProduct}
                        options={products}
                        optionLabel="name"
                        placeholder="Select Product"
                        className="w-100"
                        onChange={(e) => setSelectedProduct(e.value)}
                    />
                </div>

                {/* 3️⃣ All Corridors */}
                <div className="flex-fill w-15">
                    <label className="form-label fw-medium">All Corridors</label>
                    <Dropdown
                        value={selectedCorridor}
                        options={corridors}
                        optionLabel="name"
                        placeholder="Select Corridor"
                        className="w-100"
                        onChange={(e) => setSelectedCorridor(e.value)}
                    />
                </div>

                {/* 4️⃣ All Regions */}
                <div className="flex-fill w-15">
                    <label className="form-label fw-medium">All Regions</label>
                    <Dropdown
                        value={selectedRegion}
                        options={regions}
                        optionLabel="name"
                        placeholder="Select Region"
                        className="w-100"
                        onChange={(e) => setSelectedRegion(e.value)}
                    />
                </div>

                {/* 5️⃣ All Business Line */}
                <div className="flex-fill w-15">
                    <label className="form-label fw-medium">All Business Lines</label>
                    <Dropdown
                        value={selectedBusinessLine}
                        options={businessLines}
                        optionLabel="name"
                        placeholder="Select Business Line"
                        className="w-100"
                        onChange={(e) => setSelectedBusinessLine(e.value)}
                    />
                </div>

                {/* 6️⃣ Filter Chip with icon */}
                <div className="flex-fill w-20 ">
                    <Box className="d-flex  align-items-center" height={36}>
                        <CustomChip
                            label="Filter"
                            clickable
                            icon={<FilterAltRoundedIcon style={{ fontSize: 18, marginRight: 4 }} />}
                            onClick={() => console.log("Filter clicked")}
                            type="primary"
                            height={40}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
