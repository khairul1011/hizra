import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// @notus-pro/react
import Teams1 from "@notus-pro/react/Teams1";
import "@notus-pro/react/tailwind.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


const props = {
  heading3: {
    color: "orange",
    subtitle: "The entourage",
    title: "It is everything, and it won't change",
    description:
      "It depends on your friends and companions, it depends on who goes out with you, if they have money, if you have money.",
    alignment: "center",
  },
  infoAreas: [
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Ryan Tompson",
      jobTitle: "Web Developer",
      socialLinks: [
        { icon: "twitter", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Romina Hadid",
      jobTitle: "Marketing Specialist",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Alexa Smith",
      jobTitle: "UI/UX Designer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Jenna Kardi",
      jobTitle: "Founder and CEO",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
  ],
}

export default function Example() {
  return (
    <>
    <Navbar transparent />
      <Teams1 {...props} />
    <Footer />
    </>
  )
}