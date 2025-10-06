import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import Divider from "@mui/material/Divider";


const countries = [
  { label: "India", value: "IN" },
  { label: "USA", value: "US" },
  { label: "Canada", value: "CA" },
];

const fieldTypes = [
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Email", value: "email" },
  { label: "Dropdown", value: "dropdown" },
];

const feeTypes = [
  { label: "Fixed Fee", value: "fixed" },
  { label: "Percentage", value: "percentage" },
];

// --- Initial Form State ---
const initialFormData = {
  fieldName: "",
  fieldType: null,
  isMandatory: false,
 validationRule:""
};

const KYCCustomForm = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  // Reset form data on open
  useEffect(() => {
    if (show) {
      setFormData(initialFormData);
    }
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
    <form id="corridor-form" onSubmit={handleSubmit}>
      {/* === 1. Field Information Section === */}
      <div className="card mb-2">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Field Information</h6>
          <Divider />

          {/* Field Name */}
          <div className="mb-3">
            <label htmlFor="fieldName" className="form-label">
              Field Name
            </label>
            <InputText
              id="fieldName"
              value={formData.fieldName}
              onChange={(e) => updateFormData("fieldName", e.target.value)}
              placeholder="Enter Field Name"
              className="w-100"
            />
          </div>

          {/* Field Type */}
          <div className="mb-3">
            <label htmlFor="fieldType" className="form-label">
              Field Type
            </label>
            <Dropdown
              id="fieldType"
              value={formData.fieldType}
              options={fieldTypes}
              onChange={(e) => updateFormData("fieldType", e.value)}
              placeholder="Select Field Type"
              className="w-100"
            />
          </div>

          {/* Mandatory Field */}
          <div className="mb-3 d-flex align-items-center justify-content-between p-2 border rounded">
            <label htmlFor="isMandatory" className="form-label mb-0 fw-semibold">
              Mandatory Field
            </label>
            <InputSwitch
              id="isMandatory"
              checked={formData.isMandatory}
              onChange={(e) => updateFormData("isMandatory", e.value)}
            />
          </div>
        </div>
      </div>

      {/* === 2. Applicable For Section === */}
      <div className="card mb-2">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Applicable For</h6>
          <Divider />

          {/* Select Country */}
          <div className="mb-3">
            <label htmlFor="applicableCountry" className="form-label">
              Select Country
            </label>
            <Dropdown
              id="applicableCountry"
              value={formData.applicableCountry}
              options={countries}
              onChange={(e) => updateFormData("applicableCountry", e.value)}
              placeholder="Select Country"
              className="w-100"
            />
          </div>

          {/* Validation Rule */}
          <div className="mb-3">
            <label htmlFor="validationRule" className="form-label">
              Validation Rule
            </label>
            <InputTextarea
              id="validationRule"
              rows={3}
              value={formData.validationRule}
              onChange={(e) =>
                updateFormData("validationRule", e.target.value)
              }
              placeholder="Enter validation rules (e.g. Min length 5, must contain digits, etc.)"
              className="w-100"
            />
          </div>
        </div>
      </div>

      {/* === 3. Status Section === */}
      {/* <StatusSection
        formData={formData}
        updateFormData={updateFormData}
      /> */}

      {/* === Footer === */}
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
                icon="pi pi-save"
                iconPos="right"
                form="corridor-form"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default KYCCustomForm;
