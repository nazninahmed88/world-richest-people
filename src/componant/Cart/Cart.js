import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const add = <FontAwesomeIcon icon={faUserPlus} />
    const {cart}=props;
    let total=0;
    for(const person of cart){
        total=total+person.donation;
      
    }
  
    return (
        <div className='cart'>
             <h2>{add} Person : {props.cart.length}</h2> 
                
                <h3>Total Donation : {total.toFixed(2)}</h3>
                <h2> Name:{props.name} </h2>
     
                {
                    cart.map((billionaire,index)=><li key={`${billionaire.key}_${index}`}>{billionaire.name} </li>)
                }
        </div>
    );
};

export default Cart;