import React from 'react';
import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import AddContact from './AddContact';

function ModalForm(props) {
    
    const closeModal = (e) => {
        console.log(e.target.nodeName);
        if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'SPAN') {
            props.toggleModal('none');
        }
    }


    return (

        //  The Modal 
        <section id="myModal" className="modal" style={{ display: props.modal }} onClick={ closeModal }>

            {/* Modal content */}
            <div className="modal-content">

                <div className="modal-header">
                    <div className='row'>
                        <div className='col-10 text-center'>
                            <h4>Add new contact</h4>
                        </div>

                        <div className='col-2 text-right'>
                            <span className="close text-left" onClick={ closeModal }>&times;</span>
                        </div>
                    </div>
                </div>

                <div className="modal-body">
                    <AddContact />
                </div>

            </div>

        </section>

    );
}


//map our app state to component props
function mapStateToProps(state) {
    return {
      modal: state.modal
    }
}

//map our dipatch/action to component props
const mapDispatchToProps = {
    toggleModal
}


const connModal = connect(mapStateToProps, mapDispatchToProps) (ModalForm);

export default connModal;