import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {IMAGE_UPDATE} from '../../../ducks/store'

export default class Step2 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            imageURL: reduxState.imageURL
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                imageURL: store.getState().imageURL
            })
        })
    }
    updateImageURL = (imageURL) => {
        store.dispatch({type: IMAGE_UPDATE, imageURL})
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
                            <h2>Image URL</h2>
                            <input value={this.state.imageURL} onChange={(e) => this.updateImageURL(e.target.value)} />
                        </section>
                    </main>
                    <nav className="stepButtonNav">
                        <Link to='/wizard/step1' ><button>Previous</button></Link>
                        <Link to='/wizard/step3' ><button>Next</button></Link>
                    </nav>
                </section> 
            </section>
        )
    }
}