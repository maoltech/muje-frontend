
import Footer from "../Componenets/Footer"
import Header from "../Componenets/Header"
import ProductPage from "../Componenets/Product"
import ProductWrapper from "../Componenets/ProductWrapper"


const product = {
    id: 123,
    title: "Rice",
    desc: "Ofada rice",
    price: 200,
    image: "https://res.cloudinary.com/dlzpd1pgi/image/upload/v1690394667/9154822221_398525818_oksrpo.jpg",
    size: ["1kg", "2kg", "3kg"],
    color: ["red"]
  }

const Product = () =>{

    return(
        <div>
            <Header />
            <ProductPage                 
                id={product.id}
                title={product.title}
                desc={product.desc}
                price={product.price}
                image={product.image}
                size={product.size}
                color={product.color}
            />
            <ProductWrapper />
            <Footer />
        </div>
    )
}

export default Product