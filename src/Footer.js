import React from "react";

export default function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);

  //   if () {
  //     alert("We're apen. Wekcome All!!");
  //   } else {
  //     alert("We are closed. Please check later");
  //   }
  //   console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
}
