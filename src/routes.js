import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Step1 from './Components/Wizard/Steps/Step1'
import Step2 from './Components/Wizard/Steps/Step2'
import Step3 from './Components/Wizard/Steps/Step3'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard/step1' component={Step1} />
        <Route path='/wizard/step2' component={Step2} />
        <Route path='/wizard/step3' component={Step3} />
    </Switch>
)