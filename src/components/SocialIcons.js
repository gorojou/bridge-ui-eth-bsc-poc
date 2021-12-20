import React from "react";
import { IconGithub, IconPOA, IconTelegram, IconTwitter } from "./social-icons";
import Logo from "../assets/images/themes/core/logos/logo_big.png";

export const SocialIcons = () => {
  const socialItems = [
    {
      icon: <img src={Logo} width="70%"></img>,
      link: "https://www.latam-blockchain.com/",
    },
    {
      icon: <IconTwitter />,
      link: "https://twitter.com/LatamOnChain",
    },
    {
      icon: <IconTelegram />,
      link: "https://t.me/poa_network",
    },
    {
      icon: <IconGithub />,
      link: "https://github.com/poanetwork/token-bridge",
    },
  ];

  return (
    <div className="social-icons">
      {socialItems.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="social-icons-item"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};
