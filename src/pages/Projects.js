import React from "react";
import CustomNavbar from "../components/Navbar";
import { Card, Image, CardFooter, useDisclosure } from "@heroui/react";
import CustomModal from "../components/Modal";
import searce_logo from "../assets/searce-logo-2.png";
import daiict_logo from "../assets/daiict-logo-2.jpeg";

export default function Projects() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = React.useState(null);

  const openModal = (title, location, description) => {
    setModalContent({ title, location, description });
    onOpen();
  };

  return (
    <div>
      <CustomNavbar />
      <div className="mx-10 mt-10">
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Resource Management System",
                  "Searce - Internal Project",
                  "Developed a web application to track resource time allocation on and off projects, manage workloads, create dashboards for visualizing utilization, and predict non-billable time off projects. Tools Used: MongoDB, Express, React and Node."
                );
              }}
            >
              <Image
                alt="Searce Logo"
                className="searce-object-cover"
                src={searce_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Resource Management System
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Searce Inc.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Mobiotics",
                  "Searce - Client Project",
                  "Assisted client in migrating Amazon Lambdas to Google Cloud Functions, focusing on storing Lambda layers in the Google Cloud Artifact Registry. Tools Used: JavaScript, GCP and AWS."
                );
              }}
            >
              <Image
                alt="Searce Logo"
                className="searce-object-cover"
                src={searce_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Mobiotics
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Searce Inc.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Dodrio",
                  "Searce - Client Project",
                  "Created back-end services for automatic and manual loan availment and collection for their registered customers using Golang, also deploying the services to Google Cloud Kubernetes. Tools Used: Golang, Pub/ Sub and Kubernetes."
                );
              }}
            >
              <Image
                alt="Searce Logo"
                className="searce-object-cover"
                src={searce_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Dodrio - Globe Telecom
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Searce Inc.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Field Service Management",
                  "Searce - Client Project",
                  "Worked as a back-end engineer in this project. As a back-end engineer I created several CRUD based Node.js APIs for web and mobile applications with authorization checks and authentication. Had made use of several different ways to login and also developed several complex DB queries based APIs. Tools Used: TypeScript, NodeJs, JavaScript, Kubernetes and MongoDB."
                );
              }}
            >
              <Image
                alt="Searce Logo"
                className="searce-object-cover"
                src={searce_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      FSM - Globe Telecom
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Searce Inc.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Music Genre Classification and Audio Recommendation Software",
                  "DA-IICT",
                  "A Machine Learning project with the help of python and using neural network concept, an audio recognition and recommendation software was created. Tools Used: Python, Central Neural Network and Machine Learning."
                );
              }}
            >
              <Image
                alt="DAIICT Logo"
                className="daiict-object-cover"
                src={daiict_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Music Classification Model
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      DA-IICT
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-1">
            <Card
              isPressable
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => {
                openModal(
                  "Money Lending Web Application using BlockChain",
                  "DA-IICT",
                  "The project was based on the concept of Blockchain. A software application was developed to facilitate peer-to-peer money lending. The full-stack application features a user interface built with ReactJS and back-end services written in NodeJS. The database utilized Ganache Blockchain to simulate real-life Blockchain functionality. Additionally, several third-party extensions were integrated to enable transactions using Ethereum cryptocurrency. Tools Used: ReactJs, NodeJs, Ethereum, Ganache and Meta-mask."
                );
              }}
            >
              <Image
                alt="DAIICT Logo"
                className="daiict-object-cover"
                src={daiict_logo}
                width={225}
                height={225}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="grid grid-rows-2">
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      Money Lending - Blockchain
                    </p>
                  </div>
                  <div className="row-span-1">
                    <p
                      className="text-small"
                      style={{ color: "black", textAlign: "left" }}
                    >
                      DA-IICT
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      {modalContent && (
        <CustomModal
          isOpen={isOpen}
          onClose={onOpenChange}
          title={modalContent.title}
          location={modalContent.location}
          description={modalContent.description}
        />
      )}
    </div>
  );
}
