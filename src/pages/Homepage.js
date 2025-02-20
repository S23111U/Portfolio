import ShadowButton from "../components/Button";
import { useState } from "react";
import "./Homepage.css";
import CustomNavbar from "../components/Navbar";

function HomePage() {
  const [h1text, setH1Text] = useState("Welcome!");
  const [clickCount, setClickCount] = useState(0);
  const [fadeClass, setFadeClass] = useState("");

  const handleKnowMeClick = () => {
    setFadeClass("");
    setTimeout(() => {
      if (clickCount === 0) {
        setH1Text("I'm Swetanshu, nice to meet you!");
      } else if (clickCount === 1) {
        setH1Text("Scroll to know more");
      }
      setFadeClass("fade-in");
      setClickCount(clickCount + 1);
    }, 0);
  };

  return (
    <>
      <CustomNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <header className="text-center my-8">
          <h1
            className={`text-4xl font-bold ${fadeClass}`}
            style={{ color: "white" }}
          >
            {h1text}
          </h1>
        </header>
        <section className="my-8">
          {clickCount < 2 ? (
            <ShadowButton
              variant="ghost"
              text="Know Me"
              onClick={handleKnowMeClick}
              color="primary"
            />
          ) : (
            <div className="down-arrow" style={{ color: "white" }}>
              ↓
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default HomePage;
