// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {
    // constructor(props) {
    //     super();
    // }

    handleClick = (event) => {
        event.persist();
        // event.preventDefault();
        //or store a variable: 
        // const eventObj = event;
        // const eventObj = e.target; //will print the actual DOM element, target is the DOM element "targetted" by the user event
        setTimeout(() => {
            this.props.onDelayedClick(event) //pass the event click to onDelayedClick, e or e.target
        }, this.props.delay)

    }

//e.persist() passes the test
//goes null if we use const eventObj = e;

    render() {
        return (
            <button onClick={this.handleClick}>Delayed BUTTON</button>
        )
    }

}

export default DelayedButton;