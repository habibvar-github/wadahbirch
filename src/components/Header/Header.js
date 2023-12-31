import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 4 * 16);
    };

    window.addEventListener("scroll", onScroll);

    // New click listener to close the menu
    const closeMenu = () => {
      if (menuVisible) {
        setMenuVisible(false);
        console.log("close");
      }
    };

    // Adding click listener to document
    document.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", closeMenu);
    };
  }, [menuVisible]); // Dependency array includes menuVisible

  return (
    <>
      <div className="preheader">
        <div className="preheader-left">
          <div className="language-change">
            <select>
              <option>ENG</option>
              <option>ESP</option>
            </select>
          </div>
          <div className="currency-change">
            <select>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <div className="preheader-right">
          <div className="whatsapp-number">WhatsApp: +34603737180</div>
        </div>
      </div>
      <header className={`header ${isScrolled ? "opaque" : "top-margin"}`}>
        <div className="menu-left">
          <button
            className="menu-toggle"
            onClick={(e) => {
              e.stopPropagation(); // Prevent this click from triggering closeMenu
              setMenuVisible(!menuVisible);
            }}
          >
            <img src="/icons/menu-toggle.png" alt="Menu" />
          </button>
          <nav className={`menu ${menuVisible ? "show" : ""}`}>
            <a href="/shop" onClick={() => setMenuVisible(false)}>
              SHOP
            </a>
            <a href="/about" onClick={() => setMenuVisible(false)}>
              ABOUT
            </a>
            <a href="/sustainability" onClick={() => setMenuVisible(false)}>
              OUR IMPACT
            </a>
          </nav>
        </div>
        <div className="logo">
          <Link to="/">
            <img src="logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="menu-right">
          <img src="/icons/profile.png" alt="Account" />
          <img src="/icons/bag.png" alt="Cart" />
        </div>
      </header>
    </>
  );
}

export default Header;
