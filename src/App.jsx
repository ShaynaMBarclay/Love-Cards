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
    setShowAnimation(true);  
    setShowBigHeart(true);   
    setTimeout(() => {
      setShowBigHeart(false);
      setShowAnimation(false);
      setAccepted(true); 
    }, 1200); 
  };

  return (
    <div className="page">
   <div className="hearts-container">
  {[...Array(30)].map((_, i) => {
    const color = Math.random() > 0.5 ? "#ff4f8b" : "#ff6b81";
    const size = Math.random() * 24 + 16; // 16px to 40px
    const top = Math.random() * 100; // starting vertical position

    return (
      <span
        key={i}
        className="heart-char"
        style={{
          "--left": Math.random() * 100 + "vw",
          "--size": size + "px",
          "--color": color,
          "--top": top + "vh",   
          "--delay": Math.random() * 5 + "s",
          "--duration": Math.random() * 5 + 5 + "s",
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
                  You just made my heart do a happy dance! 🥰  
                  Every time I think of you, I get all giddy like a kid on candy day 🍬.  
                  Thank you for being the sweetest part of my life, the jelly to my peanut butter,  
                  the twinkle in my silly little eyes ✨💖  
                  I’m so lucky to have you… and I promise to keep making you smile  
                  (even if it’s just with bad jokes and too many hearts 😘💌)  
                  Happy Valentine’s Day, my love!
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
