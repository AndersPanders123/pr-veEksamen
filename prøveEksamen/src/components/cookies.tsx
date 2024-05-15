import { useState, useEffect } from "react";

function Cookies() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookiesAccepted"));
    if (!cookiesAccepted) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    document.cookie = "cookiesAccepted=true; max-age=31536000"; // 1 year
    setShowCookiePopup(false);
  };

  const handleDeclineCookies = () => {
    document.cookie = "cookiesAccepted=false; max-age=31536000"; // 1 year
    setShowCookiePopup(false);
  };

  return (
    <>
      {showCookiePopup && (
        <div className="cookie-popup">
          <p>Denne nettsiden bruker Cookies</p>
          <div>
            <button className="cb" onClick={handleAcceptCookies}>
              Aksepter
            </button>
            <button className="cb" onClick={handleDeclineCookies}>
              Avslå
            </button>
            <p id="lesmer4">Les mer om cookies !</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cookies;
