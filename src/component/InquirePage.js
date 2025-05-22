import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import "./InquirePage.css";

const data = [
  {
    title: "Mobile",
    redire: "tel:",
    icon: <MdPhone />,
    value: "+968-98128375",
  },
  {
    title: "Email",
    redire: "mailto:",
    icon: <MdEmail />,
    value: "highrisetrade72@gmail.com",
  },
  {
    title: "Location",  
    redire: "",
    icon: <MdLocationOn />,
    value: "Flaj-AI-Qabail,Sohar,Saltan of Oman",
  },
];

const InquirePage = () => {
  return (
    <div className="inquire-container">
      {data.map((item, index) => (
        <div className="inquire-box" key={index}>
          <div className="icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={item.redire + item.value}
            >
              {item.value}
            </a>
          </p>
          <a href="/Contact">
          <button className="inquire-btn">Inquire Now</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default InquirePage;
