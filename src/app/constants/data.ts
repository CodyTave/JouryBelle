import {
  cheveux,
  epilation,
  manucure,
  maquillage,
  mariees,
  meso,
  pedicure,
  soinHydra,
  soinVisage,
} from "@/assets";
import { StaticImageData } from "next/image";

export const whatsappNumber = "+212615630298";

export const navlinks = [
  {
    id: 1,
    title: "SERVICES",
    link: "/services",
  },
  {
    id: 2,
    title: "A PROPOS",
    link: "/about",
  },
  {
    id: 3,
    title: "CONTACT",
    link: "/contact",
  },
];

export const socials = [
  {
    id: "instagram",
    title: "INSTAGRAM",
    link: "https://www.instagram.com/jourybelle.ma/",
  },
  {
    id: "facebook",
    title: "FACEBOOK",
    link: "https://www.facebook.com/jourybelle.ma/",
  },
];
export const contact = [
  {
    id: "phone",
    content: "+212 6 15 63 02 98",
    link: "tel:+212 6 15 63 02 98",
  },
  {
    id: "address",
    content: "Bd Mohamed Ibnou Hayssoun 31, SIDIMOUMEN, Casablanca, Morocco",
    link: "https://www.google.com/maps/place/Casablanca/@33.578905,7.588445,11z/data=!3m1!4b1!4m5!3m4!1s0x12f0b7c3a7d0b5a3:0x2c1b0b9c7e0f5e3!8m2!3d33.5886!4d-7.61149",
  },
];

export const Services: {
  id: number;
  title: string;
  slug: string;
  mainFrame: StaticImageData;
  description: string;
}[] = [
  {
    id: 1,
    title: "Soins du visage",
    slug: "soin-visage",
    mainFrame: soinVisage,
    description: `Plongez dans l'univers des soins du visage chez Joury Belle. Que ce soit pour une hydratation profonde, une lutte contre le vieillissement, ou simplement pour un éclat naturel, nos traitements personnalisés sont là pour répondre à tous vos besoins. Votre peau mérite le meilleur !`,
  },
  {
    id: 2,
    title: "Manucure",
    slug: "manucure",
    mainFrame: manucure,
    description: `Vos mains sont votre carte de visite. Offrez-leur une manucure d'exception chez Joury Belle. Des couleurs tendances, des soins nourrissants et un fini impeccable pour révéler l'élégance de vos mains`,
  },
  {
    id: 3,
    title: "Soin HydraFacial",
    slug: "soin-hydrafacial",
    mainFrame: soinHydra,
    description: `Rafraîchissez et réjuvenez votre peau avec notre soin hydra facial exclusif. Une technologie avancée pour nettoyer, hydrater et illuminer votre peau, laissant un teint éclatant et sain.`,
  },
  {
    id: 4,
    title: "Pedicure medicale",
    slug: "pedicure",
    mainFrame: pedicure,
    description: `Prenez soin de vos pieds avec notre pédicure médicale. Traitement expert pour les pieds fatigués, secs ou avec des besoins spécifiques. Marchez en beauté et en confort avec Joury Belle.`,
  },
  {
    id: 5,
    title: "Maquillage",
    slug: "maquillage",
    mainFrame: maquillage,
    description: `Exprimez votre style unique avec notre maquillage professionnel. Des looks naturels aux créations les plus audacieuses, notre équipe transformera votre vision en réalité.`,
  },
  {
    id: 6,
    title: "Mariees",
    slug: "mariees",
    mainFrame: mariees,
    description: `Votre mariage, un moment magique. À Joury Belle, nous sommes spécialisés dans la création de looks de mariée époustouflants. Du maquillage à la coiffure, nous nous assurons que vous soyez la plus belle pour dire 'oui'.`,
  },
  {
    id: 7,
    title: "Soins Cheveux",
    slug: "soin-cheveux",
    mainFrame: cheveux,
    description: `Vos cheveux, notre passion. À Joury Belle, nous offrons une gamme de soins capillaires personnalisés pour revitaliser, nourrir et embellir vos cheveux. Découvrez la transformation avec nos experts capillaires.`,
  },
  {
    id: 8,
    title: "Epilation",
    slug: "epilation",
    mainFrame: epilation,
    description: `Profitez d'une peau lisse et soyeuse avec nos méthodes d'épilation professionnelles. Douceur, précision et confort pour une expérience d'épilation inégalée.`,
  },
  {
    id: 9,
    title: "Mesoiherapie Capillaire",
    slug: "meso",
    mainFrame: meso,
    description: `Redonnez vie à vos cheveux avec notre traitement de mésothérapie capillaire. Une solution innovante pour renforcer, densifier et stimuler la croissance de vos cheveux. Cheveux plus forts, plus épais, naturellement.`,
  },
];

export const aboutData = `Plongez dans l'univers des soins du visage chez Joury Belle. Que ce soit pour une hydratation profonde,
 une lutte contre le vieillissement, ou simplement pour un éclat naturel,
  nos traitements personnalisés sont là pour répondre à tous vos besoins. Votre peau mérite le meilleur !`;
