import React from 'react';
import Layout from '../components/layout/layout';
import '../../src/styles/pages.css';
// import { useAuth } from '../components/context/auth';

const HomePage=()=>{
  // const [auth,setauth] = useAuth()
  // console.log(auth)
    return (
        <Layout title={'My App'}>
            <div>
              <div className='banner'>
              <img className='img-fluid d-none d-md-block img-responsive' src='Images/Freshly.png' alt='Main Screen'/> {/*Mobile devices */}
             

              <img className='img-fluid d-block d-md-none img-responsive' src='Images/Md-HomeScreen.png' alt='Main Screen'/> {/*Desktop devices */}
              </div>
            </div>
            {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
            {/* <div className="container">{input}</div> */}
           
        </Layout>
        );
}

export default HomePage;