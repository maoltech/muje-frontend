
import Footer from "../Componenets/Footer"
import Header from "../Componenets/Header"
import BuyersDetail from "../Componenets/BuyerDetail";
import BuyerRating from "../Componenets/BuyerRating";
import OrderList from "../Componenets/Orders";
import "./BuyerDashboard.css"; 

const rating = 'Novice';
const criteria = [
    {
      name: 'Spend 50 hours online',
      current: 30,
      required: 50,
    },
    {
      name: 'Order 20 items',
      current: 15,
      required: 20,
    },
    {
      name: 'Spend 2000 dollars',
      current: 1500,
      required: 2000,
    },
    {
      name: 'Review 10 products',
      current: 8,
      required: 10,
    },

  ];

  const orders = [
    { status: "created", createdAt: "22/06/23", orderId: "123dfgffhhkf", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" },
    { status: "received", createdAt: "23/06/23", orderId: "123dfgffhfjdfs", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" },
    { status: "pending", createdAt: "24/06/23", orderId: "123dfkfjffhhkf", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" },
    { status: "shipping", createdAt: "24/06/23", orderId: "123dfgffdsjndkf", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" },
    { status: "delivered", createdAt: "25/06/23", orderId: "123dfgfnfhkf", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" },
    { status: "completed", createdAt: "26/06/23", orderId: "123dfgffhdsnskf", trackingId: "fdnfdnjf",  deliveryDate: "30/06/23", products: [{item: "rice", qty: 2, price: 2000}, {item: "beans", qty: 3, price: 1000} ], total:7000, shippingMethod: "road", productLocation: "Island" }
  ];


const BuyerDashboard = () =>{

    return(
        <div>
            <Header />
            <div className="dashboard">
                <div className="section">
                    <BuyersDetail />
                </div>
                <div className="section">
                    <OrderList orders={orders} />
                </div>
                <div className="section">
                    <BuyerRating rating={rating} criteria={criteria} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BuyerDashboard