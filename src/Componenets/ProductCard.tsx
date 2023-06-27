import { Card, CardProps, Typography } from "antd";
import "./Style/ProductCard.css";
import { StarFilled } from '@ant-design/icons';

const {Text } = Typography; 


type Props = CardProps& {
    product_name?: string, 
    product_description?: string, 
    product_price?:number, 
    product_qty_sold?: number,
    product_rating?: number,
    product_image?: string,
    product_title?: string,
    key?: number
  };

const ProductCard = ({
    product_name, 
    product_description, 
    product_price,
    key, 
    product_qty_sold,
    product_rating,
    product_image,
    product_title
}: Props) => {

    return(
        <Card
            hoverable
            className="product-card"
            title={`${product_title}`}
            key={key}
            cover={<img src={product_image} alt={product_name}/>} 
        >
            <Card.Meta
            style={{ margin: "auto", padding: "" }}
            description={ <Text className="product-desc"> {product_description} </Text> }
        />
        <div
            style={{ marginTop: "" }}
            className="product-info"
        >
            <div className="product-details">
                <div className="product-rating">
                    <span>
                        <StarFilled className="star-sign" />
                    </span>
                    <span>
                        {product_rating}
                    </span>     
                </div>
                <div className="product-right">
                    <div className="product-sold">{'Qauntity Sold:'+ product_qty_sold}</div>
                    <div className="product-price">{'Price: N'+ product_price}</div>
                </div>
            </div>
        </div>
        </Card>
    )
}

export default ProductCard