import ShadowButton from "../components/Button";
import { useState } from "react";
import "./Homepage.css";
import CustomNavbar from "../components/Navbar";
import { Card, Image, CardFooter } from "@heroui/react";
import photo from "../assets/Passport_photo.jpg";
import { Helmet } from "react-helmet";

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
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-276LM1RPD4"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-276LM1RPD4');
          `}
        </script>
      </Helmet>
      <div>
        <CustomNavbar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[75vh] mb-32">
        <section className="text-center my-8">
          <h1
            className={`text-4xl font-bold ${fadeClass}`}
            style={{ color: "white" }}
          >
            {h1text}
          </h1>
        </section>
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
      </div>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-3 ml-10">
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={400}
              width={400}
              src={photo}
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-white/80">Software Engineer</p>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-7 mr-10">
          <p className="text-white/100 text-2xl blur-background h-[400px]">
            Beginning my corporate career in January 2023 at Searce Inc., I
            advanced from a Cloud Consultant intern to a Full Stack Developer.
            Initially joining as a Cloud Consultant, my growing interest in
            delivery-driven roles led to a transition into a Software Engineer
            position. I have successfully delivered internal and client projects
            using MERN Stack, Golang, Node.js, and Python, with a focus on
            back-end development and machine learning. With a strong foundation
            in DSA (C++), I am committed to continuous learning and applying my
            skills to create innovative and impactful solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
