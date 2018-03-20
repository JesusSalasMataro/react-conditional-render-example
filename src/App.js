import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Component1 extends Component {
    render() {
        return <p>Component 1</p>
    }
}

class Component2 extends Component {
    render() {
        return <p>Component 2</p>
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            showComponent1: true
        };
    }

    toggleComponent = () => {
        if (this.state.showComponent1) {
            this.setState({
                showComponent1: false
            })
        }
        else {
            this.setState({
                showComponent1: true
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Conditionals example</h2>
                </div>
                <br/>
                <input type="button" value="Toggle component" onClick={this.toggleComponent} />

                {
                    this.state.showComponent1
                        ? <Component1 />
                        : <Component2 />
                }
            </div>
        );
    }
}

