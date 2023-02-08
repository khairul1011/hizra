import React from "react"
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// @notus-pro/react
import Hero4 from "@notus-pro/react/Hero4"
import Hero5 from "@notus-pro/react/Hero5"
import Blogs1 from "@notus-pro/react/Blogs1"
import Pricing1 from "@notus-pro/react/Pricing1"
import NavbarLinks from "@notus-pro/react/NavbarLinks"
import HeaderVideoTitle from "@notus-pro/react/HeaderVideoTitle"
import PreFooterLarge from "@notus-pro/react/PreFooterLarge"
import FooterSmall from "@notus-pro/react/FooterSmall"

import "@notus-pro/react/tailwind.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
// texts as props
const blogs1 = {
  heading3: {
    color: "emerald",
    subtitle: "Our latest blogposts",
    title: "Check the news for this month",
    description:
      "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    alignment: "center",
  },
  cards: [
    {
      image: "/notus-pro-react/static/media/guitar-play.9166dc41.jpg",
      subtitle: "All the beautiful places",
      title: "Research by Bang & Olufsen on city sounds and music",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/thomas.955545d6.jpg",
      subtitle: "Spectrum Boats",
      title: "Data Virtualization and Boats Startups",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/ashim.cd8293b4.jpg",
      subtitle: "Flying on pandemic",
      title: "New Challenges when you want to fly to new areas",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/dane.5b2e174d.jpg",
      subtitle: "Work from Home",
      title: "How meetings and behaviour are changing",
      size: "md",
      link: { href: "#pablo" },
    },
  ],
}
const hero4 = {
  heading2badge: {
    badge: { color: "pink", children: "Lost angels" },
    title: "Why did you last so much, nobody knows",
    description:
      "There will come a day, when you'll fall again, and you know this, but like myself, you too have some angels that help you.",
  },
  leftCardProps: {
    image: "/notus-pro-react/static/media/img-1.f2fd521a.jpg",
    title: "Notus Design System",
    description:
      "That’s my skill, I like to create things that last many years. I’m not really specifically talented at anything except for the ability to learn. That's it, see you at top...",
  },
  rightCardInfoIconProps: {
    color: "orange",
    icon: "fas fa-smile-beam",
    title: "Best Quality",
    description:
      "It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    gradient: false,
  },
  rightCardBlogImageProps: {
    color: "lightBlue",
    icon: "fas fa-palette",
    title: "Awesome Design",
    description:
      "As we live, our hearts turn colder. Cause pain is what we go through as we become older.",
    gradient: false,
  },
  rightCardContactUsTitleProps: {
    color: "red",
    icon: "fas fa-running",
    title: "Fast Development",
    description:
      "We’re not always in the position that we want to be at. We’re constantly growing.",
    gradient: false,
  },
  rightCardInfoImageProps: {
    color: "emerald",
    icon: "fas fa-glasses",
    title: "Super Fresh",
    description:
      "When we lose family over time. What else could rust the heart more over time? Blackgold.",
    gradient: false,
  },
}
const hero5 = {
  heading2badge: {
    badge: { color: "pink", children: "Fight hard", round: true },
    title: "It's time to know",
    description:
      "Go and show them how strong you are. Leave them with their jaws to the ground, and hit them so that they faint on the ropes. Since you've got talent, you have to wear a crown.",
    alignment: "center",
  },
  infoAreas: [
    {
      color: "lightBlue",
      icon: "fas fa-cog",
      title: "Social Conversation",
      description:
        "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
      link: { children: "More about us", href: "#pablo" },
    },
    {
      color: "emerald",
      icon: "fas fa-atom",
      title: "Analyze Performance",
      description:
        "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
      link: { children: "Learn about our products", href: "#pablo" },
    },
    {
      color: "orange",
      icon: "fas fa-globe-europe",
      title: "Measure Conversions",
      description:
        "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
      link: { children: "Check our documentation", href: "#pablo" },
    },
  ],
}
const pricing1 = {
  title: "Choose a plan for your next project",
  firstButtonText: "Freelancer",
  secondButtonText: "Enterprise",
  defaultOpen: 1,
  description:
    "You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund.",
  cardinfoiconProps: {
    headText: "Standard",
    price: "$25",
    unit: "per month",
    list: [
      { feature: "20GB", text: "File Storage" },
      { feature: "15", text: "Users/project" },
      { feature: "4.000", text: "Internal messages" },
    ],
    link: { href: "#pablo", children: "Request a demo" },
  },
  cardblogimageProps: {
    headText: "Premium",
    price: "$59",
    unit: "per month",
    list: [
      { feature: "50GB", text: "File Storage" },
      { feature: "100", text: "Users" },
      { feature: "Premium", text: "Support" },
    ],
    link: { href: "#pablo", children: "Request a demo" },
  },
  cardcontactustitleProps: {
    headText: "Gold",
    price: "$100",
    unit: "per month",
    list: [
      { feature: "200GB", text: "File Storage" },
      { feature: "Unlimited", text: "Users" },
      { feature: "Premium", text: "Support" },
    ],
    link: { href: "#pablo", children: "Request a demo" },
  },
  cardinfoimageProps: {
    headText: "Platinum",
    price: "$135",
    unit: "per month",
    list: [
      { feature: "500GB", text: "File Storage" },
      { feature: "Premium", text: "Users" },
      { feature: "No time", text: "Tracking" },
    ],
    link: { href: "#pablo", children: "Request a demo" },
  },
}
const navbarlinkslanding2 = {
  color: "dark",
  type: "fixed",
  logoImage:
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/logo.png",
  logoText: "Creative Tim",
  logoLink: { to: "/" },
  socials: [
    {
      icon: "facebook",
      text: "Share on Facebook",
      link: "https://www.facebook.com/CreativeTim",
    },
    {
      icon: "instagram",
      text: "Follow on Instagram",
      link: "https://www.instagram.com/creativetimofficial/",
    },
    {
      icon: "twitter",
      text: "Tweet on Twitter",
      link: "https://twitter.com/CreativeTim",
    },
    {
      icon: "github",
      text: "Star on Github",
      link: "https://github.com/creativetimofficial",
    },
  ],
  leftLinks: [
    { href: "#pablo", children: "Elements" },
    { href: "#pablo", children: "Sections" },
    {
      dropdown: true,
      text: "Demo Pages",
      items: [
        { disabled: true, children: "Group 1" },
        { href: "#pablo", children: "Demo Page 1" },
        { href: "#pablo", children: "Demo Page 2" },
        { disabled: true, children: "Group 2" },
        { href: "#pablo", children: "Demo Page 3" },
        { href: "#pablo", children: "Demo Page 4" },
        { disabled: true, children: "Group 3" },
        { href: "#pablo", children: "Demo Page 5" },
        { href: "#pablo", children: "Demo Page 6" },
        { disabled: true, children: "Group 4" },
        { href: "#pablo", children: "Demo Page 7" },
        { href: "#pablo", children: "Demo Page 8" },
      ],
    },
  ],
}
const headervideotitle = {
  video: "/notus-pro-react/static/media/Lights - 26607.9ba442f8.mp4",
  title: "Welcome to our most special company",
  subtitle:
    "We’re not always in the position that we want to be at. We’re constantly growing! When you're home, is different, since your parents are helping you.",
  buttonColor: "red",
  buttonText: "Get in contact",
  buttonIcon: "fas fa-play",
  skew: { color: "white" },
}
const prefooterlarge = {
  title: "Thank you for supporting us!",
  subtitle: "Let's get in touch on any of these platforms.",
  socials: [
    {
      icon: "fab fa-twitter",
      buttonProps: { color: "white", outline: false, size: "sm" },
    },
    {
      icon: "fab fa-facebook",
      buttonProps: { color: "white", outline: false, size: "sm" },
    },
    {
      icon: "fab fa-dribbble",
      buttonProps: { color: "white", outline: false, size: "sm" },
    },
    {
      icon: "fab fa-github",
      buttonProps: { color: "white", outline: false, size: "sm" },
    },
  ],
}
const footersmall = {
  copyright: {
    children: "Creative Tim",
    href: "https://www.creative-tim.com",
    target: "_blank",
  },
  links: [
    {
      children: "Creative Tim",
      href: "https://www.creative-tim.com",
      target: "_blank",
    },
    {
      children: "About us",
      href: "https://www.creative-tim.com/presentation",
      target: "_blank",
    },
    {
      children: "Blog",
      href: "https://www.creative-tim.com/blog",
      target: "_blank",
    },
  ],
}

export default function Layanandigi() {
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      <Navbar transparent />
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Hero4 {...hero4} />
        <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        {/* <Pricing1 {...pricing1} /> */}
      </div>
      <Footer />
    </>
  )
}
