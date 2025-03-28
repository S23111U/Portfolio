import React from "react";
import { Helmet } from "react-helmet";
import CustomNavbar from "../components/Navbar";
import "./Achievements.css";

export default function Achievements() {
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
        <div className="blur-background mt-10 mx-10">
          <table>
            <tr>
              <td>Google Cloud Certified</td>
              <td>Associate Cloud Engineer</td>
              <td>Nov 2023</td>
            </tr>
            <tr>
              <td>Google Cloud Certified</td>
              <td>Cloud Digital Leader</td>
              <td>Apr 2023</td>
            </tr>
            <tr>
              <td>CBSE Board Examination - Grade 12</td>
              <td>Physics School Topper</td>
              <td>Mar 2019</td>
            </tr>
            <tr>
              <td>Inter House IT Quiz - Grade 12</td>
              <td>1st position</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Qatar Cluster Football U - 19</td>
              <td>3rd position</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Al Khor International School - Grade 11</td>
              <td>Subject Award - Mathematics</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Carnegie Mellon University - Qatar</td>
              <td>MindCraft - Certification of Participation</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>CBSE Board Examination- Grade 10</td>
              <td>General Proficiency</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Youth Cricket Academy</td>
              <td>Cricket tour of Sri Lanka</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>British Safety Council</td>
              <td>Entry Level Award in Workplace Hazard Awareness (Entry 3)</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>Australian National Chemistry Quiz</td>
              <td>Certificate of Distinction (Junior Division Year 8)</td>
              <td>2014</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
