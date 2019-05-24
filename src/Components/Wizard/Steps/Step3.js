import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {MORTGAGE_UPDATE, RENT_UPDATE, RESET_STATE} from '../../../ducks/store'


export default class Step3 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            mortgageAmt: reduxState.mortgageAmt,
            monthlyRent: reduxState.monthlyRent
        }
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
    resetRedux = () => {
        store.dispatch({type: RESET_STATE})
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
                            <h2>Recommended Rent: $0</h2>
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
                        <Link to='/'><button onClick={this.resetRedux}>Submit</button></Link>
                    </nav>
                </section> 
            </section>
        )
    }
}