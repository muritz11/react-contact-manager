import React from 'react';
import { connect } from 'react-redux'
import { addContact } from '../actions'



//add contact form component
class AddContact extends React.Component{

    state = {
      newPerson: ''
    }
  
    handleInput = (e) => {
      this.setState({ newPerson: e.target.value });
    }
  
    handleSubmit = (e) => {
      if (this.state.newPerson !== '') {
  
      this.props.addContact(this.state.newPerson);
      this.setState({ newPerson: '' }); 
  
      }
      e.preventDefault();
    }
  
    render(){
      return (
        <div className="jumbotron pb-4">
          <h3>Contact manager</h3>
  
          <form onSubmit={this.handleSubmit} className='form-inline ml-sm-5 mt-5'>
          <input type='text' placeholder='Add new contact' onChange={this.handleInput} value={this.state.newPerson}  className="form-control col-sm-8 mr-3" />
          <button type='submit' className="btn btn-info col-sm-1 col-8 mt-sm-0 mt-2">Add</button>
          </form>
        </div>
      );
    }
}
  
  
//map our dipatch/action to component props
const mapDispatchToProps = {
    addContact
}


export default connect(null, mapDispatchToProps) (AddContact);