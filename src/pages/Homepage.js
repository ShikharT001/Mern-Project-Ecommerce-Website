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
           <main className="home-container">
  <section className="hero-section">
    <div className="hero-text">
      <h1>Welcome to <span className="highlight">Freshly</span></h1>
      <p>Experience the joy of fresh, handpicked fruits delivered straight to your doorstep.</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
    <div className="hero-image">
      <img src="https://th.bing.com/th/id/R.171469519d57e63bf0cb18c3257797e3?rik=Rs1FirAHPKiyXA&riu=http%3a%2f%2fbaltana.com%2ffiles%2fwallpapers-2%2fFruit-HD-Wallpapers-03484.jpg&ehk=vCkyvMr8GDHyj4WOqKHz1Tz91y4XEOUinujHPnA5gYw%3d&risl=&pid=ImgRaw&r=0" alt="Fresh Fruits" />
    </div>
  </section>
  <section className="categories" id="category">
    <h2>Explore Our Categories</h2>
    <div className="category-cards">
      <div className="card">
        <img src="https://th.bing.com/th/id/R.517aca2a65ebdb191e6f7de2dc3a42f1?rik=hksE2fjwuhX70g&riu=http%3a%2f%2fwww.onewheaton.com%2funtold%2fwp-content%2fuploads%2f2015%2f02%2fapples2.jpg&ehk=46CMLUj0sQwwMwRpDJAwl8EGzCBAHgfZfUoYIKlMwOo%3d&risl=&pid=ImgRaw&r=0" alt="Apples" />
        <h3>Apples</h3>
      </div>
      <div className="card">
        <img src="https://th.bing.com/th/id/R.556937069c339cbfea8ad91ac54c0570?rik=a%2b9w5qWH1lM4rA&riu=http%3a%2f%2fpamsdailydish.com%2fwp-content%2fuploads%2f2015%2f04%2fBunch-Bananas-2.jpg&ehk=58pOED6p9l77ndP7z29CEym%2fTOahIZDhj2qd4Pj8dz8%3d&risl=&pid=ImgRaw&r=0" alt="Bananas" />
        <h3>Bananas</h3>
      </div>
      <div className="card">
        <img src="https://www.pngitem.com/pimgs/m/42-427313_single-fruits-and-vegetables-hd-png-download.png" alt="Berries" />
        <h3>Berries</h3>
      </div>
      <div className="card">
        <img src="https://www.thespruce.com/thmb/5XxUU3dU1t93gBPod13qFPgEIqA=/3317x2502/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-746088839-5b972085c9e77c002c0df27d.jpg" alt="Citrus" />
        <h3>Citrus</h3>
      </div>
    </div>
  </section>
  <section className="about-us">
    <h2>Why Choose Freshly?</h2>
    <p>At Freshly, our mission is to provide you with the freshest and most delicious fruits, handpicked with care. We believe that the key to great taste lies in quality, which is why we partner with trusted farms that prioritize sustainable practices and high standards. Each fruit is carefully selected to ensure it meets our commitment to excellence, delivering a burst of flavor in every bite.</p>

<p>From orchard to your doorstep, we ensure every piece of fruit is handled with the utmost care. Whether you’re enjoying a crisp apple, a juicy orange, or a bowl of sweet berries, you can trust that Freshly brings you only the best nature has to offer. With us, freshness isn't just a promise; it's our way of life.</p>
    <div className="features">
      <div className="feature">
        <h3>Freshly Picked</h3>
        <img src="https://harlandgreen.com/wp-content/uploads/harland-green-image-1.png" height="200px" width="200px" alt="imag"/>
        <p>We pick fruits at the peak of ripeness for the best taste.</p>
      </div>
      <div className="feature">
        <h3>Doorstep Delivery</h3>
        <img src="https://img.freepik.com/premium-photo/happy-delivery-man-doorstep_834602-68589.jpg" height="200px" width="200px" alt="door-step"/>
        <p>Convenient delivery directly to your home.</p>
      </div>
      <div className="feature">
        <h3>Wide Variety</h3>
        <img src="https://media.istockphoto.com/photos/variety-of-fruits-picture-id962298666?k=6&m=962298666&s=170667a&w=0&h=Vh8pFhVucaCcQwoYrj3RyUOgn1f7yNEEkULHaqztdRU=" height="200px" width="200px" alt="variety"/>
        <p>Choose from a range of seasonal and exotic fruits.</p>
      </div>
    </div>
  </section>
</main>

           
        </Layout>
        );
}

export default HomePage;