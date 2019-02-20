import React, {Component} from 'react';
import './../../App.css';
class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
        this.method = this.method.bind(this);
    }

    handelChange =(e) => {
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state,()=>{
            //console.log(this.state);
        });
    }
    componentDidMount() {
        this.props.onRef(this)
        if(this.props.data !== ""){
            this.setState({userName : this.props.data})
        }
    }


    /*componentWillUnmount() {
        this.props.onRef(this)
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
                           name="userName"
                           value={this.state.userName}
                           onChange={this.handelChange.bind(this)}/>

                    <hr/>
                </div>
            </React.Fragment>
        );
    }
}

export default Child;

