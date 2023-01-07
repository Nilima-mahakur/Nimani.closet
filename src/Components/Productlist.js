import Footer from './Footer';
import './Product.css';

function Productlist ({product, addToCart}) {
  return (
   <div className="item">
{ product.map((productItem, productIndex) =>{
        return(
            <div >

                <div className='productitem'>
                    <img className='image' src={productItem.productImage} alt=" " />
                    <p>{productIndex.id}</p>
                    <p>{productItem.name} | {productItem.Category}</p>
                    <p>Rs.{productItem.price}</p>
                    <button onClick={()=> addToCart(productItem)} className='btn'>Add To Cart</button>
                    </div>
            </div>
        )
    })
}

<Footer/>
   
   </div>
  )
}

export default Productlist
