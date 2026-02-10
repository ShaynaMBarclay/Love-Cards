import { useState } from "react";
import "./App.css";

import cuteImg from "./assets/kiss.gif";
import cardBg from "./assets/card.png";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [hideNo, setHideNo] = useState(false);
  const [showBigHeart, setShowBigHeart] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleNo = () => {
    setShowWrong(true);
    setHideNo(true);

    setTimeout(() => {
      setShowWrong(false);
      setHideNo(false);
    }, 1200);
  };

  const handleYes = () => {
    setShowAnimation(true);   // hide card
    setShowBigHeart(true);    // show big heart

    // After heart animation, show accepted screen with fade
    setTimeout(() => {
      setShowBigHeart(false);
      setShowAnimation(false);
      setAccepted(true); // triggers fade-in
    }, 1200); // duration matches heart animation
  };

  return (
    <div className="page">
      {/* Floating glowing hearts */}
      <div className="hearts-container">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 20 + 20;
          const x = Math.random() * window.innerWidth;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;
          const color = Math.random() > 0.5 ? "#ff1a1a" : "#ff66a3";
          const startY = Math.random() * window.innerHeight;

          return (
            <span
              key={i}
              className="heart-char"
              style={{
                fontSize: size + "px",
                left: x + "px",
                bottom: startY + "px",
                animationDelay: delay + "s",
                animationDuration: duration + "s",
                color: color,
                textShadow: `
                  0 0 10px #ffc0cb, 
                  0 0 20px #ffc0cb, 
                  0 0 30px #ffc0cb
                `,
              }}
            >
              ♡
            </span>
          );
        })}
      </div>

      {/* Big heart animation overlay */}
      {showBigHeart && <div className="big-heart">❤️</div>}

      {/* Main card */}
      {!showAnimation && (
        <div className={`card ${accepted ? "fade-in" : ""}`}>
          {accepted ? (
            <>
              <h1 className="title">YAYYY 💕</h1>
              <p className="message">
                You just made me the happiest human alive 🥺💗  
                Happy Valentine’s Day my love ✨
              </p>
              <img src={cuteImg} alt="cute gif" className="cute-img" />
            </>
          ) : (
            <>
              <h1 className="title">Will you be my Valentine? 💌</h1>
              <img src={cardBg} alt="envelope" className="envelope-img" />
              <div className="buttons">
                <button className="yes-btn" onClick={handleYes}>
                  Yes 💖
                </button>
                {!hideNo && (
                  <button className="no-btn" onMouseEnter={handleNo} onClick={handleNo}>
                    No
                  </button>
                )}
              </div>
              {showWrong && <div className="popup">WRONG ANSWER ❌</div>}
            </>
          )}
        </div>
      )}
    </div>
  );
}
