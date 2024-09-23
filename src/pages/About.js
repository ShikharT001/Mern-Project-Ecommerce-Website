import React from 'react';
import Layout from '../components/layout/layout';


const About=()=>{
    return (
        <Layout title={"About US-MyApp"}>
            <div className='row'>
            <h1 style={{textAlign:"center"}}>About us</h1>
            <div className='col-md-6'>
            {/* <img src="Images/Ecomm1.png" alt="aboutus"/> */}
            <img className='img-fluid d-none d-md-block img-responsive' src='Images/Ecomm1.png' alt='Main Screen'/> {/*Mobile devices */}
             
            <img className='img-fluid d-block d-md-none img-responsive' src='Images/Ecomm2.png' alt='Main Screen'/> {/*Desktop devices */}
            </div>
            <div className='col-md-6 d-flex align-items-center'>
            <p className='content'>Welcome to our website. We are a team of
                passionate individuals who are dedicated to providing the best
                experience for our customers. Our mission is to make online shopping
                easy, fun and rewarding. We strive to provide the best products at
                competitive prices, with excellent customer service and fast shipping.
            </p>
                </div>
            </div>
        </Layout>
        );
}

export default About;