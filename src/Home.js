import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img 
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
          <div className="home__row">
            <Product title='The lean startup' 
            price={29.99} image='https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201712/01/00106524174718____2__640x640.jpg'
            rating={5} />
            <Product />
          </div>
          <div className="home__row">
            <Product 
              id='4903850'
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/I/71Swqqe7XAL._AC_SX466_.jpg" 
            />
            <Product 
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
      </div>
    </div>
  )
}

export default Home
