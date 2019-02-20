import React, {Component} from 'react';
import '../App.css';

class LifeCycleMethodPart1 extends React.Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {
            counter : 0
        }

    }

    inc = () => { this.setState({counter : this.state.counter +1}) }
    dec = () => { this.setState({counter : this.state.counter -1}) }

componentDidMount(){
    console.log(" component Did Mount");
}

    render() {
        console.log("Render");
        const { title } = this.props;
        return (
            <div>
            <hr/>
            <h2>{title}</h2>
              <button onClick={this.inc.bind(this)}>Increment</button>
              <button onClick={this.dec.bind(this)}>Decrement</button>
              <h3 className="inline" > Counter : {this.state.counter}</h3> 

            </div>
        );
    }
}

export default LifeCycleMethodPart1;