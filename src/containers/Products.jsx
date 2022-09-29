
import ProductComponent from './ProductComponent';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'
export default function Products() {
   
    const products = useSelector((state) => state.allProducts.products)
    // const {id,title} = products[0]
    const dispatch =  useDispatch()
    const fetchProducts = async() =>{
        const response  = await axios.get("https://fakestoreapi.com/products").catch(()=>{console.log("could not find api");})
       
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
     
      fetchProducts()
    }, [])
    console.log(products);
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}
