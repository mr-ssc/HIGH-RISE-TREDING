import React, { useState } from "react";
import "./New_Pro.css";
import first from "./Img/slide-1.png";
import second from "./Img/slide-2.png";
import third from "./Img/slide-3.png";
import four from "./Img/slide-4.png";
import five from "./Img/slide-5.png";
import six from "./Img/slide-6.png";
import seven from "./Img/slide-7.png";
import eight from "./Img/slide-8.png";
import nine from "./Img/slide-9.png";
import ten from "./Img/slide-10.png";
import eleone from "./Img/slide-11.png";

const products = [
  {
    id: 1,
    image: four,
    name: "Oil and Gas Products",
    description:
      "Premium-grade solutions designed to meet the demanding needs of the oil and gas industry. From high-performance lubricants to corrosion-resistant equipment, our products ensure safety, efficiency, and durability even in the toughest environments.",
    price: "₹899",
  },
  {
    id: 2,
    image: nine,
    name: "Safety Items",
    description:
      "High-quality safety gear designed to protect workers in hazardous environments. Our durable safety vests provide excellent visibility with reflective strips, while the sturdy boots offer superior comfort, slip resistance, and protection against impacts—ensuring safety without compromising on comfort.",
    price: "₹1,299",
  },
  {
    id: 3,
    image: first,
    name: "Industrial Motors",
    description:
      "Robust and energy-efficient industrial motors engineered to deliver reliable performance across a wide range of applications. Designed for durability and optimal power output, our motors ensure smooth operation in manufacturing, automation, and heavy machinery environments.",
    price: "₹2,499",
  },
  {
    id: 4,
    image: six,
    name: "Valve Products",
    description:
      "High-precision valves designed for efficient flow control in industrial systems. Our durable valve products ensure leak-proof operation, corrosion resistance, and easy maintenance, making them ideal for applications in oil & gas, water treatment, and manufacturing industries",
    price: "₹3,999",
  },
  {
    id: 5,
    image: seven,
    name: "T-Port Valve",
    description:
      "A versatile valve with a T-shaped port design that allows fluid flow to be directed in multiple directions. Ideal for mixing or diverting applications, these valves enable efficient control in complex piping systems such as chemical processing, HVAC, and fluid distribution.",
    price: "₹2,799",
  },
  {
    id: 6,
    image: eleone,
    name: "Plywood",
    description:
      "High-quality plywood made from multiple layers of durable wood veneers, bonded together for strength and stability. Ideal for furniture, construction, and interior design projects, our plywood offers excellent resistance to warping, cracking, and moisture.",
    price: "₹599",
  },
  {
    id: 7,
    image: second,
    name: "Joint",
    description:
      "Durable elbow joints designed to change the direction of piping systems smoothly. Made from high-quality materials to ensure leak-proof and corrosion-resistant connections in plumbing and industrial pipelines.",
    price: "₹4,499",
  },
  {
    id: 8,
    image: eight,
    name: "Plumbing Materials",
    description:
      "Premium quality plumbing materials designed to ensure reliable water supply and drainage systems. Our range includes pipes, fittings, valves, connectors, and seals made from durable, corrosion-resistant materials for long-lasting performance in residential, commercial, and industrial plumbing applications.",
    price: "₹1,899",
  },
  {
    id: 9,
    image: third,
    name: "Electric Products",
    description:
      "Wide range of high-quality electric products designed for safety, efficiency, and durability. From switches, sockets, wires, and circuit breakers to lighting solutions, our products ensure reliable performance for residential, commercial, and industrial electrical systems.",
    price: "₹1,499",
  },
  {
    id: 10,
    image: five,
    name: "Tube Fitting Products",
    description:
      "Precision-engineered tube fittings designed for secure and leak-proof connections in fluid and gas transfer systems. Made from high-quality materials to ensure durability, corrosion resistance, and easy installation, suitable for industrial, automotive, and hydraulic applications.",
    price: "₹3,299",
  },
  {
    id: 11,
    image: ten,
    name: "Washroom Products",
    description:
      "Comprehensive range of washroom products including durable bathtubs, comfortable toilet seats, and essential restroom fittings. Designed for hygiene, comfort, and easy maintenance, our products ensure a clean and functional washroom environment for residential and commercial spaces.",
    price: "₹2,199",
  },
];

const NewPro = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProducts = products.slice(0, 6);
  const displayedProducts = showAll ? products : initialProducts;

  return (
    <>
      <div className="newpro-container">
        <h1 className="newpro-heading">Newvest Products</h1>
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-desc">{product.description}</p>
             
            </div>
          ))}
        </div>
        {products.length > initialProducts.length && (
          <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </>
  );
};

export default NewPro;