import React, {Component} from 'react';
import '../App.css';

class RefInstanceParent extends React.Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {
                nameA: '',
	            nameB: ''
        }

    }
update = () => {
	this.setState({nameA: this.a.value , nameB: this.refs.b.value});
}
    

componentDidMount(){
    console.log(" component Did Mount");
}

    render() {
        console.log("Render");
        const { title } = this.props;
        return (
	     
            <div>
            
            <h2>{title}</h2>
            <hr/>

              <input type="text"
		onChange={this.update.bind(this)}
		ref = { node => this.a = node} />{this.state.nameA}
	      <hr/>
	      <input type="text"
		onChange={this.update.bind(this)}
		ref="b" />{this.state.nameB}
		<hr/>

            </div>
	
        );
    }
}

export default RefInstanceParent;
