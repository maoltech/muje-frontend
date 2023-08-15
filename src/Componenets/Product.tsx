// import React, { useState } from 'react';
// import Cart from './Cart';


// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   quantity: number;
//   specifications: string[];
// }

// interface ProductPageProps {
//   product: Product;
//   // addToCart(): (item: Product) => void;
// }

// const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setQuantity(Number(event.target.value));
//   };

//   const handleAddToCart = () => {
//     // Add logic to add the product to the cart
//     console.log(product)
//   };

//   return (
//     <div className="product-page">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p className="price">${product.price.toFixed(2)}</p>

//         <div className="quantity-selector">
//           <label htmlFor="quantity">Quantity:</label>
//           <select id="quantity" value={quantity} onChange={handleQuantityChange}>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>

//         <div className="product-specifications">
//           <h3>Specifications:</h3>
//           <ul>
//             {product.specifications.map((spec, index) => (
//               <li key={index}>{spec}</li>
//             ))}
//           </ul>
//         </div>

//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import {useLocation} from 'react-router-dom';
import {useState} from 'react';
// import { useDispatch } from 'react-redux';
import Buttons from './Button';
import './Style/Product.css';

interface Props {
    id: number;
    title: string;
    desc: string;
    price: number;
    image: string;
    size: string[];
    color: string[];
  }
  

const ProductPage: React.FC<Props> = (product) => {
    // const location = useLocation();
    // const id =location.pathname.split("/")[2]; 
    // const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    // const [size, setSize] = useState('');
    // const dispatch = useDispatch();

    const size = product.size[0]
//     useEffect(()=>{
//         const getProduct = async ()=>{ 
//             try {
//                 const res = await publicRequest.get('/product/find/' + id)
//                 setProduct(res.data);
//             } catch (error) {
//               console.log (error)  
//             }
//         }
//         getProduct()
//    },[id])

 const handleQuantity = (type: string) => {
    if (type ==="desc"){
        quantity>1 && setQuantity(quantity-1)
    }else{
        setQuantity(quantity+1)
    }
} 

    const handleClick = () =>{
        console.log(({...product, quantity, color, size}));
    //    dispatch(({...product, quantity, color, size}));
    }

    return ( 
            <div className='Wrapper'>
                <div className='ImageContainer'>
                    <img className='Image' src={product.image} alt='' />
                </div>
                <div className="InfoContainer">
                    <div className="Title">{product.title}</div> 
                    <div className="Desc">{product.desc}</div>
                    <div className="Price">&#8358;{product.price}</div>
                    <div className="FilterContainer">
                        <div className="Filter">
                            <div className="FilterTitle">Color</div>
                             {product.color?.map((c)=>(
                                <div className="FilterColor" color={c} key={c} onClick={()=> setColor(c)}/>
                                // <div className="FilterColor" color={c} key={c} onClick={()=> setColor(c)}/>
                            ))}
                        </div>
                        <div className="Filter">
                            <div className="FilterTitle">Size</div>
                            <div className="FilterSize">
                            {/* <div className="FilterSize" onChange={(e)=> setSize(e.target.value)}> */}
                            {product.size?.map((s)=>(
                                <div className="FilterSizeOption" key={s}>{s}</div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="AddContainer">
                        <div className="AmountContainer">
                            <MinusOutlined onClick={()=>handleQuantity('desc')}/>
                            <div className="Amount">{quantity}</div>
                            <PlusOutlined onClick={()=>handleQuantity('inc')}/>
                        </div>
                        <Buttons onClick={handleClick}>ADD TO CART</Buttons>
                    </div>
                </div>
            </div>
     );
}
 
export default ProductPage; 