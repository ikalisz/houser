import {createStore} from 'redux'


const initialState = {
    propertyName: 'Ian',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imageURL: '',
    mortgageAmt: 0,
    monthlyRent: 0,
}
export const NAME_UPDATE = 'NAME_UPDATE'

function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME_UPDATE: 
        return {
            ...state,
            propertyName: action.propertyName
        }
        default:
            return state
    }
}

export default createStore(reducer)