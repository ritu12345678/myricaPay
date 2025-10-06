import React ,{useState} from 'react'
import CustomOffcanvas from '../../../../components/CustomOffCanvas'
import KYCCustomForm from './KYCCustomForm'
const KycCustomHeading = ({ title, content }) => {
    const [showOffCanvas, setShowOffCanvas] = useState(false)
    
    const handlecloseCanvas = () => {
        setShowOffCanvas(false)
    }

    const handleOpenCanvas = () => {
        setShowOffCanvas(true)
    }
    return (
        <div className='d-flex align-items-center justify-content-between px-3'>
            <div className='ps-2'>
                <p className='p-0 m-0 heading-blue text-capitalize fs-18'> {title}</p>
                <p className='p-0 m-0 fs-15'>{content}</p>
            </div>
            <button type="button" className="btn btn-primary blue-btn" onClick={handleOpenCanvas}>
                    <span className='fs-18'>+</span>Add KYC Fields</button>
                    {/* The CustomOffcanvas component is now defined above */}
                    <CustomOffcanvas 
                        title="Add New KYC  Field" 
                        children={<KYCCustomForm show={showOffCanvas} onClose={handlecloseCanvas} />} 
                        show={showOffCanvas} 
                        onClose={handlecloseCanvas} 
                    />
           
        </div>
    )
}

export default KycCustomHeading
