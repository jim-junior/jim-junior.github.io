import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaMastodon,
  FaMedium,
} from "react-icons/fa";
import { SiCncf } from "react-icons/si";

const SOCIAL_PLATFORMS = [
  {
    name: "GITHUB",
    url: "https://github.com/jim-junior",
    icon: <FaGithub />,
  },
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/jim-junior-beingana/",
    icon: <FaLinkedin />,
  },
  {
    name: "MEDIUM",
    url: "https://jimjunior.medium.com/",
    icon: <FaMedium />,
  },
  {
    name: "DEV.TO",
    url: "https://dev.to/jimjunior",
    icon: <FaDev />,
  },
  {
    name: "MASTODON",
    url: "https://infosec.exchange/@jimjunior",
    icon: <FaMastodon />,
  },
  {
    name: "CNCF",
    url: "https://community.cncf.io/u/mm8h43/",
    icon: <SiCncf />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-200/20 bg-zinc-50 dark:bg-zinc-900">
      <div className="text-[0.6875rem] uppercase tracking-widest text-zinc-500">
        © 2024 JIM JUNIOR. ENGINEERED WITH PRECISION.
      </div>
      <div className="flex gap-6">
        {SOCIAL_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            className="text-zinc-500 hover:text-[#0053a1] transition-colors flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.icon}
            <span className="sr-only">{platform.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
