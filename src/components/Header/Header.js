import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 4 * 16); // 8em in pixels
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "opaque" : ""}`}>
      <button
        className="menu-toggle"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <img src="/icons/menu-toggle.png" alt="Menu" />
      </button>
      <nav className={`menu-left ${menuVisible ? "show" : ""}`}>
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
  );
}

export default Header;
