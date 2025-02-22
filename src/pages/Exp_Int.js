import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Accordion,
  AccordionItem,
  Avatar,
  useDisclosure,
} from "@heroui/react";
import CustomNavbar from "../components/Navbar";
import CustomModal from "../components/Modal";
import "./Exp_Int.css";
import searce_logo from "../assets/searce-logo.svg"; 
import daiict_logo from "../assets/DAIICT-Logo.gif";
import suitcase from "../assets/suitcase.png";
import intern_logo from "../assets/learning.png";

export default function ExpInt() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, location, description) => {
    setModalContent({ title, location, description });
    onOpen();
  };

  return (
    <div>
      <CustomNavbar />
      <div className="ml-10 mt-10 mr-10 blur-background">
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Work Experience"
            startContent={
              <Avatar
                isBordered
                color="success"
                radius="md"
                src={suitcase}
                className="custom-avatar"
              />
            }
            title="Work Experience"
          >
            <div className="grid grid-cols-5 gap-3 py-3">
              <div className="col-span-1">
                <Card
                  isPressable
                  className="py-4"
                  onPress={() =>
                    openModal(
                      "Software Engineer",
                      "Pune, India",
                      "Experienced in backend development, cloud computing, and full-stack web applications. Developed and deployed scalable backend services using Node.js, Golang, and TypeScript. Built RESTful APIs with authentication, authorization, and complex database queries. Worked on cloud migrations, assisting in moving workloads from AWS to GCP, including serverless functions and artifact management. Designed and implemented resource tracking systems, dashboards, and workload management tools using the MERN stack. Deployed applications on Kubernetes, utilizing Google Cloud Pub/Sub for event-driven architectures. Experienced in database design and optimization with MongoDB."
                    )
                  }
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      Software Engineer
                    </p>
                    <small className="text-default-500">
                      Oct 2023 - Present
                    </small>
                    <h4 className="font-bold text-large">Searce Inc.</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-lg"
                      src={searce_logo}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </div>

              <div className="col-span-1">
                <Card
                  isPressable
                  className="py-4"
                  onPress={() =>
                    openModal(
                      "Cloud Consultant",
                      "Pune, India",
                      "Engaged with emerging businesses to help them transform their data and scale their operations. Specialized in selling Google Cloud solutions, guiding clients through the process of leveraging cloud technologies to enhance their business performance and drive growth."
                    )
                  }
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      Cloud Consultant
                    </p>
                    <small className="text-default-500">
                      July 2023 - Oct 2023
                    </small>
                    <h4 className="font-bold text-large">Searce Inc.</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-lg"
                      src={searce_logo}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Internship"
            startContent={
              <Avatar
                isBordered
                color="warning"
                radius="lg"
                src={intern_logo}
                className="custom-avatar-1"
              />
            }
            title="Internship"
          >
            <div className="grid grid-cols-5 gap-3 py-3">
              <div className="col-span-1">
                <Card
                  isPressable
                  className="py-4"
                  onPress={() =>
                    openModal(
                      "Cloud Consultant Intern",
                      "Pune, India",
                      "Started with learning the Google’s Cloud capabilities and how can I make use of these to evolve the businesses of the clients. Learned about the different ways to target the correct audience and how to get them on board with us. Pitching the idea of Google’s cloud capabilities and how that can take their business to new heights."
                    )
                  }
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      Cloud Consultant Intern
                    </p>
                    <small className="text-default-500">
                      Jan 2023 - July 2023
                    </small>
                    <h4 className="font-bold text-large">Searce Inc.</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-lg"
                      src={searce_logo}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </div>
              <div className="col-span-1">
                <Card
                  isPressable
                  className="py-4"
                  onPress={() =>
                    openModal(
                      "Research Internship",
                      "Gandhinagar, India",
                      "The research internship was based on the idea of BlockChain. A software was created which facilitated peer to peer money lending."
                    )
                  }
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      Research Internship
                    </p>
                    <small className="text-default-500">
                      June 2022 - July 2022
                    </small>
                    <h4 className="font-bold text-large">DA-IICT</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={daiict_logo}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
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
