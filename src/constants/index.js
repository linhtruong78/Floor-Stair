import { SlSocialInstagram }  from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s10.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'
import s9 from '../assets/s9.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'




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
        { id: 1, title: "Floors", url: "/floors" },
        { id: 2, title: "Stairs and Railings", url: "/stairs" },
        { id: 3, title: "Tiles", url: "/tiles" }
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

  export const servicestuffs = [
    {
      id: "0",
      title: "Floor",
      url: "/floor",
    },
    {
      id: "1",
      title: "Stair",
      url: "/stair",
    },
    {
      id: "2",
      title: "Tiles",
      url: "/tile",
    },
  ];

  export const socialMedia = [
    {
      id: "0",
      title: "Instagram",
      iconUrl: SlSocialInstagram,
      url: "https://www.instagram.com/4h.stairs_and_flooring/",
    },
    {
      id: "1",
      title: "Facebook",
      iconUrl: SlSocialFacebook,
      url: "https://www.facebook.com/DORIS10822",
    },
    {
      id: "2",
      title: "Google",
      iconUrl: SlSocialGoogle,
      url: "https://www.google.com",
    },
  ];
  export const projects = [
    { id: 1, image: s1, category: 'Stairs' },
    { id: 2, image: s2, category: 'Stairs' },
    { id: 3, image: s3, category: 'Stairs' },
    { id: 4, image: s4, category: 'Stairs' },
    { id: 5, image: s5, category: 'Stairs' },
    { id: 6, image: s6, category: 'Stairs' },
    { id: 7, image: s7, category: 'Stairs' },
    { id: 8, image: s8, category: 'Stairs' },
    { id: 9, image: s9, category: 'Stairs' },
    { id: 10, image: f1, category: 'Floors' },
    { id: 11, image: f2, category: 'Floors' },
    { id: 12, image: f3, category: 'Floors' },
  ];
  export const projects2 = [
    { id: 1, image: s1, category: 'Stairs' },
    { id: 2, image: s2, category: 'Stairs' },
    { id: 3, image: s3, category: 'Stairs' },
    { id: 10, image: f1, category: 'Floors' },
    { id: 11, image: f2, category: 'Floors' },
    { id: 12, image: f3, category: 'Floors' },
  ];
export const faq = [
  {
      question: "How long does a typical flooring or tile installation take?",
      answer: "The time depends on the size and complexity of the project, but most installations are completed within a few days."
  },
  {
      question: "Do you offer free consultations or estimates?",
      answer: "Yes, we provide free consultations to assess your project and offer personalized solutions."
  },
  {
    question: "What area do you serve?",
    answer: "We proudly serve the entire Greater Toronto Area (GTA)."
  },
  {
    question: "What type of flooring do you install?",
    answer: "We install hardwood, laminate, vinyl, and tile flooring to suit your preferences and needs.."
  },
  {
    question: "How do you ensure new stairs integrate seamlessly with my existing flooring?",
    answer: "Our team is skilled in matching new stair installations with your existing flooring, this includes precise color matching, material selection, and expert installation techniques."
  },
  {
    question: "What is the best flooring option for high-traffic areas?",
    answer: "For high-traffic areas, we recommend vinyl plank or hardwood. Both options are durable, resistant to wear, and easy to maintain."
  },
  {
      question: "What types of stair renovations do you offer?",
      answer: "We offer a wide range of stair renovation services including full staircase replacement, re-treading (replacing just the step surfaces), and custom railing installations. Whether you're looking to modernize your staircase or simply enhance safety features, we have solutions tailored to your needs."
  },
  {
    question: "Can you install tiles in area other than bathrooms?",
    answer: "Absolutely, we also install tiles in entryways, kitchens, laundry rooms, and even as decorative accents in living rooms. We can help you choose the right tile for any area of your home, ensuring durability and visual appeal."
  },
  {
    question: "How should I prepare my home beforer the installation?",
    answer: "Before installation, we recommend clearing the area of furniture and personal items. Our team will provide additional guidance during your consultation."
  },
  {
    question: "Do you offer maintenance or repair services after installation?",
    answer: "Yes, we offer maintenance and repair services to ensure the longevity of your floors, stairs, and tiles. Regular maintenance can extend the life of your installation."
  },
];
  