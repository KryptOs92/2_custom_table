import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class MyForm extends Component {
   /* constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}*/


RawValues(name, sex ){
    this.name = name;
    this.sex= sex
}

constructor(props) {
    super(props);
    this.state = {name: '',
                  sex: '',
                  rawsValues: []};
    this.handleChange = this.handleChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 /* refreshRawsValues(){
    this.rawsValues.push()
  }*/

  handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
     
  }

 

  handleSubmit(event) {
    console.log(this.state.name);
    console.log(this.state.sex);
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Sex:
          <input type="text" name="sex" value={this.state.sex} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}
export default MyForm;