import React from 'react';

class SubmitButton extends React.Component {
    render() {
        return (
            <button onClick={this.handleClick}>Submit</button>
        )
    }

    handleClick = () => {
        console.log("Submitted!");
    }
}

export default SubmitButton;