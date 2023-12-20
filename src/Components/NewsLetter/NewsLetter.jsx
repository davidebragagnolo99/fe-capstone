import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Iscriviti alla nostra newsletter e rimani sempre aggiornato sulle offerte e novità del momento!</p>
      <div>
        <input type="email" placeholder="Inserisci La Tua Email" />
        <button>Iscriviti</button>
      </div>
    </div>
  );
};

export default NewsLetter;
