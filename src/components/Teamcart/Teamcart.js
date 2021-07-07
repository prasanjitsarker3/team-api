import React from 'react';
import './Teamcart.css';

const Teamcart = (props) => {
      const cart = props.cart;
      let totalAbout = 0;
      for (let i = 0; i < cart.length; i++) {
          const football = cart[i];
          totalAbout = totalAbout + football.name +"  " + football.city +"||" ; 
          
      }
     
      
    return (
        <div className="team-cart">
            <h1>This is Teamcart:{cart.length}</h1>
            
            <p>{totalAbout}</p>
        </div>
    );
};

export default Teamcart;
