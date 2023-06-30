import { Pagination } from "antd"
import {useState} from "react"
import "./Style/ProductWrapper.css"
import ProductCard from "./ProductCard"



const products = [
    { product_key:1, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:2, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 6, product_rating: 3.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:3, product_name: "Ponmo", product_description: "lorem ipsum dolor sos os ...", product_price: 1000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ponmo"},
    { product_key:4, product_name: "Beans", product_description: "lorem ipsum dolor sos os ...", product_price: 3000, product_qty_sold: 8, product_rating: 4.0, product_image: "../srcs/", product_title: "Maiduguri Beans"},
    { product_key:5, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 5.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:6, product_name: "Beans", product_description: "lorem ipsum dolor sos os ...", product_price: 4000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Maidiguri Beans"},
    { product_key:6, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 9, product_rating: 2.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:6, product_name: "Garri", product_description: "lorem ipsum dolor sos os ...", product_price: 3000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ijebu Garri"},
    { product_key:6, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 3.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:6, product_name: "Beans", product_description: "lorem ipsum dolor sos os ...", product_price: 4000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Maidiguri Beans"},
    { product_key:6, product_name: "Corn", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 7, product_rating: 4.0, product_image: "../srcs/", product_title: "Corn"},
    { product_key:6, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 3.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:6, product_name: "Garri", product_description: "lorem ipsum dolor sos os ...", product_price: 3000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ijebu Garri"},
    { product_key:6, product_name: "Ponmo", product_description: "lorem ipsum dolor sos os ...", product_price: 1000, product_qty_sold: 5, product_rating: 5.0, product_image: "../srcs/", product_title: "Ponmo"},
    { product_key:6, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ogun rice"},
    { product_key:6, product_name: "Corn", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Corn"},
    { product_key:6, product_name: "Beans", product_description: "lorem ipsum dolor sos os ...", product_price: 4000, product_qty_sold: 5, product_rating: 5.0, product_image: "../srcs/", product_title: "Maiduguri Beans"},
    { product_key:7, product_name: "Rice", product_description: "lorem ipsum dolor sos os ...", product_price: 2000, product_qty_sold: 10, product_rating: 4.0, product_image: "../srcs/", product_title: "Ogun rice"}
]

const pageLength = products.length
const pageSize = 12



const ProductWrapper = () =>{

      // Current page state
    const [currentPage, setCurrentPage] = useState(1);

    // Handle page change
    const handlePageChange = (page: any) => {
    setCurrentPage(page);
    };

    // Calculate current products for the selected page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentProducts = products.slice(startIndex, endIndex);


    return(
        <div className='products-wrapper'>
            <div className='products-container'>
            {currentProducts.map((product) => (
          <ProductCard 
          key={product.product_key} 
          product_title={product.product_title}
          product_image={product.product_image}
          product_description={product.product_description}
          product_name={product.product_name}
          product_price={product.product_price}
          product_qty_sold={product.product_qty_sold}
          product_rating={product.product_rating}
           />
          
        ))}


            </div>
            <div className="pagination-container">
                <Pagination
                    className="pagination"
                    current={currentPage}
                    pageSize={pageSize}
                    total={pageLength}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )

}

export default ProductWrapper