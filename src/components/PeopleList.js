import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { toggleModal } from '../actions'


//contact list component
function PeopleList(props) {
    const arr = props.contacts;

    const listItem = 
    arr.map((val, index) =>
    <Link to={`/view-contact/${ index }`} className='text-dark'>
      <li key={ index } className='list-group-item alert'><h5>{val.name}<br /> {val.phone}</h5></li>
    </Link>
    );

    
    const handleModal = () => {
      props.toggleModal('block');
    }

    return (
      <div>
        
        <button className='my-btn alert alert-info' onClick={ handleModal }> 
          <h5><i className='fa fa-plus-circle'></i> Add contact</h5>
        </button>

        <ul className='list-group'>
          {listItem}
        </ul>
      </div>
      
    );
}


  
//map our app state to component props
function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}



//map our dipatch/action to component props
const mapDispatchToProps = {
  toggleModal
}


export default connect(mapStateToProps, mapDispatchToProps) (PeopleList);

