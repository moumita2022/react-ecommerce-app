import React,{useState,useContext,useEffect,useCallback} from 'react'
import { MyContext } from '../ContextAPI/context'

export default function Cart() {
  const{state,dispatch}=useContext(MyContext);
  const [total,setTotal] =useState(0)

  useEffect(()=>{
    const sum =state.cart.reduce((acc,item)=>{
      acc+=item.price*item.quantity
      return acc
    },0)
    setTotal(sum)
  },[state.cart])


  /* const incrementQuantity=(product)=>{
    product.quantity++;
    setCart([...cart]) // re-render
  }
  const decrementQuantity=(product)=>{
    product.quantity--;
    setCart([...cart]) // re-render
  }
  const deleteItemFromCart=(product)=>{
    setCart(cart.filter(elem=>elem.id !==product.id))
  }
 */

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {state.cart.map((product,index)=>{
          return(
            <div key={index} style={{display:"flex"}}>
              <div>
                <img src={product.image} width="100" height="100" alt="" /></div>
              <div style={{width:"200px"}}>
                <h3>{product.title}</h3>
                <p> ${product.price}</p>
                
                </div>
                <div style={{width:"200px"}}>
                  <button onClick={()=>dispatch({type:"incrementQuantity",payload:product})}> + </button>
                <p>{product.quantity}</p>
                <button disabled={product.quantity===1} onClick={()=>dispatch({type:"decrementQuantity",payload:product})}> - </button>
                </div>
                <div style={{width:"200px"}}>
                  <button onClick={()=>dispatch({type:"deleteProduct",payload:product})}>delete item</button>
                </div>
            </div>
          )
        })}
      </div>
      <div>
       <h1>Total:{total.toFixed(2)}</h1> 
      </div>
    </div>
  )
}
