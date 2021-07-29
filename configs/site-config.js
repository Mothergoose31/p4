
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Joseph Alvarenga Beech. All Rights Reserved.`,
  author: {
    name: "Joseph Alvarenga Beech",
    accounts: [
      {
        url: "https://github.com/Mothergoose31",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/BeechNathaniel",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.instagram.com/joseph_n.b/",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaInstagram />
      },
      
      {
        url: "https://www.linkedin.com/in/joseph-beech/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      
      {
        url: "mailto:josephalvarengabeech@protonmail.com",
        label: "Mail Joseph",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
