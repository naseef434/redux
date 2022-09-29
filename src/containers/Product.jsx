import React from 'react'
import { useSelector } from 'react-redux'

export default function Product() {
    const products  = useSelector((state) => state)
    console.log(products);
  return (
    <div>Product</div>
  )
}
