import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'



//contact list component
function View(props) {

    const { id } = useParams();

    const cont = props.contacts[`${ id }`];
    // alert(cont);

    return (
        <div  className='text-left'>
            <div className='pl-5 jumbotron alert-info mb-2'>
                <i className='fa fa-vcard-o fa-5x'></i>
                <h2 className='mt-2'>{ cont.name }</h2>
            </div>
            <div className='card p-3 pl-5'>
                <h5><i className='fa fa-phone pr-2'></i> { cont.phone }</h5>
                <hr />
                <h5><i className='fa fa-map-marker pr-2'></i> { cont.address }</h5>
                <hr />
                <h5><i className='fa fa-briefcase pr-2'></i> { cont.occupation }</h5>
            </div>
        </div>
    );
}


//map our app state to component props
function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}


export default connect(mapStateToProps) (View);

