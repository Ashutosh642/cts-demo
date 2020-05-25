import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    decrementCounter() {
        this.setState({ counter: this.state.counter - 1 })
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {

        const { counter } = this.state;
        return (
            <div>
                {!!counter && (
                    <button type="submit" onClick={() => this.decrementCounter()} className="btn btn-primary">-</button>

                )}
                &nbsp;
                <span className="badge badge-success">{counter}</span> &nbsp;
                <button type="submit" onClick={() => this.incrementCounter()} className="btn btn-primary">+</button>


            </div>
        )
    }
}
export default Counter