import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { toggleModal } from '../actions'


//header component
function Header(props) {

    const handleModal = () => {
        props.toggleModal('block');
    }

    return (
      <div>
            <div className="jumbotron">
                <Link to='/' className='text-dark'><h3>Contact manager</h3></Link>
                
            </div>
      </div>
    );
}

  
//map our dipatch/action to component props
const mapDispatchToProps = {
    toggleModal
}


export default connect(null, mapDispatchToProps) (Header);