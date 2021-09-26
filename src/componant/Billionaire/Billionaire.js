import React from 'react';
import './Billionaire.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Billionaire = (props) => {
   
    const {img , name, age, source ,netWorth,country, donation} =props.billionaire
    const cartPlus = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className ="billionaire">
            <img src={img} alt="" />
            <h3>Name : <small>{name}</small></h3>
            <h3>Age : <small>{age}</small> </h3>
            <h3>Net Worth : <small> ${netWorth} B</small></h3>
            <h3> Sourse : <small>{source}</small></h3>
            <h3>Donation : <small>${donation} M</small> </h3>
            <h3>Country : <small>{country}</small> </h3>
            <button
            onClick ={()=>props.handelcart(props.billionaire)}
             className='regular-btn'>{cartPlus}
              Add to cart</button>

        </div>
    );
};

export default Billionaire;