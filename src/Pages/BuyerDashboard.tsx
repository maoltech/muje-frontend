
import Footer from "../Componenets/Footer"
import Header from "../Componenets/Header"
import BuyersDetail from "../Componenets/BuyerDetail";
import BuyerRating from "../Componenets/BuyerRating";
import OrderList from "../Componenets/Orders";


const rating = 'white';
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
    { status: "created", createdAt: "22/06/23", orderId: "123dfgffhhkf" },
    { status: "received", createdAt: "23/06/23", orderId: "123dfgffhfjdfs" },
    { status: "pending", createdAt: "24/06/23", orderId: "123dfkfjffhhkf" },
    { status: "shipping", createdAt: "24/06/23", orderId: "123dfgffdsjndkf" },
    { status: "delivered", createdAt: "25/06/23", orderId: "123dfgfnfhkf" },
    { status: "completed", createdAt: "26/06/23", orderId: "123dfgffhdsnskf" }
  ];


const BuyerDashboard = () =>{

    return(
        <div>
            <Header />
            <div className="dashboard">
                <BuyersDetail />
                <OrderList orders={orders} />
                <BuyerRating rating={rating} criteria={criteria} />
            </div>
            <Footer />
        </div>
    )
}

export default BuyerDashboard