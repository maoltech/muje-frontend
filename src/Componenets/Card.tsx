import { StairsOutlined } from "@mui/icons-material";
import { Card, CardProps, Typography } from "antd";

const {Text } = Typography; 


type Props = CardProps& {
    product_name?: string, 
    product_description?: string, 
    product_price?:number, 
    product_qty_sold?: number,
    product_rating?: number,
    product_image?: string,
    product_title?: string,
    product_key?: number
  };

const ProductCard = ({
    product_name, 
    product_description, 
    product_price,
    product_key, 
    product_qty_sold,
    product_rating,
    product_image,
    product_title
}: Props) => {

    return(
        <Card
            key={product_key}
            hoverable
            title={`${product_title}`}
            style={{ width: "100%" }}
            cover={<img src={`${product_image}`} alt={`${product_name}`}/>} >
            <Card.Meta
            style={{ margin: "auto", padding: "" }}
            description={
            <Text className="font-[500] leading-[10px]"> {product_description}</Text>
            }
        />
        <div
            style={{ marginTop: "" }}
            className="flex flex-col items-start justify-start gap-[0.5rem]"
        >
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-[0.5rem]">
                    <span>
                        <StairsOutlined className="text-[#FAB005]" />
                    </span>
                    <span>
                        {product_rating}
                    </span>
                </div>
                <div className="font-[600]">{`N${product_price}`}</div>
            </div>
        </div>
        </Card>
    )
}

export default ProductCard