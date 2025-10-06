import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Divider from '@mui/material/Divider';
import StatusSection from './AddCorridorFormStatus';


const countries = [
    { label: 'India', value: 'IN' },
    { label: 'USA', value: 'US' },
    { label: 'Canada', value: 'CA' }
];

const feeTypes = [
    { label: 'Fixed Fee', value: 'fixed' },
    { label: 'Percentage', value: 'percentage' }
];

// --- Initial Form State ---
const initialFormData = {
    corridorName: '',
    countryA: null,
    countryB: null,
    feeType: null,
    feeValue: '',
    fxMargin: '',
    minTransaction: '',
    maxTransaction: '',
    status: 'active'
};

const CorridorForm = ({ show, onClose, onSubmit }) => {
    const [formData, setFormData] = useState(initialFormData);

    // Reset form data on open
    useEffect(() => {
        if (show) {
            setFormData(initialFormData);
        }
    }, [show]);

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
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

  

    // --- Footer Content ---
  

    return (


        <form id="corridor-form" onSubmit={handleSubmit}>

            <div className="card mb-2 ">
                <div className='card-body'>
                    <div className="mb-4">
                        <h6 className="fw-bold fs-18 mb-3">Country Name</h6>
                        <Divider />

                        {/* Country A */}
                        <div className="mb-3">
                            <label htmlFor="countryA" className="form-label">Country A</label>
                            <Dropdown
                                id="countryA"
                                value={formData.countryA}
                                options={countries}
                                onChange={(e) => updateFormData('countryA', e.value)}
                                placeholder="Select Country A"
                                className="w-100"
                            />
                        </div>

                        {/* Country B */}
                        <div className="mb-3">
                            <label htmlFor="countryB" className="form-label">Country B</label>
                            <Dropdown
                                id="countryB"
                                value={formData.countryB}
                                options={countries.filter(c => c.value !== formData.countryA)}
                                onChange={(e) => updateFormData('countryB', e.value)}
                                placeholder="Select Country B"
                                className="w-100"
                                disabled={!formData.countryA}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Fee Structure Section */}
            <div className='card'>
                <div className='card-body' >
                    <h6 className="fw-bold fs-18 mb-3">Fee Structure</h6>
                    <Divider />
                    <div className="mb-4">


                        <div className="mb-3">
                            <label htmlFor="feeType" className="form-label">Fee Type</label>
                            <Dropdown
                                id="feeType"
                                value={formData.feeType}
                                options={feeTypes}
                                onChange={(e) => updateFormData('feeType', e.value)}
                                placeholder="Select Fee Type"
                                className="w-100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="feeValue" className="form-label">Fee Value</label>
                            <InputText
                                id="feeValue"
                                type="number"
                                value={formData.feeValue}
                                onChange={(e) => updateFormData('feeValue', e.target.value)}
                                className="w-100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fxMargin" className="form-label">FX Margin (%)</label>
                            <InputText
                                id="fxMargin"
                                type="number"
                                value={formData.fxMargin}
                                onChange={(e) => updateFormData('fxMargin', e.target.value)}
                                className="w-100"
                            />
                        </div>
                    </div>

                </div>
            </div>


            {/* 3. Transaction Limits Section */}
            <div className='card mt-2'>
                <div className='card-body'>
                     <h6 className="fw-bold fs-18 mb-3">Transaction Limits</h6>
                     <Divider/>
                      <div className="mb-4">
               

                <div className="mb-3">
                    <label htmlFor="minTransaction" className="form-label">Min Transaction</label>
                    <InputText
                        id="minTransaction"
                        type="number"
                        value={formData.minTransaction}
                        onChange={(e) => updateFormData('minTransaction', e.target.value)}
                        className="w-100"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="maxTransaction" className="form-label">Max Transaction</label>
                    <InputText
                        id="maxTransaction"
                        type="number"
                        value={formData.maxTransaction}
                        onChange={(e) => updateFormData('maxTransaction', e.target.value)}
                        className="w-100"
                    />
                </div>
            </div>
                </div>
            </div>
          

            {/* 4. Status Section */}
        <StatusSection formData={formData} updateFormData={updateFormData}/>
        <footer>
      <div className='card mt-4 px-0'>
  <div className="d-flex gap-2 px-3 py-3"> 
    {/* px-3 for padding inside the card */}
    
    {/* Cancel Button */}
    <div className="flex-grow-1">
      <Button
        label="Cancel"
        type="button"
        severity="secondary"
        outlined
        onClick={handleCancel}
        className="w-100" // make button occupy full width of this div
      />
    </div>

    {/* Save Button */}
    <div className="flex-grow-1">
      <Button
        label="Save"
        type="submit"
        icon="pi pi-save"
        iconPos="right"
        form="corridor-form"
        className="w-100" // make button occupy full width of this div
      />
    </div>
    
  </div>
</div>
</footer>

        </form>

    );
};

export default CorridorForm;