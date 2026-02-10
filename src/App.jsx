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
      <div className="card">
        {accepted ? (
          /* 💕 YES SCREEN */
          <>
            <h1 className="title">YAYYY 💕</h1>

            <p className="message">
              You just made me the happiest human alive 🥺💗  
              Happy Valentine’s Day my love ✨
            </p>

            <img src={cuteImg} alt="cute gif" className="cute-img" />
          </>
        ) : (
          /* 💌 QUESTION SCREEN */
          <>
            <h1 className="title">Will you be my Valentine? 💌</h1>

            {/* envelope image sits between title + buttons */}
            <img src={cardBg} alt="envelope" className="envelope-img" />

            <div className="buttons">
              <button
                className="yes-btn"
                onClick={() => setAccepted(true)}
              >
                Yes 💖
              </button>

              {!hideNo && (
                <button
                  className="no-btn"
                  onMouseEnter={handleNo}
                  onClick={handleNo}
                >
                  No
                </button>
              )}
            </div>
          </>
        )}

        {showWrong && <div className="popup">WRONG ANSWER ❌</div>}
      </div>
    </div>
  );
}
