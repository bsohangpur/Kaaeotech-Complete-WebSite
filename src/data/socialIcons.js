import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
  } from "react-icons/fa";  

const socialIcons = [
    {
      icon: FaFacebook,
      colorScheme: "facebook",
      href: "https://www.facebook.com/profile.php?id=100089098420395",
    },
    { icon: FaTwitter, colorScheme: "twitter", href: "https://twitter.com/kaaeotech" },
    {
      icon: FaInstagram,
      colorScheme: "pink",
      href: "https://www.instagram.com/kaaeotechsolutions/",
    },
    {
      icon: FaWhatsapp,
      colorScheme: "whatsapp",
      href: "https://api.whatsapp.com/send?phone=919700836220",
    },
    { icon: FaEnvelope, colorScheme: "teal", href: "mailto:kaaeotechsolutions@gmail.com" },
    { icon: FaPhone, colorScheme: "blue", href: "tel:+91 9700836220" },
  ];

  export default socialIcons;