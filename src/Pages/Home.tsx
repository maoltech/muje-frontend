
import Footer from "../Componenets/Footer"
import Header from "../Componenets/Header"
import ProductWrapper from "../Componenets/ProductWrapper"
import Slider from "../Componenets/Slider"
import TopCategory from "../Componenets/TopCategory"


const Home = () =>{

    return(
        <div>
            <Header />
            <Slider />
            <TopCategory />
            <ProductWrapper />
            <Footer />
        </div>
    )
}

export default Home