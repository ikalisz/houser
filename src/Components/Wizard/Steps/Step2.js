import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Step2 extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <section className="dashboardBody">
                <section className='container'>
                    <header>
                        <h1>Add New Listing</h1>
                        <Link to='/' ><button>Cancel</button></Link>
                    </header>
                </section> 
            </section>
        )
    }
}