import React, {Component} from 'react'
import House from '../House/House'
import './Dashboard.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        axios.get('/api/houses')
        .then(houses => {
            this.setState({houses: houses.data})
            console.log(houses)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const houseDisplay = this.state.houses.map(house => {
           return <House key={house.id} propertyName={house.name} address={house.address} city={house.city} propertyState={house.state} zip={house.zip} imageURL={house.img} mortgageAmt={house.mortgage} monthlyRent={house.rent} />
        })
        return (
            <section className='dashboardBody'>
                <section className='container'>
                    <header className="dashboardHeader">
                        <h2>Dashboard</h2>
                        <Link to='/wizard/step1' ><button>Add New Property</button></Link>
                    </header>
                    <h2 className="homeListings">Home Listings</h2>
                    {houseDisplay}
                </section>
            </section>
        )
    }
}