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
            <Product title='The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
            price={29.99} image='https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201712/01/00106524174718____2__640x640.jpg'
            rating={5} />
            <Product 
              id="34029340"
              title="Apple Watch Serie 4" 
              price={339}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51k-vKS4AOL._AC_SX466_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
              id='4903850'
              title="Kitchen AID machine"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/61kX%2BpmYnqL._AC_SL1000_.jpg" 
            />
            <Product 
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
              id=""
              title="New Apple iPad 12.5' "
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
              id="90829332"
              title="Samsung LC49RG90 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
      </div>
    </div>
  )
}

export default Home
