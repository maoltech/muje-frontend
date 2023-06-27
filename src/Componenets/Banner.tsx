import Buttons from "./Button"
import "./Style/Banner.css"

type Props = {
  product_description?: string,
  product_image: string,
  product_price?: number,
  product_title?: string
}

const ProductBanner = ({
  product_description, 
  product_image,
  product_price,
  product_title}: Props) => {

    return(
    <div className='featured-product'>
      <div className='image-container'>
        <img className='banner-image' src= {product_image} alt={product_title} />
      </div>
        <div className='banner-details'>
            <h1 className="banner-title">
              {product_title}
            </h1>
            <p className='banner-description'>
              {product_description}
            </p>
            <p className="banner-price">
                {product_price}
            </p>
            <Buttons>
              Buy Now
            </Buttons>
          
        </div>
    
    </div>
    )
}

export default ProductBanner

