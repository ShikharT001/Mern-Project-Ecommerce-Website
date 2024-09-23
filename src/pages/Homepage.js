import React from 'react';
import Layout from '../components/layout/layout';
import '../../src/styles/pages.css';
import { useAuth } from '../components/context/auth';

const HomePage=()=>{
  const [auth,setauth] = useAuth()
  // console.log(auth)
    return (
        <Layout title={'My App'}>
            <div>
              <img className='img-fluid d-none d-md-block img-responsive' src='Images/crausel1.jpg' alt='Main Screen'/> {/*Mobile devices */}
             
              <img className='img-fluid d-block d-md-none img-responsive' src='Images/Md-HomeScreen.png' alt='Main Screen'/> {/*Desktop devices */}
            </div>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
        );
}

export default HomePage;