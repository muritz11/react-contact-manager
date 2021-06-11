import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


//contact list component
function PeopleList({ contacts }) {
    const arr = contacts;
    const listItem = 
    arr.map((val, index) =>
<Link to={`/view-contact/${ index }`} className='text-dark'><li key={index} className='list-group-item alert'>{val.name}: {val.phone}</li></Link>
    );

    return (
      <ul className='list-group'>
        {listItem}
      </ul>
    );
}


  
//map our app state to component props
function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}


export default connect(mapStateToProps) (PeopleList);

