import React, {Component} from 'react'
import House from '../House/House'
import './Dashboard.css'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section className='dashboardBody'>
                <section className='container'>
                    <header className="dashboardHeader">
                        <h2>DashBoard</h2>
                        <Link to='/wizard/step1' ><button>Add New Property</button></Link>
                    </header>
                    <House />
                </section>
            </section>
        )
    }
}