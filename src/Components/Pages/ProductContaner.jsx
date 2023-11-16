import React, { useContext, useEffect } from "react";
import ProductCart from "./ProductCart";
import ProductContext from "../context/product/ProductContext";
import { fetchProducts } from "../context/product/ProductAction";

const ProductContaner = () => {
  const { products, dispatch } = useContext(ProductContext);

  // console.log(products)

  const getData = async()=>{
    const data = await fetchProducts()
    dispatch({
      type:"GET_PRODUCTS",
      payload:data,
    })
  }

  useEffect(()=>{
    getData()
  },[])

  if(!products || products.length === 0){
    return(
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    )
  }

  return (
    <>
      <div className="container">
      
        <h1 className="all-products-title">All Products</h1>
        {
          products.map((item)=>(<ProductCart key={item.id} item={item} />))
        }
        {/* <ProductCart/> */}
      </div>
    </>
  );
};

export default ProductContaner;
