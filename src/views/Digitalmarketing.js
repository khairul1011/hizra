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
import Projects1 from "@notus-pro/react/Projects1"
import Testimonials1 from "@notus-pro/react/Testimonials1"

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

const testimonials1 = {
    heading2: {
      color: "red",
      subtitle: "See our customers opinion",
      title: "Join our world",
      description:
        "Meet Wingman, a robust suite of styled pages and components, powered by Bootstrap 4. The ideal starting point for product landing pages, stylish web-apps and complete company websites.",
      alignment: "left",
    },
    button: { color: "pink", children: "Contact us" },
    mediaplayer: {
      defaultOpened: 0,
      items: [
        {
          title: "Andrew Lino",
          description:
            "Take up one idea. Make that one idea your life, think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part ofyour body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.",
          image: "/notus-pro-react/static/media/team-1.26905a67.jpg",
        },
        {
          title: "Michael Jenos",
          description:
            'Artist is a term applied to a person who engages in an activity deemed to be an art. An artist also may be defined unofficially as "a person who expresses him- or herself through a medium". He is a descriptive term applied to a person who engages in an activity deemed to be an art.',
          image: "/notus-pro-react/static/media/team-2.b81557ef.jpg",
        },
        {
          title: "Rose Arthur",
          description:
            "The simplest visual description uses ordinary words to convey what the writer sees. First he or she must look at the subject – slowly, carefully, and repeatedly, if possible – to identify the parts that make the whole",
          image: "/notus-pro-react/static/media/team-3.c5d0c11c.jpg",
        },
        {
          title: "Lora Jimi",
          description:
            "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..Finding temporary housing for your dog should be as easy as renting an Airbnb.",
          image: "/notus-pro-react/static/media/team-4.639c2559.jpg",
        },
        {
          title: "Mike Ranson",
          description:
            "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..enture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large.",
          image: "/notus-pro-react/static/media/team-5.22135691.jpg",
        },
      ],
    },
  }

const projects1 = {
    heading2: {
      color: "teal",
    //   subtitle: "Have you seen us?",
      title: "Bagaimana Proses Pembuatan Jasa Layanan Digital di Hizratech",
      description:
        " ",
      alignment: "center",
      whiteContent: true,
    },
    cards: [
      {
        icon: "fas fa-headphones",
        color: "lightBlue",
        title: "Konsultasi Layanan",
        description:
          "Kita akan saling berkonsultasi tentang kebutuhan website Anda, seperti fitur yang akan dibuat.",
        link: { href: "#pablo", children: "More details..." },
      },
      {
        icon: "fas fa-shopping-cart",
        color: "emerald",
        title: "Pemesanan Layanan",
        description:
          "Setelah berkonsultasi, selanjutnya Anda bisa memesan jasa pembuatan website kami.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-paper-plane",
        color: "red",
        title: "Pengiriman Konten",
        description:
          "Setelah memesan, Anda bisa mengirim konten untuk kebutuhan website, seperti logo jika dibutuhkan.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-tools",
        color: "blueGray",
        title: "Pembuatan Website",
        description:
          "Setelah mengirim konten, biarkan kami yang membuat website nya untuk Anda. Anda tinggal duduk manis saja.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-file-upload",
        color: "orange",
        title: "Upload Website",
        description:
          "Kami akan mengupload nya ke hosting dan domain yang Anda pilih sehingga website Anda sudah bisa diakses.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-universal-access",
        color: "teal",
        title: "Pemberian Akses",
        description:
          "Kami akan memberikan data login website, hosting, dan lain-lain kepada Anda. Jadi, Anda bisa mengelola website Anda.",
        link: { href: "#pablo", children: "Check more" },
      },
    ],
  }

const hero4 = {
  heading2badge: {
    // badge: { color: "pink", children: "Lost angels" },
    title: "Mengapa Harus Jasa Layanan Digital di Hizratech?",
    description:
      "",
  },
  leftCardProps: {
    image: "https://demos.creative-tim.com/notus-pro-react/static/media/img-1.f2fd521a.jpg",
    title: "Hizratech",
    description:
      "Jasa pembuatan website kami SEO friendly sehingga website Anda mudah ditemukan di mesin pencari.",
  },
  rightCardInfoIconProps: {
    color: "orange",
    icon: "fas fa-rocket",
    title: "SEO Friendly",
    description:
      "Jasa layanan digital kami SEO friendly sehingga website Anda mudah ditemukan di mesin pencari.",
    gradient: false,
  },
  rightCardBlogImageProps: {
    color: "lightBlue",
    icon: "fas fa-dollar-sign",
    title: "Harga Murah",
    description:
      "Kami menawarkan layanan digital dengan harga yang murah sehingga Anda dapat menghemat kantong.",
    gradient: false,
  },
  rightCardContactUsTitleProps: {
    color: "orange",
    icon: "fas fa-mobile",
    title: "Mobile Friendly",
    description:
      "Kami membuat website yang mobile friendly. Desain website Anda akan menyesuaikan ketika dibuka melalui smartphone.",
    gradient: false,
  },
  rightCardInfoImageProps: {
    color: "emerald",
    icon: "fas fa-globe",
    title: "Gratis Hosting dan Domain",
    description:
      "Belum punya hosting? Tenang, kami telah menyediakan hosting dan domain bagi website Anda. Jadi, Anda tidak perlu mengeluarkan biaya lagi.",
    gradient: false,
  },
  rightCardInfoImage2Props: {
    color: "emerald",
    icon: "fas fa-cogs",
    title: "Gratis Maintenance",
    description:
      "Jasa pembuatan website kami menyediakan gratis maintenance. Kami akan memastikan website Anda berjalan dengan baik dan aman dari serangan hacker.",
    gradient: false,
  },
  rightCardContactUsTitle2Props: {
    color: "lightBlue",
    icon: "fas fa-hand-holding-heart",
    title: "Sesuai Keinginan",
    description:
      "Anda ingin fitur tambahan pada website Anda? Tentu, kami bisa membuat website dengan fitur sesuai dengan yang Anda inginkan.",
    gradient: false,
  },
}
const hero5 = {
  heading2badge: {
    // badge: { color: "pink", children: "Fight hard", round: true },
    title: "Bagaimana Proses Pembuatan Jasa Layanan Digital di Hizratech",
    description:
      " ",
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
  video: "https://demos.creative-tim.com/notus-pro-react/static/media/Lights - 26607.9ba442f8.mp4",
  title: "Digital Marketing",
  subtitle:
    "Anda hanya duduk manis, kami yang membuat website untuk Anda",
  buttonColor: "red",
  buttonText: "Konsultasi Gratis",
  buttonIcon: "fas fa-arrow",
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

export default function Digitalmarketing() {
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      <Navbar transparent />
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Hero4 {...hero4} />
        <Projects1 {...projects1} />
        {/* s<Testimonials1 {...testimonials1} /> */}
        {/* <Hero5 {...hero5} /> */}
        <Blogs1 {...blogs1} />
        {/* <Pricing1 {...pricing1} /> */}
      </div>
      <Footer />
    </>
  )
}
