import React, {Component} from 'react';
import './../../App.css';
class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.method = this.method.bind(this);
    }

    handelChange =(e) => {
        let state = this.state;
        state[e.target.name] =e.target.value;
        this.setState(state,()=>{
            console.log(this.state);
        });
    }
    componentDidMount() {
        this.props.onRef(this)
    }

    /*componentWillUnmount() {
        this.props.onRef(undefined)
    }*/

    method() {
        window.alert('do stuff')
        console.log("child method working");
    }

    render() {
        return (

            <React.Fragment>
                <div className="input-child">
                    <span>{this.props.title}</span>
                    <input type="text"
                           name="firstName"
                           /*ref={instance => this.state = instance}*/
                            value={this.state.firstName}
                           onChange={this.handelChange.bind(this)}/>
                           <button >Edit FirstName</button>
                    <hr/>

                    <input type="text"
                           name="lastName"
                           value={this.state.lastName}
                           /*ref={instance => this.state = instance}*/
                           onChange={this.handelChange.bind(this)}/>
                    <button >Edit LastName</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Child;

