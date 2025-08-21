import React, { useState } from "react";

// The menuData you provided
const menuData: Record<string, { name: string; price: string; desc: string }[]> = {
  smoothies: [
    { name: "Day Dream", price: "7.80€", desc: "apple, raspberry, banana" },
    { name: "Passion", price: "8.80€", desc: "passion fruit, pineapple, orange, mango" },
    { name: "Guarana Booster", price: "8.50€", desc: "orange, ginger, banana, guarana" },
    { name: "Madagascar 2", price: "9.50€", desc: "mango, coconut cream, pineapple, orange, banana" },
    { name: "PH Balance", price: "8.00€", desc: "apple, avocado, celery, lemon" },
  ],
  juices: [
    { name: "Sunrise", price: "6.90€", desc: "orange, carrot, ginger" },
    { name: "Green Power", price: "7.20€", desc: "spinach, apple, lemon" },
    { name: "Berry Bliss", price: "7.00€", desc: "strawberry, blueberry, apple" },
    { name: "Citrus Zing", price: "7.50€", desc: "grapefruit, orange, lime" },
    { name: "Tropical Twist", price: "7.30€", desc: "pineapple, orange, lemon" },
  ],
  summer: [
    { name: "Mango Cooler", price: "8.10€", desc: "mango, mint, lime, ice" },
    { name: "Watermelon Splash", price: "7.60€", desc: "watermelon, strawberry, lemon" },
    { name: "Peach Fizz", price: "8.90€", desc: "peach, orange, soda" },
    { name: "Berry Lemonade", price: "8.30€", desc: "blueberry, lemon, apple juice" },
    { name: "Sunshine Shake", price: "9.00€", desc: "pineapple, mango, coconut milk" },
  ],
  other: [
    { name: "Classic Lemonade", price: "5.50€", desc: "lemon, mint, sugar" },
    { name: "Iced Herbal Tea", price: "6.00€", desc: "herbal tea, honey, ice" },
    { name: "Hot Choco", price: "5.80€", desc: "cocoa, milk, vanilla" },
    { name: "Protein Shake", price: "7.60€", desc: "banana, protein powder, milk" },
    { name: "Matcha Latte", price: "6.80€", desc: "matcha, oat milk, vanilla" },
  ],
};

const categoryMeta: Record<string, { label: string; color: string }> = {
  smoothies: { label: "Smoothies", color: "#f559a7" },
  juices: { label: "Juices", color: "#21d4c9" },
  summer: { label: "Summer Specials", color: "#f89b37" },
  other: { label: "Other Drinks", color: "#ffe066" },
};

export default function Menu() {
  const [active, setActive] = useState<keyof typeof menuData>("smoothies");

  return (
    <div className="menu-bg">
      {/* Decorative top wave */}
      <div className="menu-top-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffe0c6" d="M0,40 C480,120 960,0 1440,60 L1440,0 L0,0Z" />
        </svg>
      </div>
      {/* Hero */}
      <section className="menu-hero">
        <h1 className="menu-title">
          <span className="menu-title-main">Our Menu</span>
          <span className="menu-title-highlight">Fresh Blends. Bold Flavors.</span>
        </h1>
        <p className="menu-desc">
          <span className="menu-desc-highlight">
            Handcrafted smoothies & juices, always made to order.
          </span>
        </p>
      </section>
      {/* Category tabs */}
      <div className="menu-tabs-wrap">
        <div className="menu-tabs">
          {Object.keys(menuData).map((key) => (
            <button
              className={`menu-tab${active === key ? " active" : ""}`}
              key={key}
              style={{
                color: active === key ? "#fff" : categoryMeta[key].color,
                background: active === key
                  ? `linear-gradient(90deg, ${categoryMeta[key].color} 80%, #ff8c2a 100%)`
                  : "#fff6e3",
                border: `2px solid ${categoryMeta[key].color}`,
              }}
              onClick={() => setActive(key as keyof typeof menuData)}
            >
              {categoryMeta[key].label}
            </button>
          ))}
        </div>
      </div>
      {/* Menu items grid */}
      <section className="menu-grid">
        {menuData[active].map((item, i) => (
          <div className="menu-card" key={i}>
            <div
              className="menu-card-header"
              style={{
                background: `linear-gradient(90deg, ${categoryMeta[active].color}22 0%, #fff 60%)`,
              }}
            >
              <span className="menu-card-name">{item.name}</span>
              <span className="menu-card-price">{item.price}</span>
            </div>
            <div className="menu-card-desc">{item.desc}</div>
          </div>
        ))}
      </section>
      {/* Decorative bottom wave */}
      <div className="menu-bottom-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b2f7ef" d="M0,30 C400,120 1040,0 1440,70 L1440,100 L0,100Z" />
        </svg>
      </div>
    </div>
  );
}