import React ,{useEffect, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import ProductsList from '../Components/ProductsList/ProductsList';
import Layout from '../Components/Layout/Layout';
import '../App.css'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
   
    const url = 'https://fakestoreapi.com/products';

    async function getProducts(){
      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false)
      } catch(error) {
        console.error('Error Fetching News', error)
      }
    }
    getProducts()

    return () => {
    //   console.log('Cleanup for data fetching');
    };
  }, []); 

  

  
  
  return (
    <Layout pageTitle={'Products from Fake Product Api'}>
        {loading ? <div className='loadingData'>
                 <p>Loading Data</p>
             </div> : 
            <div className='products-sec'>
                <h2>All Products</h2>
                <div className='products-list'>
                    {products.map((item, index) => {
                        return(
                        <ProductsList key={index} item={item} />
                        )
                    })}
                </div>
            </div>
            }
    </Layout>
    // <section className='wrapper'>
    //   <Header title={'Products from Fake Product Api'} />
    //   <main>
    //     <div className='container'>
    //         {loading ? <div className='loadingData'>
    //             <p>Loading Data</p>
    //         </div> : 
    //         <div className='products-sec'>
    //             <h2>All Products</h2>
    //             <div className='products-list'>
    //                 {products.map((item, index) => {
    //                     return(
    //                     <ProductsList key={index} item={item} />
    //                     )
    //                 })}
    //             </div>
    //         </div>
    //         }

          
    //     </div>
    //   </main>
      
    //   <Footer />
    // </section>
  )
}

export default Home;