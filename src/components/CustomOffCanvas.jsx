import React, { useEffect, useState } from 'react';

const CustomOffcanvas = ({
  show,
  title,
  onClose,
  children,
  footer,
  width = '450px',
  height = "100%",
  centered = false,
}) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (show && centered) {
      const timer = setTimeout(() => setSlideIn(true), 50);
      return () => clearTimeout(timer);
    } else {
      setSlideIn(false);
    }
  }, [show, centered]);

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1040,
    opacity: show ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: show ? 'auto' : 'none', // disables click when hidden
  };

  const panelStyle = centered
    ? {
        position: 'fixed',
        top: '50%',
        left: slideIn ? '50%' : '100%', // start offscreen right
        transform: 'translate(-50%, -50%)',
        width: width,
        maxHeight: '90vh',
        height: height,
        backgroundColor: '#F5F5F5',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        transition: 'left 0.4s ease-in-out, opacity 0.3s',
        opacity: show ? 1 : 0,
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: show ? 'auto' : 'none', // important: disable clicks when hidden
      }
    : {
        position: 'fixed',
        top: 0,
        right: 0,
        height: height,
        width: width,
        backgroundColor: '#E5E7EB',
        visibility: show ? 'visible' : 'hidden',
        transform: show ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out, visibility 0.3s',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: show ? 'auto' : 'none', // disables clicks when hidden
      };

  return (
    <>
      <div style={backdropStyle} onClick={onClose} />
      <div className="d-flex flex-column" style={panelStyle} aria-hidden={!show}>
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold">{title}</h5>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
        </div>
        <div className="p-3 flex-grow-1 overflow-auto canvas-body">{children}</div>
        {footer && <div className="p-3 border-top">{footer}</div>}
      </div>
    </>
  );
};

export default CustomOffcanvas;
