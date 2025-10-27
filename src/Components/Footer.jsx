import { useState, useEffect } from "react";
import { FaTwitter, FaSteam, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 border-t border-purple-500/20 shadow-2xl">
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {/* Brand Section */}
          <div className="text-left">
            <div className="flex flex-col items-center md:items-start mb-2">
              <h3 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
                Gamehub
              </h3>
              <p className="text-lg text-gray-400 max-w-xs">
                Your ultimate hub for discovering and supporting indie games.
                Dive into worlds crafted with passion.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-sm text-gray-400">
                Made with{" "}
                <span className="mx-1 text-pink-500 inline-block">♥</span> for
                indie devs
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-lg">
              {[
                { to: "/", label: "Home" },
                { to: "/all-games", label: "All Games" },
                { to: "/about", label: "About" },
              ].map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className="block text-gray-400 hover:text-pink-500 transition-all duration-300 font-medium hover:translate-x-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-lg">
              {[
                {
                  href: "https://twitter.com",
                  Icon: FaTwitter,
                  color: "text-cyan-400",
                  label: "Twitter",
                },
                {
                  href: "https://store.steampowered.com",
                  Icon: FaSteam,
                  color: "text-purple-500",
                  label: "Steam",
                },
                {
                  href: "https://discord.com",
                  Icon: FaDiscord,
                  color: "text-pink-500",
                  label: "Discord",
                },
                {
                  href: "https://github.com",
                  Icon: FaGithub,
                  color: "text-gray-400",
                  label: "GitHub",
                },
              ].map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${social.color} hover:text-pink-500 transition-all duration-300 font-medium hover:translate-x-2`}
                    aria-label={social.label}
                  >
                    <social.Icon className="mr-2 inline text-xl" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/10 pt-4 flex flex-col md:flex-row justify-between items-center text-center text-xl text-gray-400">
          <p>&copy; {currentYear} Gamehub. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 md:mt-0">
            {[
              { to: "/", label: "Privacy Policy" },
              { to: "/", label: "Terms of Service" },
              { to: "/", label: "Cookie Policy" },
            ].map((item) => (
              <li key={item.to}>
                <a
                  href={item.to}
                  className="hover:text-purple-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
