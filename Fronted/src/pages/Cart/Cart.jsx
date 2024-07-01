// import React, { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import './Cart.css'

// const Cart = () => {

//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  
//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br/>
//         <hr/>
//         {food_list.map((item,index)=>{
//           if(cartItems[item._id]>0){
//             return (

//               <div> 

// <div className='cart-items-title cart-items-item'>
//                 <img src={item.image} alt=""/>
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{cartItems[item._id]}</p>
//                 <p>${item.price*cartItems[item._id]}</p>
//                 <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
//                 </div>
//                 <hr/>
//                 </div>
             
//             )
//           }
//         })}
       
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//         </div>
//         <div className="cart-total-details">
//           <p>SubTotal</p>

//           <p>{0}</p>
//         </div>
//         <hr/>
//         <div className="cart-total-details">
//           <p>Delivery Fee</p>
//           <p>{2}</p>
//         </div>
//         <hr/>
//         <div className="cart-total-details">
//           <b>Total</b>
//           <b>{0}</b>
//         </div>

//       </div>
//       <button>PROCEED TO CHECKOUT</button>
//     </div>
//     <div className="cart-promocode">
//       <div>
//         <p>if you have promo code,enter it here</p>
//       </div>
//     </div>
//   )
// }

// export default Cart


/* //////////////////////////    /*/
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate= useNavigate();
  
  return (
    <>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}> 
                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt=""/>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr/>
                </div>
              )
            }
            return null; // Added to avoid warnings about missing return statements in arrow functions
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
          </div>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className='cart-promocode-input'>
            <input type ="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;

