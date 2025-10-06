import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import Divider from "@mui/material/Divider";
// import PrioritySection from "./PrioritySection";

const modules = ["KYC", "Support", "Communication", "Payments"];

const initialFormData = {
  roleName: "",
  description: "",
  permissions: {
    KYC: { view: false, edit: false, delete: false },
    Support: { view: false, edit: false, delete: false },
    Communication: { view: false, edit: false, delete: false },
    Payments: { view: false, edit: false, delete: false },
  },
  priority: "active",
};

const AddRole = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (show) setFormData(initialFormData);
  }, [show]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePermissionChange = (module, type) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [module]: {
          ...prev.permissions[module],
          [type]: !prev.permissions[module][type],
        },
      },
    }));
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
    <form id="role-form" onSubmit={handleSubmit}>
      {/* --- Role Info Section --- */}
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Role Information</h6>
          <Divider />

          <div className="mb-3">
            <label htmlFor="roleName" className="form-label">
              Role Name
            </label>
            <InputText
              id="roleName"
              value={formData.roleName}
              onChange={(e) => updateFormData("roleName", e.target.value)}
              placeholder="Enter role name"
              className="w-100"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <InputTextarea
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              placeholder="Enter description for this role"
              className="w-100"
              autoResize
            />
          </div>
        </div>
      </div>

      {/* --- Permission Section --- */}
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Permission</h6>
          <Divider />

          <TableContainer component={Paper} className="mt-3">
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold">Module</TableCell>
                  <TableCell className="fw-bold">View</TableCell>
                  <TableCell className="fw-bold">Edit</TableCell>
                  <TableCell className="fw-bold">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {modules.map((module) => (
                  <TableRow key={module}>
                    <TableCell>{module}</TableCell>
                    {["view", "edit", "delete"].map((type) => (
                      <TableCell key={type}>
                        <Checkbox
                          checked={formData.permissions[module][type]}
                          onChange={() => handlePermissionChange(module, type)}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* --- Priority Section --- */}
      {/* <PrioritySection formData={formData} updateFormData={updateFormData} /> */}

      {/* --- Footer --- */}
      <footer>
        <div className="card mt-4 px-0">
          <div className="d-flex gap-2 px-3 py-3">
            <div className="flex-grow-1">
              <Button
                label="Cancel"
                type="button"
                severity="secondary"
                outlined
                onClick={handleCancel}
                className="w-100"
              />
            </div>
            <div className="flex-grow-1">
              <Button
                label="Save"
                type="submit"
                icon="pi pi-check"
                iconPos="right"
                form="role-form"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default AddRole;
