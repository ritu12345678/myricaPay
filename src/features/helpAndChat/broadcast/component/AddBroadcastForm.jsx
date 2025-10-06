import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import Divider from "@mui/material/Divider";
import AddBroadcastStatus from "./AddBroadcastStatus";

const channels = [
  { label: "Push Notification", value: "push" },
  { label: "Email", value: "email" },
  { label: "SMS", value: "sms" },
];

const audienceSegments = [
  { label: "All Users", value: "all" },
  { label: "Premium Members", value: "premium" },
  { label: "Inactive Users", value: "inactive" },
];

const statuses = [
  { label: "Active", value: "active" },
  { label: "Done", value: "done" },
];

const initialFormData = {
  channel: null,
  title: "",
  message: "",
  audience: null,
  scheduleDate: null,
  scheduleTime: null,
  status: "active",
};

const AddBroadcastForm = ({ show, onClose, onSubmit }) => {
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
    onSubmit?.(formData);
    onClose();
  };

  return (
    <form id="broadcast-form" onSubmit={handleSubmit}>
      {/* 1️⃣ Information Section */}
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Information</h6>
          <Divider />

          {/* Select Channel */}
          <div className="mb-3">
            <label htmlFor="channel" className="form-label">
              Select Channel
            </label>
            <Dropdown
              id="channel"
              value={formData.channel}
              options={channels}
              onChange={(e) => updateFormData("channel", e.value)}
              placeholder="Select Channel"
              className="w-100"
            />
          </div>

          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <InputText
              id="title"
              value={formData.title}
              onChange={(e) => updateFormData("title", e.target.value)}
              className="w-100"
              placeholder="Enter broadcast title"
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <InputTextarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => updateFormData("message", e.target.value)}
              className="w-100"
              autoResize
              placeholder="Enter broadcast message"
            />
          </div>
        </div>
      </div>

      {/* 2️⃣ Audience Control Section */}
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Audience Control</h6>
          <Divider />

          {/* Audience Segment */}
          <div className="mb-3">
            <label htmlFor="audience" className="form-label">
              Audience Segment
            </label>
            <Dropdown
              id="audience"
              value={formData.audience}
              options={audienceSegments}
              onChange={(e) => updateFormData("audience", e.value)}
              placeholder="Select Audience"
              className="w-100"
            />
          </div>

          {/* Schedule */}
          <div className="mb-3">
            <label className="form-label">Schedule</label>
            <div className="d-flex gap-2">
              <div className="flex-grow-1">
                <Calendar
                  value={formData.scheduleDate}
                  onChange={(e) => updateFormData("scheduleDate", e.value)}
                  placeholder="Select Date"
                  className="w-100"
                  dateFormat="dd/mm/yy"
                />
              </div>
              <div className="flex-grow-1">
                <Calendar
                  value={formData.scheduleTime}
                  onChange={(e) => updateFormData("scheduleTime", e.value)}
                  placeholder="Select Time"
                  className="w-100"
                  timeOnly
                  hourFormat="12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3️⃣ Status Section */}
    <AddBroadcastStatus formData={formData} updateFormData={updateFormData}/>

      {/* 4️⃣ Footer */}
       <footer>
              <div className="card mt-4 px-0">
                <div className="d-flex gap-2 px-3 py-3">
                  {/* Cancel Button */}
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
                  {/* Submit Button */}
                  <div className="flex-grow-1">
                    <Button
                      label="Submit"
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

export default AddBroadcastForm;
