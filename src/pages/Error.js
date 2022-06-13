import React from 'react'
import ErrorBackground from '../assets/Error.jpg'
import '../style/Error.css';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <Navbar/>
            <div className='indexError' style={{ backgroundImage: `url(${ErrorBackground})`}}>
                <center>
                <h1>This page is Under Construction</h1>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
                </center>
            </div>
        <Footer/>
    </div>
  )
}

export default Error