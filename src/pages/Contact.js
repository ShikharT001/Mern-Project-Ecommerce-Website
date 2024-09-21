import React from 'react';
import Layout from '../components/layout/layout';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import { FaPhone,FaBlenderPhone } from "react-icons/fa6";

const Contact=()=>{
    return (
        <Layout>
            <div className='row contactus'>
            <div className='col-md-6'>
                <img src='Images/Contactus.jpg'
                alt='Conatct Us'
                style={{width:"100%"}}/>
            </div>
            <div className='col-md-4 Contactusform'>
                <h2 className='bg-dark p-2 text-white text-center rounded'>Contact Us</h2>
                <p className='text-justify mt-2'>Any Query Feel Free To Contact Us</p>
                <p className='mt-3'>
                    <MdOutlineAlternateEmail/> : EcommerceYourMailId@Email.com
                </p>
                <p className='mt-3'>
                    <FaPhone/> : 90XXXXXX11
                </p>
                
                <p className='mt-3'>
                    <FaBlenderPhone/> : 1800-0000-0000 (Toll Free)
                </p>
            </div>
            </div>
        </Layout>
        );
}

export default Contact;