import React from 'react';
import Layout from '../components/layout/layout';


const HomePage=()=>{
    return (
        <Layout title={'My App'}>
            <div className='Screen-Img'>
              <img src='Images/crausel1.jpg' alt='Main Screen'/>
            </div>
        </Layout>
        );
}

export default HomePage;