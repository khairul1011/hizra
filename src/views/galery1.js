import React from "react"

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// @notus-pro/react
import Blogs1 from "@notus-pro/react/Blogs1"

const props = {
  heading3: {
    color: "emerald",
    subtitle: "Our latest blogposts",
    title: "Gallery of Hizratech",
    description:
      " ",
    alignment: "center",
  },
  cards: [
    {
        image: "/static/media/a.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/b.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/c.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/d.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/e.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
  ],
}

export default function galery1() {
  return (
    <>
    <Navbar transparent />
      <Blogs1 {...props} />
      <Footer />
    </>
  )
}