import CustomNavbar from "../components/Navbar";
import { Chip } from "@heroui/react";

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
  );
}
