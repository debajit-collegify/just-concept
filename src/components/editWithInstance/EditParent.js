import React, {Component} from 'react';


import EditChild from './EditChild';

import './../../App.css';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showInput : false,
            btnTxt: 'Show Input Box',
            childFname : '',
            childLname: '',
            myprop : '',
            editFlag: ''
        }

    }


    /*showInputBox = () => {
        this.setState({showInput : !this.state.showInput , btnTxt : 'Hide Input Box'});
        // this.child.method();
    }*/

    showComponent = (arg) => {
        if(arg === 'fname'){
            this.setState({ myprop: this.state.childFname , showInput : !this.state.showInput ,  editFlag: 'fname'});
        }else if(arg === 'lname'){
            this.setState({ myprop: this.state.childLname , showInput : !this.state.showInput , editFlag: 'lname' });
        }else{
            this.setState({showInput : !this.state.showInput});
        }

    }

    handelSubmitChildComponent = () => {

        if(this.state.editFlag === 'fname'){
            this.setState({
                showInput : !this.state.showInput,
                childFname : this.child.state.userName
            });

        }else if(this.state.editFlag === 'lname'){
            this.setState({
                showInput : !this.state.showInput,
                childLname : this.child.state.userName
            });

        }else{
            this.setState({
                showInput : !this.state.showInput
            });
        }




    }

    render() {
        //var parentThis = this;

        //console.log(parentThis.state);
        return (
            <React.Fragment>
                <div>
                    <div className="parent-div">
                        <p>FirstName : {this.state.childFname}  <button onClick={this.showComponent.bind(this , 'fname')}>Edit FirstName</button></p>
                        <p>LastName :  {this.state.childLname} <button onClick={this.showComponent.bind(this , 'lname')} >Edit LastName</button></p>
                        <button onClick={this.handelSubmitChildComponent.bind(this)}>Submit</button>
                    </div>
                    <div className="container-child">


                        {
                            (this.state.showInput)?
                                (<EditChild data={this.state.myprop} onRef={ref => (this.child = ref)} title="Edit Your Name Here : "/>):''
                        }


                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default Parent;