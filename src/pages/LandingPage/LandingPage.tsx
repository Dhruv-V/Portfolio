import React, { useEffect } from "react";
import "./LandingPage.scss";

const LandingPage: React.FC<{ onAnimationEnd: () => void }> = ({
  onAnimationEnd,
}) => {
  useEffect(() => {
    const cleanup = setTimeout(onAnimationEnd, 4000);
    return () => {
      clearTimeout(cleanup);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`landing-page fade-out`}>
      <p className="heading">Welcome to Dhruv's Portfolio.</p>
      <div className="footer-landing-page">Let's Get Started</div>
    </div>
  );
};

export default LandingPage;
