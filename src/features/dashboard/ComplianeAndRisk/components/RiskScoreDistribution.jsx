import React,{useState} from 'react'

const RiskScoreDistribution = () => {
     const [activeTab, setActiveTab] = useState('Transactions');
  return (
 
      <div className='card flex-fill'>
        <div className='card-body'>
               <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0 fs-5">Risk Score Distribution</h5>
          <div className="btn-group btn-group-sm" role="group">
            {['Transactions', 'Users'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`btn btn-sm ${activeTab === tab ? 'btn-primary active' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>              
        </div>
      </div>
   
  )
}

export default RiskScoreDistribution
