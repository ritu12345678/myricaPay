import React from "react";
import { IconButton, Tooltip } from "@mui/material";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";
import TableChartIcon from "@mui/icons-material/TableChart";
import CodeIcon from "@mui/icons-material/Code";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import PublishIcon from "@mui/icons-material/Publish";
import StaticContentHeading from "./StaticContentHeading";


const PrivacyPolicy = () => {
    return (
        <>

<div className="card mx-3">
    
            <div className="border-bottom p-2 bg-light d-flex align-items-center gap-2 flex-wrap">
                {/* formatting */}
                <Tooltip title="Bold"><IconButton size="small"><FormatBoldIcon /></IconButton></Tooltip>
                <Tooltip title="Italic"><IconButton size="small"><FormatItalicIcon /></IconButton></Tooltip>
                <Tooltip title="Underline"><IconButton size="small"><FormatUnderlinedIcon /></IconButton></Tooltip>
                <Tooltip title="Strikethrough"><IconButton size="small"><FormatStrikethroughIcon /></IconButton></Tooltip>
                <Tooltip title="Heading"><IconButton size="small"><FormatSizeIcon /></IconButton></Tooltip>

                {/* lists / indent */}
                <Tooltip title="Bulleted list"><IconButton size="small"><FormatListBulletedIcon /></IconButton></Tooltip>
                <Tooltip title="Numbered list"><IconButton size="small"><FormatListNumberedIcon /></IconButton></Tooltip>
                <Tooltip title="Decrease indent"><IconButton size="small"><FormatIndentDecreaseIcon /></IconButton></Tooltip>
                <Tooltip title="Increase indent"><IconButton size="small"><FormatIndentIncreaseIcon /></IconButton></Tooltip>

                {/* alignment / quote */}
                <Tooltip title="Align left"><IconButton size="small"><FormatAlignLeftIcon /></IconButton></Tooltip>
                <Tooltip title="Align center"><IconButton size="small"><FormatAlignCenterIcon /></IconButton></Tooltip>
                <Tooltip title="Align right"><IconButton size="small"><FormatAlignRightIcon /></IconButton></Tooltip>
                <Tooltip title="Blockquote"><IconButton size="small"><FormatQuoteIcon /></IconButton></Tooltip>

                {/* insert / media / table / code */}
                <Tooltip title="Insert link"><IconButton size="small"><LinkIcon /></IconButton></Tooltip>
                <Tooltip title="Insert image"><IconButton size="small"><ImageIcon /></IconButton></Tooltip>
                <Tooltip title="Insert table"><IconButton size="small"><TableChartIcon /></IconButton></Tooltip>
                <Tooltip title="Code block"><IconButton size="small"><CodeIcon /></IconButton></Tooltip>

                {/* undo / redo / clear */}
                <Tooltip title="Undo"><IconButton size="small"><UndoIcon /></IconButton></Tooltip>
                <Tooltip title="Redo"><IconButton size="small"><RedoIcon /></IconButton></Tooltip>
                <Tooltip title="Clear formatting"><IconButton size="small"><ClearIcon /></IconButton></Tooltip>
            </div>

            {/* Editor Area */}
            <div className="p-3" style={{ minHeight: 300 }}>
                <h5 className="text-blue-custom fw-700 ">1. Introduction</h5>
                <p>Welcome to FinTech Pro. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>

                <h5 className="text-blue-custom fw-700 ">2. Definitions</h5>
                <p>"Service" refers to the application, website, and services provided by FinTech Pro.</p>
                <p>"User" refers to any individual who accesses or uses our Service.</p>
                <p>"Account"refers to a unique account created for a User to access our Service.</p>

                <h5 className="text-blue-custom fw-700 ">3. Account Registration</h5>
                <p>To use certain features of the Service, you must register for an account. You must provide accurate, current, and complete information during the registration process.</p>
                <p>You are responsible for safeguarding the password and for all activities that occur under your account.</p>

                <h5 className="text-blue-custom fw-700 ">4. Financial Services</h5>
            </div>
</div>

            {/* Footer */}
            
          <div className="card mx-3 mt-5">  <div className="border-top p-2 d-flex justify-content-between align-items-center">
                <small className="text-muted">Saved: Today at 2:45 PM</small>
                <div className="d-flex gap-2 align-items-center">
                    <button className="btn btn-light">
                        Cancel
                    </button>
                    <button className="btn btn-outline-primary lightblue-btn text-white ">
                        Save Draft
                    </button>
                    <button className="btn btn-primary blue-btn">
                        Publish <span className="text-white fs-16">➔</span>
                    </button>
                </div>
            </div></div>

        </>
    );
};

export default PrivacyPolicy;
