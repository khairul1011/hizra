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
    title: "Tim Hizratech",
    description:
      "It depends on your friends and companions, it depends on who goes out with you, if they have money, if you have money.",
    alignment: "center",
  },
  infoAreas: [
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Aini",
      jobTitle: "CEO",
      socialLinks: [
        { icon: "twitter", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Fatma",
      jobTitle: "Direktur",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Ayu",
      jobTitle: "Sekretaris",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Herman",
      jobTitle: "Marketing",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Dina",
      jobTitle: "Kepala Toko",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Dea",
      jobTitle: "Kepala Gudang",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Akmal",
      jobTitle: "Kepala Teknisi",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Zaenal",
      jobTitle: "Kepala Toko",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Rizki",
      jobTitle: "Programer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Kahirul",
      jobTitle: "Programer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Rezi",
      jobTitle: "Teknisi",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "whatsapp", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Mr. Yoyok",
      jobTitle: "Kepala Sekolah",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
  ],
}

export default function team() {
  return (
    <>
    <Navbar transparent />
      <Teams1 {...props} />
    <Footer />
    </>
  )
}