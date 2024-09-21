import React from 'react';
import Header from './header';
import Footer from './footer';
const Layout=(porps)=>{                 /*Or use  const Layout=({childern})=>{ then you dont have to write {porps.children}directly write {childern} */
    return (
        <div>
            <Header/>
            <main style={{minHeight:'70vh'}}>
                {porps.children}
            </main>   
            <Footer/>   
        </div>
    )
}

export default Layout;