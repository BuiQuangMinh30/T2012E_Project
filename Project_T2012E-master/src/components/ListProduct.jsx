import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard';

const ListProduct = () => {
     const [products, setProducts] = useState([]);
     useEffect(()=>{
          const fetchData = async () =>{
               const data = await axios.get('https://elevatorsystemdashboard.azurewebsites.net/api/Elevators');
               // console.log('data', data.data)
               if(data.status == 200){
                    setProducts(data.data);
               }else{
                    alert('loi')
               }
               
          }
          fetchData();
     },[]);
     console.log('props', products);
  return (
    <>
     {/* <ProductCard products={products}/> */}
     
    </>
  )
}

export default ListProduct