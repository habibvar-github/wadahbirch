import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./HomePage.css";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const benefitsArray = [
    { name: "Natural Detoxifier", image: "/detox.png", imageAlt: "detox_icon" },
    {
      name: "Skin Health",
      image: "/skin-health.png",
      imageAlt: "skin-health_icon",
    },
    {
      name: "Rich in Nutrients",
      image: "/nutrients.png",
      imageAlt: "nutrients_icon",
    },
    {
      name: "Boosts Immunity",
      image: "/immunity.png",
      imageAlt: "immunity_icon",
    },
  ];

  const benefitsArray2 = [
    { name: "Joint Health", image: "/joint.png", imageAlt: "joint_icon" },
    {
      name: "Aids in Digestion",
      image: "/digestion.png",
      imageAlt: "digestion_icon",
    },
    {
      name: "Cardiovascular Health",
      image: "/heart.png",
      imageAlt: "heart_icon",
    },
    {
      name: "Weight Loss",
      image: "/weight-loss.png",
      imageAlt: "weight-loss_icon",
    },
  ];

  const benefitsFunction = (array) => {
    return array.map((benefit) => {
      return (
        <div className="benefit-item">
          <img src={benefit.image} alt={benefit.imageAlt} />
          <p>{benefit.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="white-text">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Naturally Tapped Birch Sap</h1>
          <p>We tap our birches once a year in the early part of spring.</p>
          <button className="learn-more-btn">Buy Now</button>
        </div>
      </section>
      <section className="product-section">
        <div className="product-content">
          <div className="product-image">
            <img src="product-1L.png" alt="Product Name" />
          </div>
          <div className="product-details">
            <div className="product-info">
              <h2>Birch Sap</h2>
              <p>
                Discover the forest's essence with our Naturally Tapped Birch
                Sap, a rejuvenating drink from birch trees. Carefully harvested
                in early spring, this clear sap is rich in natural benefits.
              </p>
            </div>
            <div className="product-purchase-cta">
              <div className="product-options">
                <CustomSelect
                  options={[
                    "Select an option",
                    "1l x 6 bottles",
                    "500ml x 6 bottles",
                  ]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
              <button
                className="add-to-cart"
                disabled={selectedOption === "Select an option"}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="benefits-section">
        <div className="benefits-divider">
          {benefitsFunction(benefitsArray)}
        </div>
        <div className="benefits-divider">
          {benefitsFunction(benefitsArray2)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
