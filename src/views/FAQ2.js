import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// @notus-pro/react
import Teams6 from "@notus-pro/react/Teams1";
import "@notus-pro/react/tailwind.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


const props = {
    heading3: {
        color: "teal",
        subtitle: "Why",
        title: "Why you speak of me?",
        description:
          "I wonder if you would have done the same when I had to beg at people's doors? I wonder if you would have felt the same as I did when I was chased from people's doors?",
        alignment: "center",
      },
      accordion: {
        color: "pink",
        multiple: false,
        defaultOpened: 0,
        items: [
          {
            title: "How do I order?",
            description:
              "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
          },
          {
            title: "How can I make the payment?",
            description:
              "Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do.",
          },
          {
            title: "How much time does it take to recieve the order?",
            description:
              "Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. Then we lose family over time. What else could rust the heart more over time? Blackgold. There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
          },
          {
            title: "Can I resell the products?",
            description:
              "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
          },
          {
            title: "Where do I find the shipping details?",
            description:
              "It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
          },
        ],
      },
}


export default function FAQ2() {
  return (
    <>
    <Navbar transparent />
      <Teams6 {...props} />
    <Footer />
    </>
  )
}