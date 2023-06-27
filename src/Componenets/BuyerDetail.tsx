import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Style/BuyerDashboard.css";
import { Input, Select } from "antd";

const { Option } = Select;

const data = {
  first_name: "Clark",
  last_name: "Kent",
  address: "20 Kent Farm, Smallville",
  city: "Smallville",
  country: "USA",
  dob: "22/10/1993",
  email: "clarkkent@mail.com",
  phone: "+456789",
  password: "<PASSWORD>",
  picture: "clarkkentpicture@cloudinary.com",
  sex: "Male"
};

const BuyersDetail: React.FC = () => {
  const [firstName, setFirstName] = useState(data.first_name || "");
  const [lastName, setLastName] = useState(data.last_name || "");
  const [address, setAddress] = useState(data.address || "");
  const [city, setCity] = useState(data.city || "");
  const [country, setCountry] = useState(data.country || "");
  const [sex, setSex] = useState(data.sex || "");
  const [email, setEmail] = useState(data.email || "");
  const [phone, setPhone] = useState(data.phone || "");

  return (
    <div className="buyer-details">
      <div className="profile-picture">
        <img src={data.picture} alt="Profile" />
      </div>
      <div className="first_name">
        <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="last_name">
        <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="address">
        <Input placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="city">
        <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className="country">
        <label>Country</label>
        <Select value={country} onChange={(value) => setCountry(value)}>
          <Option value="USA">USA</Option>
          <Option value="UK">UK</Option>
          <Option value="Canada">Canada</Option>
          {/* Add more countries as needed */}
        </Select>
      </div>
      <div className="sex">
        <label>Sex</label>
        <Select value={sex} onChange={(value) => setSex(value)}>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      </div>
      <div className="email">
        <Input placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="phone">
        <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
    </div>
  );
};

export default BuyersDetail;
