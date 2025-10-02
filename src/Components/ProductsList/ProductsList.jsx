import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import style from './ProductList.module.css';


const ProductsList = (props) => {

    const {item} = props;
    const shortDesc = item.description.slice(0,80);
    
  return (
    <Link to={`products/${item.id}`} state={{item}}  className={style.singleProduct}>
        <div className={style.productImg}>
            <img src={item.image} />
        </div>
        <div className={style.productCont}>
            <div className={style.productMisc}>
                <span><strong className={style.rating}>{item.category}</strong></span>
                <span>Rating: <strong className={style.rating}>{item.rating.rate}</strong> out of <strong className={style.outOf}>{item.rating.count}</strong></span>
            </div>
            <h3>{item.title}</h3>
            <p>{shortDesc}</p>
            <div className='product-addCart'>
                <strong className={style.rating}>{'$'+item.price}</strong>
            </div>
        </div>
    </Link>
  )
}

export default ProductsList