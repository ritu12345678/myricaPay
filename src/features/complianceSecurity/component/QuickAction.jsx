import React from 'react'
import exportcompliancelog from "../../../assets/exportcompliance.png"
import visible from "../../../assets/visible.png"
import graph2 from "../../../assets/graph2.png"
const QuickAction = () => {
    return (
        <div>
      
                <div className='card'>
                    <div className='card-body'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p className='p-0 m-0 heading-blue-20 mb-3'> Quick Action</p>
                            <div className="d-flex gap-2">
                                <button className=" btn btn-primary lightblue-btn ">
                                    <img className="mb-1 pe-1" src={exportcompliancelog} alt="Add" style={{ width: 18, height: 18 }} />
                                    Export Compliance Log
                                </button>

                                <button type="button" className="btn btn-primary btn-outline-secondary blue-btn "> <img className="mb-1 pe-1" src={visible} alt="Add" style={{ width: 18, height: 18 }} />View Audit Trial</button>
                                <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey"> <img className="mb-1 pe-1" src={graph2} alt="Add" style={{ width: 18, height: 18 }} />Compliance Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    )
}

export default QuickAction

