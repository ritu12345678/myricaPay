import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

// Note: No need for the <style> tag now, as the CSS is external

const ProgressBarRejection = ({ label, count, percentage, color, progressValue }) => {
    const value = parseFloat(progressValue);
    const showDot = value < 100 && value > 0;

    return (
        // Apply the custom container class and Bootstrap margin class
        <div className="rejection-bar-container mb-4" style={{ '--bar-color': color }}>
            
            {/* Bootstrap 5 Layout: Text and Values */}
            <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-normal">{label}</span>
                <div>
                    <span className="fw-bold me-1">{count}</span>
                    <span className="text-muted">{percentage}</span>
                </div>
            </div>

            {/* PrimeReact Progress Bar */}
            {/* The inline style sets the dynamic custom color variable */}
            <ProgressBar 
                value={value} 
                // We must use className to apply the custom styling to PrimeReact
                className="rejection-bar" 
            />

            {/* White Dot Element (Custom HTML/CSS) */}
            {showDot && (
                <div
                    className="rejection-bar-dot"
                 
                    style={{
                        // left: calc(Value% - half_dot_width) for accurate positioning
                        left: `calc(${value}% - 4px)`,
                        
                        // transform: translateY(-100%) helps align the 8px dot to the 10px bar center
                        top: '74%', 
                        transform: 'translateY(-50%)',
                    }}
                />
            )}
        </div>
    );
};

export default ProgressBarRejection;