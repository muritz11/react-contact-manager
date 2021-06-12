import React from 'react';
import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import AddContact from './AddContact';

function ModalForm(props) {
    
    const closeModal = (e) => {
        if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'SPAN') {
            //just remember never to use anyother section or span elem in d modal
            props.toggleModal('none');
        }
    }


    return (

        //  The Modal 
        <section id="myModal" className="modal" style={{ display: props.modal }} onClick={ closeModal }>

            {/* Modal content */}
            <div className="modal-content">

                <div className="modal-header">
                    <div className='text-right'>
                        <span className="close" onClick={ closeModal }>&times;</span>
                    </div>

                    <div className='text-left'>
                        <h4>Add new contact</h4>
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