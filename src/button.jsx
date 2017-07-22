import React from 'react';

class SubmitButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Submit</button>
        )
    }

    handleClick() {
        console.log(this.props.date._d);
    }
}

export default SubmitButton;