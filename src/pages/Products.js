import React, { useEffect, useContext /* , useState */ } from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { MyContext } from "../ContextAPI/context";

export default function Products() {
  const { state, dispatch } = useContext(MyContext);
  /* const [data, setData] = useState([]);
  cart [cart,setCart]=useState([]); */

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: "products", payload: result });
        /* console.log(result);
        setProducts(
          result
        ); (result.map(product=>(<div key={product.id}>{product.title}</div>))) */
      });
  }, []);

  /* const addToCart=(product)=>{
 /*    console.log(product); 
 let copyProduct={...product}
let foundItem = state.cart.find(elem=>elem.id===copyProduct.id) // we can also use".some"

if(foundItem){
  foundItem.quantity++;
  setCart([...cart])
}else{
  copyProduct.quantity=1
;
setCart([...cart,copyProduct])
}
  }
 console.log("products page render...."); 
*/
  return (
    <div>
      <h1>Products Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.products.map((product,index) => {
          return (
            <div key={index}
              style={{
                width: "300px",
                boxShadow: "2px 1px 5px gray",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                border: "2px solid grey",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <NavLink to={`/products/${product.id}`} state={product}>
                <img src={product.image} width="200" height="250" alt="" />
              </NavLink>
              <h3 style={{ width: "90%", textAlign: "center" }}>
                {product.title}
              </h3>
              <h3>$ {product.price}</h3>
              <ReactStars
                count={5}
                value={product.rating.rate}
                activeColor={"yellow"}
                isHalf={true}
                size={24}
                edit={false}
              />
              <button
                onClick={() =>
                  dispatch({ type: "addtocart", payload: product })
                }
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
