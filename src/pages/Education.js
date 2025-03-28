import React from "react";
import { Helmet } from "react-helmet";
import CustomNavbar from "../components/Navbar";
import { Tab, Tabs } from "@heroui/react";
import "./Education.css";

export default function Education() {
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
        <div className="flex flex-col ml-10 mt-10 mr-10 max-w-screen">
          <Tabs
            aria-label="Tabs"
            color="primary"
            isVertical
            variant="light"
            classNames={{
              tabContent: "text-black font-bold font-roboto text-lg",
            }}
          >
            <Tab key="high_school" title="High School">
              <div className="blur-background">
                <p className="text-4xl text-purple-400 font-bold font-serif">
                  Al Khor International School - Doha, Qatar
                </p>
                <p className="text-xl text-purple-300">2007 - 2019</p>
                <br />
                <p className="text-lg text-purple-200">
                  CBSE Board Examination- Grade 12 (Percent) [2019]: 82.2%
                </p>
                <p className="text-lg text-purple-200">
                  CBSE Board Examination- Grade 10 (CGPA) [2017]: 10/ 10
                </p>
              </div>
            </Tab>
            <Tab key="university" title="University">
              <div className="blur-background">
                <p className="text-4xl text-purple-400 font-bold font-serif">
                  Dhirubhai Ambani Institute of Information and Communication
                  Technology - Gandhinagar, India
                </p>
                <p className="text-xl text-purple-300">July 2019 - July 2023</p>
                <br />
                <p className="text-lg text-purple-200">
                  B.Tech. in ICT with honors (minors in CS) - CPI: 7.46/ 10
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
