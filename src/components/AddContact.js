import React from 'react';
import { connect } from 'react-redux'
import { addContact, toggleModal } from '../actions'



//add contact form component
class AddContact extends React.Component{

  //managing input state with react cos of simplicity
    state = {
      name: '',
      phone: '',
      address: '',
      occupation: ''
    }
  
    handleInput = (e) => {
      switch (e.target.id) {
        case 'name':
          this.setState({ name: e.target.value });
          break;
        
        case 'phone':
          this.setState({ phone: e.target.value });
          break;

        case 'address':
          this.setState({ address: e.target.value });
          break;

        case 'occupation':
          this.setState({ occupation: e.target.value });
          break;
      
        default:
          alert('sorry, unknown field');
          break;
      }
    }
  
    handleSubmit = (e) => {
      if (this.state.name !== '' && this.state.phone !== '') {
      
      this.props.addContact(this.state);

      this.setState({ 
        name: '', 
        phone: '', 
        address: '', 
        occupation: '' 
      }); 

      this.props.toggleModal('none');
  
      }
      e.preventDefault();
    }

  
    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit} >

            <input type='text' placeholder='Contact name' onChange={this.handleInput} value={this.state.name}  className="form-control mb-2" id='name' />

            <input type='tel' placeholder='Phone number' onChange={this.handleInput} value={this.state.phone}  className="form-control mb-2" id='phone' />

            <div className='form-group form-inline'>
              <input type='text' placeholder='Address' onChange={this.handleInput} value={this.state.address}  className="form-control mb-2 col-sm-6 mr-sm-5" id='address' />

              <input type='text' placeholder='Occupation' onChange={this.handleInput} value={this.state.occupation}  className="form-control mb-2 col-sm-5 ml-1 pull-right" id='occupation' />
            </div>

            <button type='submit' className="btn btn-info col-sm-1 col-8 mt-sm-0 mt-2">Add</button>

          </form>
        </div>
      );
    }
}
  
  
//map our dipatch/action to component props
const mapDispatchToProps = {
  addContact,
  toggleModal
}


export default connect(null, mapDispatchToProps) (AddContact);