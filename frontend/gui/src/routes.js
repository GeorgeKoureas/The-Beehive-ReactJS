import React from 'react'
import { Route } from 'react-router-dom'
import CompetitionList from './components/List/List'
import CompetitionDetails from './components/Details/Details'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component= {CompetitionList} />
        <Route exact path='/:ID' component= {CompetitionDetails} />
    </div>

)


export default BaseRouter