import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./HomePage.css";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

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
      <section className="benefits-section">
        <div className="benefit-item">Rich in Nutrients</div>
        <div className="benefit-item">Natural Detoxifier</div>
        <div className="benefit-item">Supports Skin Health</div>
        <div className="benefit-item">Boosts Immunity</div>
        <div className="benefit-item">Promotes Joint Health</div>
        <div className="benefit-item">Aids in Digestion</div>
        <div className="benefit-item">Weight Loss Support</div>
        <div className="benefit-item">Supports Cardiovascular Health</div>
      </section>
    </div>
  );
};

export default HomePage;
