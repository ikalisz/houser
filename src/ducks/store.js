import {createStore} from 'redux'


const initialState = {
    propertyName: '',
    address: '',
    city: '',
    stateProperty: '',
    zip: 0,
    imageURL: '',
    mortgageAmt: 0,
    monthlyRent: 0,
}
export const NAME_UPDATE = 'NAME_UPDATE'
export const ADDRESS_UPDATE = 'ADDRESS_UPDATE'
export const CITY_UPDATE = 'CITY_UPDATE'
export const STATE_UPDATE = 'STATE_UPDATE'
export const ZIP_UPDATE = 'ZIP_UPDATE'
export const IMAGE_UPDATE = 'IMAGE_UPDATE'
export const MORTGAGE_UPDATE = 'MORTGAGE_UPDATE'
export const RENT_UPDATE = 'RENT_UPDATE'
export const RESET_STATE = 'RESET_STATE'

function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME_UPDATE: 
            return {
                ...state,
                propertyName: action.propertyName
            }
        case ADDRESS_UPDATE:
            return {
                ...state,
                address: action.address
            }
        case CITY_UPDATE:
            return {
                ...state,
                city: action.city
            }
        case STATE_UPDATE:
            return {
                ...state,
                stateProperty: action.stateProperty
            }
        case ZIP_UPDATE:
            return {
                ...state,
                zip: action.zip
            }
        case IMAGE_UPDATE:
            return {
                ...state,
                imageURL: action.imageURL
            }
        case MORTGAGE_UPDATE:
            return {
                ...state,
                mortgageAmt: action.mortgageAmt
            }
        case RENT_UPDATE:
            return {
                ...state,
                monthlyRent: action.monthlyRent
            }
        case RESET_STATE:
            return {
                propertyName: '',
                address: '',
                city: '',
                stateProperty: '',
                zip: 0,
                imageURL: '',
                mortgageAmt: 0,
                monthlyRent: 0,
            }
        default:
            return state
    }
}

export default createStore(reducer)