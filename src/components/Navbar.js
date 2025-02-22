import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Brandlogo from "../assets/svp-high-resolution-logo__1_-removebg-preview.png";
import "./Navbar.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useNavbarTitle from "../hooks/NavbarTitle";

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

function CustomNavbar() {
  const [navbartitle, setNavBarTitle] = useNavbarTitle();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNavBarTitle("Home");
        break;
      case "/education":
        setNavBarTitle("Education");
        break;
      case "/exp_intern":
        setNavBarTitle("Experience & Internship");
        break;
      case "/achievements":
        setNavBarTitle("Achievements");
        break;
      case "/projects":
        setNavBarTitle("Projects");
        break;
      case "/skills":
        setNavBarTitle("Skills");
        break;
      case "/research_paper":
        setNavBarTitle("Research Paper");
        break;
      default:
        setNavBarTitle("Home");
    }
  }, [location.pathname, setNavBarTitle]);

  return (
    <Navbar maxWidth="full" className="custom-navbar">
      <NavbarContent justify="start">
        <NavbarBrand className="custom-navbar-brand">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <button>
                <img
                  src={Brandlogo}
                  alt="Brand Logo"
                  style={{ height: "40px", width: "50px" }}
                />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem
                key="home"
                href="/"
                onPress={() => setNavBarTitle("Home")}
              >
                Home
              </DropdownItem>
              <DropdownItem
                key="education"
                href="/education"
                onPress={() => setNavBarTitle("Education")}
              >
                Education
              </DropdownItem>
              <DropdownItem
                key="exp_intern"
                href="/exp_intern"
                onPress={() => setNavBarTitle("Experience & Internship")}
              >
                Experience & Internship
              </DropdownItem>
              <DropdownItem
                key="achievements"
                href="/achievements"
                onPress={() => setNavBarTitle("Achievements")}
              >
                Achievements
              </DropdownItem>
              <DropdownItem
                key="projects"
                href="/projects"
                onPress={() => setNavBarTitle("Projects")}
              >
                Projects
              </DropdownItem>
              <DropdownItem
                key="skills"
                href="/skills"
                onPress={() => setNavBarTitle("Skills")}
              >
                Skills
              </DropdownItem>
              <DropdownItem
                key="research_paper"
                href="/research_paper"
                onPress={() => setNavBarTitle("Research Paper")}
              >
                Research Paper
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <p className="font-roboto">{navbartitle}</p>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-100/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}

export default CustomNavbar;
