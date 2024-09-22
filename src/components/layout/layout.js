import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import {Toaster} from "react-hot-toast";
const Layout=({children,title,author,description,keywords})=>{                 /*Or use  const Layout=({childern})=>{ then you dont have to write {porps.children}directly write {childern} */
    return (
        <div>
            <Helmet>
                <meta charSet='UTF-8'/>
                <meta name='description' content={description}/>
                <meta name='author' content={author}/>
                <meta name='keywords' content={keywords}/>
                <title>{title}</title>
            </Helmet>
           
            <Header/>
            <main style={{minHeight:'70vh'}}>
            <Toaster/>
                {children}
            </main>   
            <Footer/>   
        </div>
    )
}

// For our Layout fn if we doesnt have some arg to pass like desc,author then we can give default values in them
Layout.defaultProps={
    title:'Ecommerce App -Freshly',
    author:'Shikhar tiwari',
    description:'This is ecommerce app',
    keywords:'mongo,nodejs,react,expressjs',
}

export default Layout;