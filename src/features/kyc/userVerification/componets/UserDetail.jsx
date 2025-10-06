import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import Divider from "@mui/material/Divider";
import document1 from "../../../../assets/document1.png";
import document2 from "../../../../assets/document2.png";
import document3 from "../../../../assets/document3.png";
import profile from "../../../../assets/profile.png";
const users = [
    { label: "john.smith@email.com", value: "john.smith@email.com" },
    { label: "maria.garcia@email.com", value: "maria.garcia@email.com" },
    { label: "robert.j@email.com", value: "robert.j@email.com" },
];
const userInfo = [{ label: "Id", value: "T-5667787" }, { label: "Name", value: "Tashan khan" }, { label: "Email", value: "john.smith@email.com" }, { label: "Location", value: "NewYork/America" }]


const doc = [
    { label: "Driving License", src: document1 },
    { label: "Passport", src: document2 },
    { label: "ID", src: document3 },
];

const initialFormData = {
    userEmail: null,
    role: null,
    description: "",
    assignedAgent: null,
    priority: "medium",
};

const AddUserDetail = ({ show, onClose, onSubmit }) => {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (show) setFormData(initialFormData);
    }, [show]);

    const updateFormData = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <form id="user-detail" onSubmit={handleSubmit}>
            {/* --- User Information --- */}
          <div className="card shadow-sm border-0">
  <div className="card-body">
    <h6 className="fw-bold mb-3">User Information</h6>
    <hr className="mt-0" />

    <div className="row align-items-center">
      {/* Profile Image */}
      <div className="col-4 col-md-3 text-center">
        <img
          src={profile}
          alt="User"
          className="img-fluid rounded-circle border"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      </div>

      {/* User Info */}
      <div className="col-8 col-md-9">
        {userInfo?.map((info, index) => (
          <div key={index} className="d-flex align-items-start mb-1">
            <p
              className="mb-0 fw-medium text-muted text-capitalize"
              style={{ width: "6rem" }}
            >
              {info.label}
            </p>
            <p className="mb-0 text-dark">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


            {/* --- Document Section --- */}
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="fw-bold fs-18 mb-3">Documents</h6>
                    <Divider />
                    <div className="row">
                        {doc.map((item, index) => (
                            <div key={index} className="col-md-6 mb-3 text-center">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="img-fluid rounded border"
                                    style={{ maxHeight: "150px" }}
                                />
                                <p className="mt-2 fw-semibold">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Approve / Reject --- */}
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="fw-bold fs-18 mb-3">Approve / Reject</h6>
                    <div className="mb-3">
                        <label className="form-label">Reason of Rejection</label>
                        <Dropdown
                            value={formData.userEmail}
                            options={users}
                            onChange={(e) => updateFormData("userEmail", e.value)}
                            placeholder="Select Reason"
                            className="w-100"
                            filter
                            showClear
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Internal Notes</label>
                        <InputTextarea
                            rows={4}
                            value={formData.description}
                            onChange={(e) => updateFormData("description", e.target.value)}
                            className="w-100"
                            autoResize
                        />
                    </div>
                </div>
            </div>


            {/* --- Footer Buttons --- */}
            <footer>
                <div className="card mt-4 px-0">
                    <div className="d-flex gap-2 px-3 py-3">
                        <div className="flex-grow-1">
                            <Button
                                label="Request Resubmission"
                                type="button"
                                severity="secondary"
                                outlined
                                onClick={handleCancel}
                                className="w-100 text-nowrap"
                            />
                        </div>
                        <div className="flex-grow-1">
                            <Button
                                label="Approved"
                                type="submit"
                                icon="pi pi-check"
                                iconPos="right"
                                form="ticket-form"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </form>
    );
};

export default AddUserDetail;
