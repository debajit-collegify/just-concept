import React, {Component} from 'react';


import Child from './child';

import './../../App.css';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showInput : false,
            btnTxt: 'Show Input Box',
            childFname : '',
            childLname: ''
        }

    }


    showInputBox = () => {
        this.setState({showInput : !this.state.showInput , btnTxt : 'Hide Input Box'});
        // this.child.method();
    }


    componentWillUnmount() {
        console.log("ComponentWillUnmount parent");
    }

    onClick = () => {
        this.child.method() // do stuff
        this.setState({childFname : this.child.state.firstName , childLname : this.child.state.lastName})
    }

    render() {
        var parentThis = this;

        console.log(parentThis.state);
        return (
            <React.Fragment>
            <div>
                <div className="parent-div">
                    <p>FirstName : {this.state.childFname} </p>
                    <p>LastName :  {this.state.childLname} </p>
                </div>
                <div className="container-child">


                    {
                        (this.state.showInput)?
                            (<Child onRef={ref => (this.child = ref)} title="Enter FirstName and LastName Here : "/>):''
                    }

                    <button onClick={this.showInputBox.bind(this)}>{(this.state.showInput)?'Hide Input Box':'Show Input Box'}</button>
                    <button onClick={this.onClick}>Child.method()</button>
                </div>
            </div>


            </React.Fragment>
        );
    }
}

export default Parent;