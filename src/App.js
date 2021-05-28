
import React, { useState } from 'react';
import './App.css';


const contacts = ['maurice', 'lil sis', 'mum', 'A chigozie'];

function App() {


  return (
    <div className="App">
      <ContactManager data={contacts} />
    </div>
  );

}



//a contact manager functional component
function ContactManager(props) {
  
  const [contacts, setContacts] = useState(props.data);

  function addContact(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div className='p-4'>
      <AddContact submitHandler={addContact} />
      <PeopleList data={contacts}/>
    </div>
  );

}





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

    this.props.submitHandler(this.state.newPerson);
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



function PeopleList(props) {
  const arr = props.data;
  const listItem = 
    arr.map((val, index) =>
    <li key={index} className='list-group-item alert'>{val}</li>
  );

return <ul className='list-group'>{listItem}</ul>
}




//contact list component
//for some reason d state was updating with the new list items
//so switching over to functional component

//sh*t a'int over yet, i must figure how to do this with class component

// class ContactList extends React.Component{

//   state = {
//     // arr: this.props.data,
//     listItem: this.props.data.map((val, index) =>
//       <li key={index}>{val}</li>
//      )
//   }

  
//   render(){

  
//     console.log('component did update');  
//     return (
//       <div>
//         <ul>
//           { this.state.listItem }
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
