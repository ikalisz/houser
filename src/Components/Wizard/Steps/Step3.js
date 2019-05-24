import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import store, {MORTGAGE_UPDATE, RENT_UPDATE, RESET_STATE} from '../../../ducks/store'
import axios from 'axios';


export default class Step3 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            mortgageAmt: reduxState.mortgageAmt,
            monthlyRent: reduxState.monthlyRent,
            submitted: false,
        }
        this.bossSubmit = this.bossSubmit.bind(this)
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                mortgageAmt: store.getState().mortgageAmt,
                monthlyRent: store.getState().monthlyRent
            })
        })
    }
    updateMortgageAmt = (mortgageAmt) => {
        store.dispatch({type: MORTGAGE_UPDATE, mortgageAmt})
    }
    updateMonthlyRent = (monthlyRent) => {
        store.dispatch({type: RENT_UPDATE, monthlyRent})
    }
    async bossSubmit() {
        const {propertyName, address, city, stateProperty, zip, imageURL, mortgageAmt, monthlyRent} = store.getState()
        console.log(stateProperty)
        await axios.post('/api/house', {
            propertyName,
            address,
            city,
            stateProperty,
            zip,
            imageURL,
            mortgageAmt,
            monthlyRent
        })
        store.dispatch({type: RESET_STATE})
        this.setState({submitted: true})
    }
    
    render() {
        return (
            <section className="dashboardBody">
                {this.state.submitted ? 
                    <Redirect to='/' />
                    :
                <section className='container'>
                    <header className="wizardHeader">
                        <h1>Add New Listing</h1>
                        <Link to='/' ><button>Cancel</button></Link>
                    </header>
                    <main className="inputMain">
                        <section>
                            <h2>Recommended Rent: ${this.state.mortgageAmt * 1.25}</h2>
                        </section>
                        <section>
                            <h2>Monthly Mortgage Amount</h2>
                            <input type="number" value={this.state.mortgageAmt} onChange={(e) => this.updateMortgageAmt(e.target.value)} />
                        </section>
                        <section>
                            <h2>Desired Monthly Rent</h2>
                            <input type="number" value={this.state.monthlyRent} onChange={(e) => this.updateMonthlyRent(e.target.value)} />
                        </section>
                    </main>
                    <nav className="stepButtonNav">
                        <Link to='/wizard/step2' ><button>Previous</button></Link>
                        <button onClick={this.bossSubmit}>Submit</button>
                    </nav>
                </section> 
                }
            </section>
        )
    }
}