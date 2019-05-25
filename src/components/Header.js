import React, {Component} from 'react'
import Navbar from './Navbar'

class Header extends Component {
    render() {
        return(
            <header>
                <h1>HTC</h1>
                <h2>Half the clique</h2>
                <Navbar />
            </header>
        )
    }
}

export default Header