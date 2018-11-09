import React, {Component} from 'react';

class ReactState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeMe: 0
        };
    }

    handleClick=(greeting)=> {
        console.log("handleClick", greeting);
        this.setState((prevState, props) => {
            console.log(prevState);
            return {likeMe: prevState.likeMe + 1}
        })
    };

    render() {
        return (
            <div className="App-ReactState">
                <h1>This is ReactState Component</h1>
                <h1>{this.state.likeMe}</h1>
                <button onClick={()=>this.handleClick("Hi")}>Click Like</button>
            </div>
        );
    }
}

export default ReactState;
