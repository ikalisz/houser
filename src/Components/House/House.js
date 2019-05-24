import React from 'react'
import './House.css'
import axios from 'axios'

export default function House(props) {
    function deleteHouse() {
        axios.delete(`/api/house/${props.id}`)
        .then(() => {
            return props.updateHouses()
        })
    }
   
    return (
        <div className="houseContainer">
            <img className="homeImage" src={props.imageURL} alt="" />
            <section>
                <p>Property Name: </p>
                <p>Address: {props.address}</p>
                <p>City: {props.city}</p>
                <p>State: {props.propertyState}</p>
                <p>Zip: {props.zip}</p>
            </section>
            <section className="dataNums">
                <p>Monthly Mortgage: {props.mortgageAmt}</p>
                <p>Desired Rent: {props.monthlyRent}</p>
            </section>
            <button onClick={deleteHouse} className="deleteButton">X</button>
            {/* <div>{props.propertyName}</div>
            <div>{props.address}</div>
            <div>{props.city}</div>
            <div>{props.propertyState}</div>
            <div>{props.zip}</div>
            <div>{props.imageURL}</div>
            <div>{props.mortgageAmt}</div>
            <div>{props.monthlyRent}</div> */}
        </div>
    )
}