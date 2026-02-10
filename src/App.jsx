import { useState } from "react";
import "./App.css";

import cuteImg from "./assets/kiss.gif";
import cardBg from "./assets/card.png";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [hideNo, setHideNo] = useState(false);

  const handleNo = () => {
    setShowWrong(true);
    setHideNo(true);

    setTimeout(() => {
      setShowWrong(false);
      setHideNo(false);
    }, 1200);
  };

  return (
    <div className="page">
      {/* Floating glowing hearts */}
      <div className="hearts-container">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 20 + 20; // 20px to 40px
          const x = Math.random() * window.innerWidth;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5; // 5s to 10s
          const color = Math.random() > 0.5 ? "#ff1a1a" : "#ff66a3"; // bright red/pink
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
                  0 0 10px #ffffff, 
                  0 0 20px #ffffff, 
                  0 0 30px #ffc0cb
                `, 
              }}
            >
              ♡
            </span>
          );
        })}
      </div>

      {/* Main card */}
      <div className="card">
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
              <button className="yes-btn" onClick={() => setAccepted(true)}>
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
    </div>
  );
}
