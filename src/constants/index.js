import { SlSocialInstagram }  from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

import img1 from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "/",
    },
    
    {
      id: "1",
      title: "Services",
      url: "#",
      hasSubmenu: true,
      submenu: [
        { id: 1, title: "Floors", url: "/services" },
        { id: 2, title: "Stairs and Railings", url: "/services" },
        { id: 3, title: "Tiles", url: "/services" }
      ]
    },
    {
      id: "2",
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: "3",
      title: "FAQ",
      url: "/faq",
    },
    {
      id: "4",
      title: "Contact",
      url: "/contact",
    },
  ];

  export const socialMedia = [
    {
      id: "0",
      title: "Instagram",
      iconUrl: SlSocialInstagram,
      url: "https://www.instagram.com",
    },
    {
      id: "1",
      title: "Facebook",
      iconUrl: SlSocialFacebook,
      url: "https://www.facebook.com",
    },
    {
      id: "2",
      title: "Google",
      iconUrl: SlSocialGoogle,
      url: "https://www.google.com",
    },
  ];
  export const projects = [
    { id: 1, image: img1, category: 'Stairs' },
    { id: 2, image: img2, category: 'Floors' },
    { id: 3, image: img3, category: 'Tiles' },
    { id: 4, image: img1, category: 'Stairs' },
    { id: 5, image: img2, category: 'Floors' },
    { id: 6, image: img3, category: 'Tiles' },
  ];
  