import CustomNavbar from "../components/Navbar";
import { Chip } from "@heroui/react";
import { Helmet } from "react-helmet";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "MongoDB",
    "JavaScript",
    "NodeJs",
    "ReactJs",
    "SQL",
    "C++",
    "Python",
    "Git",
    "Golang",
    "ExpressJs",
    "GCP - VM Engine",
    "GCP - GKE",
    "GCP - Pub/ Sub",
    "GCP - Cloud Functions",
    "GCP - Load Balancing",
    "Data Structure & Algorithms",
    "DBMS",
    "OOPS",
    "Computer Networks",
    "OS",
    "Flutter",
  ];

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
        <div className="blur-background mx-10 mt-10">
          <p className="text-2xl text-white/90">Skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <Chip
                key={index}
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
