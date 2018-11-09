import React, {Component} from 'react';
import Header from './Header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeMe:1
        }
    }


    render() {
        let sample = "sample 01";
        return (
            <div className="App">
                <Header
                    title={sample}
                    counter="01"
                />

                {/*<button onClick={this.handleClick.bind(this)}>Click Me</button>*/}
                {/*<button onClick={()=>this.handleClick()}>Click Me</button>*/}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }

    handleClick = ()=> {
        console.log(this.state.likeMe)
    }
}

export default App;
