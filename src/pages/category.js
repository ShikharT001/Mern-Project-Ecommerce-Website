import React from 'react';
import Layout from '../components/layout/layout';


const Category=()=>{
    return (
        <Layout title={"Category US-MyApp"}>
<main className="container py-5">
  {/* Banner Section */}
  <section className="text-center mb-5">
    <h1 className="display-4 fw-bold">Discover Our Fresh Fruit Categories</h1>
    <p className="lead">Choose from a variety of fresh, seasonal, and exotic fruits tailored to your taste.</p>
  </section>
  {/* Categories Grid */}
  <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    <div className="col">
      <div className="card h-100 shadow-sm">
      <img src="https://th.bing.com/th/id/R.517aca2a65ebdb191e6f7de2dc3a42f1?rik=hksE2fjwuhX70g&riu=http%3a%2f%2fwww.onewheaton.com%2funtold%2fwp-content%2fuploads%2f2015%2f02%2fapples2.jpg&ehk=46CMLUj0sQwwMwRpDJAwl8EGzCBAHgfZfUoYIKlMwOo%3d&risl=&pid=ImgRaw&r=0" alt="Apples" />
        <div className="card-body text-center">
          <h5 className="card-title">Apples</h5>
          <p className="card-text">Crisp and delicious, perfect for snacking.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 shadow-sm">
      <img src="https://th.bing.com/th/id/R.556937069c339cbfea8ad91ac54c0570?rik=a%2b9w5qWH1lM4rA&riu=http%3a%2f%2fpamsdailydish.com%2fwp-content%2fuploads%2f2015%2f04%2fBunch-Bananas-2.jpg&ehk=58pOED6p9l77ndP7z29CEym%2fTOahIZDhj2qd4Pj8dz8%3d&risl=&pid=ImgRaw&r=0" alt="Bananas" />
        <div className="card-body text-center">
          <h5 className="card-title">Bananas</h5>
          <p className="card-text">Rich in potassium and energy-boosting.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 shadow-sm">
      <img src="https://www.pngitem.com/pimgs/m/42-427313_single-fruits-and-vegetables-hd-png-download.png" alt="Berries" />
        <div className="card-body text-center">
          <h5 className="card-title">Berries</h5>
          <p className="card-text">Juicy, sweet, and full of antioxidants.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 shadow-sm">
      <img src="https://www.thespruce.com/thmb/5XxUU3dU1t93gBPod13qFPgEIqA=/3317x2502/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-746088839-5b972085c9e77c002c0df27d.jpg" alt="Citrus" />
        <div className="card-body text-center">
          <h5 className="card-title">Citrus</h5>
          <p className="card-text">Fresh, tangy, and packed with Vitamin C.</p>
        </div>
      </div>
    </div>
  </section>
</main>

        </Layout>
        );
}

export default Category;