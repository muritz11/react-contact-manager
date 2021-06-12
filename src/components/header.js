import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


//header component
export default function Header() {


    return (
      <div>
            <div className="jumbotron">
                <Link to='/' className='text-dark'><h3>Contact manager</h3></Link>
            </div>
      </div>
    );
}