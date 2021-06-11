import React from 'react';
import { connect } from 'react-redux'
import { addContact } from '../actions'



//add contact form component
class AddContact extends React.Component{

  //managing input state with react cos of simplicity
    state = {
      newPerson: '',
      phone: '',
      addr: '',
      occp: ''
    }
  
    handleInput = (e, type) => {
      switch (type) {
        case 'name':
          this.setState({ newPerson: e.target.value });
          break;
        
        case 'phone':
          this.setState({ phone: e.target.value });
          break;

        case 'addr':
          this.setState({ addr: e.target.value });
          break;

        case 'occp':
          this.setState({ occp: e.target.value });
          break;
      
        default:
          alert('sorry, unknown field');
          break;
      }
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
        <div>
          <form onSubmit={this.handleSubmit} >

            <input type='text' placeholder='Contact name' onChange={this.handleInput} value={this.state.newPerson}  className="form-control mb-2" />

            <input type='text' placeholder='Phone number' onChange={this.handleInput} value={this.state.newPerson}  className="form-control mb-2" />

            <div className='form-group form-inline'>
              <input type='text' placeholder='Address' onChange={this.handleInput} value={this.state.newPerson}  className="form-control mb-2 col-6 mr-sm-5 mr-4" />

              <input type='text' placeholder='Occupation' onChange={this.handleInput} value={this.state.newPerson}  className="form-control mb-2 col-5 ml-1 pull-right" />
            </div>

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