// import main from './Images/main12.jpg'
import './App.css';
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Cartlist from './Components/Cartlist';


  import img1 from './Images/laptop.jpg'
  import img2 from './Images/furniture.jpg'
  import img3 from './Images/speaker.webp'
  import img4 from './Images/heels.webp'
  import img5 from './Images/iphone.jpg'
  import img6 from './Images/gown.webp'
import { useState } from 'react';
// import Footer from './Components/Footer';
  
  
  function App() {
  
  
  
  
const [product, setProduct] = useState([
      {
          id: 1,
          name: "Laptop",
          Category: "Mac book Air",
          price: 110080.00,
          productImage: img1,
      },
      {
          id: 2,
          name: "Sofa Set",
          price: 28000.00,
          productImage: img2,
          Category: "Furniture",
      },
      {
          id: 3,
          name: "Speaker",
          price: 3000.00,
          productImage: img3,
          Category: "Electronics",
      },
      {
          id: 4,
          name: "Sandals",
          price: 600.00,
          productImage: img4,
          Category: "Leather",
      },
     
      {
          id: 5,
          name: "I Phone14",
          price: 90000.00,
          productImage: img5,
          Category: "Gadgets",
      },
      {
          id: 6,
          name: "Gown",
          price: 1000.00,
          productImage: img6,
          Category: "Dress",
      },
  
  
  
  ])
  const [cart, setCart] =useState([])
  const [showCart, setShowCart] =useState(false)


  const addToCart =(data)=>{
  setCart([...cart, { ...data, quantity: 1}])
  }
const handleshow=(value)=>{
  setShowCart(value)
}





  return (
    <>
  <Navbar count={cart.length} handleshow={handleshow}/>
  <div className='main'>
    <h3>Shop Now:-</h3>
            </div>
  {
    showCart ?
  <Cartlist cart={cart}/>:
  <Productlist product={product} addToCart={addToCart}/>
  
  }
  {/* <Footer/> */}
    </>
  );
}

export default App;
