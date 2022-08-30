import React,{useState,useReducer} from "react";
import { MyContext } from "./context";
import reducer,{initialState} from "./reducer"


export default function Container({ children }) {
    const [state, dispatch] = useReducer(reducer,initialState)

  /*  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
 const [isLogin,setIsLogin]=useState(false) */
  return (
    <MyContext.Provider
      value = {{state,dispatch}}>
      {children}
    </MyContext.Provider>
  );
}
