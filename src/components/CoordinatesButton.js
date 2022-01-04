// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    constructor(props) {
        super();
    }

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
        // return [e.clientX, e.clientY]
    }
//onReceiveCoordinates is a prop(attribute) arrow function from index.js , it is a prop passed to this component. 
//We use an event handler to pass some event data to that function mouseCoordinates is "replaced" by [e.clientX, e.clientY]!!!
    render() {
        return (
            <button onClick={this.handleClick}>Co-ordinates</button>
        )
    }

}

export default CoordinatesButton;