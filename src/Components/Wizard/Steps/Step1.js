import React, {Component} from 'react'
import store, {NAME_UPDATE, ADDRESS_UPDATE, CITY_UPDATE, STATE_UPDATE, ZIP_UPDATE} from '../../../ducks/store'
import {Link} from 'react-router-dom'
import './Step.css'

export default class Step1 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            stateProperty: reduxState.stateProperty,
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
                stateProperty: reduxState.stateProperty,
                zip: reduxState.zip
            })
        })
    }
    updatePropertyName = (propertyName) => {
        store.dispatch({type: NAME_UPDATE, propertyName})
    }
    updateAddress = (address) => {
        store.dispatch({type: ADDRESS_UPDATE, address})
    }
    updateCity = (city) => {
        store.dispatch({type: CITY_UPDATE, city})
    }
    updateStateProperty = (stateProperty) => {
        store.dispatch({type: STATE_UPDATE, stateProperty})
    }
    updateZip = (zip) => {
        store.dispatch({type: ZIP_UPDATE, zip})
    }
    render() {
        return (
            <section className="dashboardBody">
                <section className='container'>
                    <header className="wizardHeader">
                        <h1>Add New Listing</h1>
                        <Link to='/' ><button>Cancel</button></Link>
                    </header>
                    <main className="inputMain">
                        <section>
                            <h3>Property Name</h3>
                            <input value={this.state.propertyName} onChange={(e) => this.updatePropertyName(e.target.value)} />
                        </section>
                        <section>
                            <h3>Address</h3>
                            <input value={this.state.address} onChange={(e) => this.updateAddress(e.target.value)} />
                        </section>
                        <section className="inputHolderStep1">
                            <section>
                                <h3>City</h3>
                                <input value={this.state.city} onChange={(e) => this.updateCity(e.target.value)} />
                            </section>
                            <section>
                                <h3>State</h3>
                                <input value={this.state.stateProperty} onChange={(e) => this.updateStateProperty(e.target.value)} />
                            </section>
                            <section>
                                <h3>Zip</h3>
                                <input type="number" value={this.state.zip} onChange={(e) => this.updateZip(e.target.value)} />
                            </section>
                        </section>
                    </main>
                    <nav className="stepButtonNav">
                        <div></div>
                        <Link to='/wizard/step2' ><button>Next</button></Link>
                    </nav>
                </section> 
            </section>
        )
    }
}