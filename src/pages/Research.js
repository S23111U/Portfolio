import CustomNavbar from "../components/Navbar";
import { Accordion, AccordionItem } from "@heroui/react";
import { Helmet } from "react-helmet";

export default function Research() {
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
          <Accordion
            variant="splitted"
            style={{
              color: "rgb(255, 179, 124)",
            }}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <span
                  className="accordion-title"
                  style={{
                    color: "rgb(255, 153, 230)",
                  }}
                >
                  <a href="https://drive.google.com/file/d/1Ef8Cpnjz867b8QsWOotB0gymv-sDJvBD/view">
                    Nanobiology
                  </a>
                </span>
              }
              style={{
                backgroundColor: "rgba(104, 101, 246, 0.0)",
              }}
            >
              The paper examines the use of nanotechnology in nanomedicine,
              focusing on advancements in diagnostics, drug delivery, and
              treatment of diseases like cancer and neurodegenerative disorders,
              while addressing associated challenges and risks.
              <p>
                <i>Click title to know more</i>
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={
                <span
                  className="accordion-title"
                  style={{
                    color: "rgb(255, 153, 230)",
                  }}
                >
                  <a href="https://drive.google.com/file/d/17lwMZkBDzoMtNVhLJk9y3z6WjbSveaIW/view?usp=drive_link">
                    Cloud Computing and Modernization: Transforming IT and
                    Business Infrastructure
                  </a>
                </span>
              }
              style={{
                backgroundColor: "rgba(104, 101, 246, 0.0)",
              }}
            >
              This report examines the transformative impact of cloud computing
              on IT and business infrastructure, emphasizing cost savings,
              scalability, and innovation. Drawing from an internship at Searce
              Inc., it highlights key Google Cloud Platform (GCP) services,
              deployment models, and certifications, showcasing cloud
              modernization’s role in driving business efficiency and digital
              transformation.
              <p>
                <i>Click title to know more</i>
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={
                <span
                  className="accordion-title"
                  style={{
                    color: "rgb(255, 153, 230)",
                  }}
                >
                  <a href="https://drive.google.com/file/d/1WwbMChSFLagxpVbmdYspj6rBFUCNPXn2/view">
                    CrowdSource Loan
                  </a>
                </span>
              }
              style={{
                backgroundColor: "rgba(104, 101, 246, 0.0)",
              }}
            >
              This paper presents a peer-to-peer lending platform leveraging
              blockchain technology to eliminate intermediaries and ensure
              secure, transparent transactions. It explores cryptography’s role
              in blockchain, the Proof-of-Work mechanism for verification, and
              outlines a software implementation to support decentralized
              crowdsource lending, addressing inefficiencies in traditional
              funding methods.
              <p>
                <i>Click title to know more</i>
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title={
                <span
                  className="accordion-title"
                  style={{
                    color: "rgb(255, 153, 230)",
                  }}
                >
                  <a href="https://drive.google.com/file/d/13gqRLKf4Q92WOgElPl1-DtI9MzPOruq9/view?usp=drive_link">
                    GaN based HFET
                  </a>
                </span>
              }
              style={{
                backgroundColor: "rgba(104, 101, 246, 0.0)",
              }}
            >
              The document highlights the significance and advancements of
              Gallium Nitride (GaN) based High Electron Mobility Transistors
              (HEMTs). It emphasizes their superior performance over
              silicon-based transistors due to higher electron mobility,
              breakdown voltage, and saturation current. GaN-HEMTs are crucial
              for high-frequency applications and power electronics, though high
              costs limit widespread adoption.
              <p>
                <i>Click title to know more</i>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
