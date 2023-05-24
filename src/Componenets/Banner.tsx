import Buttons from "./Button"
import "./Banner.css"

const contentStyle: React.CSSProperties = {
  height: '500px',
  margin: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center', 
  display: 'flex'
};


const ProductBanner = () => {

    return(
    <div className='sliderComp'>
      <div style={contentStyle}>
        <div className='left-side'>
          <img className='product-image' src="" alt={"alt"} />
        </div>
        <div className='right-side'>
          <div className='product-desc'>
            <p>
              lorem ipsum, this description to this product
            </p>
          </div> 
          <div>
            <Buttons>
              Buy Now
            </Buttons>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductBanner