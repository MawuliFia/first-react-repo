import React, { Component } from 'react'
import './index.css'

export class IndexPage extends Component {

    constructor() {
        super() 

        this.state = {
            header: <h1 id="header-change">CHANGE MY COLOUR</h1>
        }

        this.renderRed = this.renderRed.bind(this)
        this.renderBlue = this.renderBlue.bind(this)
        // I have used bind to render to of the functions
        // The other two our bound via onClick to show the difference
        // Binding here is universally prefered - better for performance with larger applications
    }

    renderRed() {
        this.setState(
            {
                header: <h1 id="header-red">THIS IS RED</h1>
            },
            () => console.log("block now red")
        )
    }

    renderBlue() {
        this.setState(
            {
                header: <h1 id="header-blue">THIS IS BLUE</h1>
            },
            () => console.log("block now blue")
        )
    }

    renderGreen() {
        this.setState(
            {
                header: <h1 id="header-green">THIS IS GREEN</h1>
            },
            () => console.log("block now green")
        )
    }

    renderYellow() {
        this.setState(
            {
                header: <h1 id="header-yellow">THIS IS YELLOW</h1>
            },
            () => console.log("block now yellow")
        )
    }



    render() {
        return (
            <div className="main-container">
                <div>{this.state.header}</div>
                <div className="button-container">
                    <button id="button-red" onClick={this.renderRed}></button>
                    <button id="button-blue" onClick={this.renderBlue}></button>
                    <button id="button-green" onClick={()=> {this.renderGreen()}}></button>
                    <button id="button-yellow" onClick={()=> {this.renderYellow()}}></button>
                </div>
            </div>
        )
    }
}

export default IndexPage
