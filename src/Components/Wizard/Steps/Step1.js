import React, {Component} from 'react'
import store, {NAME_UPDATE} from '../../../ducks/store'
import {Link} from 'react-router-dom'

export default class Step1 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                propertyName: reduxState.propertyName,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }
    updatePropertyName = (propertyName) => {
        store.dispatch({type: NAME_UPDATE, propertyName})
    }
    render() {
        return (
            <section className="dashboardBody">
                <section className='container'>
                    <header>
                        <h1>Add New Listing</h1>
                        <Link to='/' ><button>Cancel</button></Link>
                    </header>
                    <input value={this.state.propertyName} onChange={(e) => this.updatePropertyName(e.target.value)} />
                    <nav>
                        <div></div>
                        <Link to='/wizard/step2' ><button>Next</button></Link>
                    </nav>
                </section> 
            </section>
        )
    }
}