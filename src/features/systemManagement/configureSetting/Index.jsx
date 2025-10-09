import React from 'react'
import ParameterTable from './components/ParameterTable'
import FeatureToggleSection from './components/FeatureToggleSection'
import SystemStatus from './components/SystemStatus'
import FilterSection from './components/FilterSection'

const ConfigureSettingTab = () => {
    return (
        <div className='px-3'>
             <div className='row'>
                <div className='col-12'><FilterSection/></div> </div>
            <div className='row'>
                <div className='col-12'><SystemStatus/></div> </div>
            <div className='row'><div className='col-12'><ParameterTable /></div> </div>
           <div className='row mt-3'><div className='col-12'><FeatureToggleSection /></div> </div>

        </div>
    )
}

export default ConfigureSettingTab