import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'; // Imported for Name and Email fields
import { InputSwitch } from 'primereact/inputswitch'; // Imported for the Security Settings toggle
import { Button } from 'primereact/button';

const roles = [
    { label: 'Super Admin', value: 'super_admin' },
    { label: 'Admin', value: 'admin' },
    { label: 'Moderator', value: 'moderator' },
    { label: 'Editor', value: 'editor' },
];

const initialFormData = {
    name: '', // New field for Name
    email: '', // New field for Email
    role: null,
    securitySettings: true, // New field for the toggle switch
};

const AdminForm = ({ show, onClose, onSubmit }) => {
    const [formData, setFormData] = useState(initialFormData);

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
        // Note: This form assumes it is rendered inside a modal/dialog component
        <form id="admin-form" onSubmit={handleSubmit} className="p-3">
            {/* 1. Name Input */}
            <div className='card'>
                <div className='card-body'>
                    <div className="p-field mb-3">
                        <label htmlFor="name" className="p-d-block">Name</label>
                        <InputText
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            placeholder="Enter name"
                            className="w-100"
                        />
                    </div>

                    {/* 2. Email Input */}
                    <div className="p-field mb-3">
                        <label htmlFor="email" className="p-d-block">Email</label>
                        <InputText
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            placeholder="Enter email"
                            className="w-100"
                        />
                    </div>

                    {/* 3. Assign Role Dropdown */}
                    <div className="p-field mb-3">
                        {/* Added asterisk * to match screenshot */}
                        <label htmlFor="role" className="p-d-block">Assign Role*</label>
                        <Dropdown
                            id="role"
                            value={formData.role}
                            options={roles}
                            onChange={(e) => updateFormData('role', e.value)}
                            placeholder="Select role"
                            className="w-100"
                        />
                    </div>

                    {/* 4. Security Settings Toggle Switch */}
                    <div className="p-field mt-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <label htmlFor="securitySettings" className="p-d-block">Security Settings</label>
                            <small className="p-text-light text-muted">(Disable 2FA)</small>
                        </div>
                        <InputSwitch
                            id="securitySettings"
                            checked={formData.securitySettings}
                            onChange={(e) => updateFormData('securitySettings', e.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Footer Buttons - Typically placed at the bottom of the modal/dialog */}
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

export default AdminForm;