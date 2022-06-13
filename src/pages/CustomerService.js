import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import backgroundCS from '../assets/backgroundCS.png';
import admin from '../assets/admin.png';
import asker from '../assets/asker.png';
import Avatar from '@mui/material/Avatar';
import '../style/CustomerService.css';
import { Link } from 'react-router-dom';

function CustomerService() {
  return (
    <div>
        <Navbar/>
        <div className='customerService' style={{ backgroundImage: `url(${backgroundCS})`}}>
          <h1 className='contactUs'>Contact Us</h1>
          <div className='csBox'>
            <center><Avatar alt="" src={admin} sx={{ width: 56, height: 56 }}/></center>
            <h1>Talk to a member of our service team</h1>
            <p>We will help you with any obstacle you faced</p>
            <center><Link to="/error">
            <button>Contact Customer Service</button>
            </Link></center>
          </div>

          <div className='csBox'>
            <center><Avatar alt="" src={asker} sx={{ width: 56, height: 56 }}/></center>
            <h1>Frequently Asked Questions</h1>
            <p>You are not the only one who asking this, take a look the answer for your questions</p>
            <center><Link to="/error">
            <button>Go to Help Center</button>
            </Link></center>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CustomerService