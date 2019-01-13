import React, {Component} from 'react';

class Refdomexample extends Component {
    constructor(props){
        super(props);

        const divStyle = {
            margin: '40px',
            border: '5px solid red'
        };

    }

    submitFiled = () => {
        console.log("job done fileds submitted successfuly");
        this.firstname.value = '';
        this.lastname.value = '';
        this.age.value = '';
        console.log("Reenter filed values");
    }
    onKeyUpHandel = (target , e) => {
        /*console.log(e.keyCode);*/
        if(e.keyCode === 13){

            switch (target) {
                case 'firstname':
                    this.lastname.focus();
                    break;
                case 'lastname':
                    this.age.focus();
                    break;
                case 'age':
                    this.submit.focus();
                    break;
                default:
                    this.firstname.focus();

            }
        }
    }

    render() {
        const { title } = this.props;
        return (
            <div style={this.divStyle}>
                <h1>{title}</h1>
                <label style={{color:"blue"}}> Firstname: </label>
                <input
                    type="text"
                    ref={ (input) => { this.firstname = input } }
                    onKeyUp={this.onKeyUpHandel.bind(this , 'firstname')}
                />
                <br/><br/>
                <label style={{color:"blue"}}> Lastname: </label>
                <input
                    type="text"
                    ref={ (input) => { this.lastname = input } }
                    onKeyUp={this.onKeyUpHandel.bind(this , 'lastname')}
                />
                <br/><br/>
                <label style={{color:"blue"}}> Age: </label>
                <input
                    type="text"
                    ref={ (input) => { this.age = input } }
                    onKeyUp={this.onKeyUpHandel.bind(this , 'age')}
                />
                <br/><br/>

                <input
                    type="submit"
                    value="submit"
                    ref={ (input) => { this.submit = input } }
                    onKeyUp={this.onKeyUpHandel.bind(this , 'submit')}
                    onClick={this.submitFiled}
                />
            </div>
        );
    }
}

export default Refdomexample;