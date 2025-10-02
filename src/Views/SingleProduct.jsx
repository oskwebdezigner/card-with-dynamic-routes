import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import '../App.css'


const SingleProduct = () => {
    const location = useLocation();
  const { item } = location.state;

  console.log('Yeh agaya',item);
  return (
    <Layout pageTitle={item.title ? item.title : 'Single Product Page'}>
        <div className='product-top'>
                 <div className='product-img'>
                     <img src={item.image} />
                 </div>
                 <div className='product-cont'>
                     <h1>{item.title}</h1>
                     <div className='product-price'>
                         <strong>${item.price}</strong>
                     </div>
                     <div className='product-rating'>
                         <span>Rating: </span> <strong>{item.rating.rate}</strong> out of <strong>{item.rating.count}</strong>
                     </div>
                     <p>{item.description}</p>
                     <p className='product-cat'><span>Category: </span><strong>{item.category}</strong></p>
                 </div>
             </div>
    </Layout>
  )
}

export default SingleProduct;