import React from 'react'
import ErrorBackground from '../assets/Error.jpg'
import Layout from '../layout/Layout';
import '../style/Error.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <Layout>
            <div className='indexError' style={{ backgroundImage: `url(${ErrorBackground})`}}>
                <center>
                <h1>This page is Under Construction</h1>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
                </center>
            </div>
        </Layout>
    </div>
  )
}

export default Error