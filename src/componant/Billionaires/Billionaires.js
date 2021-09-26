import React, { useEffect, useState } from 'react';
import Billionaire from '../Billionaire/Billionaire';
import Cart from '../Cart/Cart';
import './Billionaires.css'

const Billionaires = () => {
    const [billionaires ,setbillionaires] = useState([]);
    const [cart , setcart] =useState([])
    useEffect(()=>{
        fetch('./billionslist.json')
        .then(res=>res.json())
        .then(data=>setbillionaires(data))
    },[])
    // handelcart
    const handelcart = (billionaire)=>{
        const newcart =[...cart , billionaire]
        setcart(newcart)
    }
    return (
        <div className='billonaires-container'>
        <div className='billionslist-container'>
        
         {
             billionaires.map(billionaire=> <Billionaire handelcart={handelcart} key={billionaire.key} billionaire ={billionaire}></Billionaire> )
         }
        </div>

        <div className='cart-container'>
         <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Billionaires;