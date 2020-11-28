import React from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
            <Link to='/checkout'>{basket?.length} items</Link>
            )
        </h1>

        {/* delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Granada, SPAIN</p>
          </div>
        </div>

        {/* review items */}
        <div className='payment__section'>
        <div className='payment__title'>
          <h3>Review items and delivery</h3>
         </div> 
         <div className='payment_items'>
           {basket.map(item => (
             <CheckoutProduct 
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
             />
           ))}
         </div>
        </div>

        {/* payment method */}
        <div className='payment__section'>
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
              {/* stripe */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
