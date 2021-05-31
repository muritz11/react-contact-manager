import React from 'react';
import { connect } from 'react-redux'


//contact list component
function PeopleList({ contacts }) {
    const arr = contacts;
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



  
//map our app state to component props
function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}


export default connect(mapStateToProps) (PeopleList);

