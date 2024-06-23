import React from "react";
import GitHubIcon from "./svgs/GitHub";
import TwitterIcon from "./svgs/Twitter";
import FacebookIcon from "./svgs/Facebook";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://www.facebook.com/akinwumipeter.oni"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <FacebookIcon />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/akinwumi-oni"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/cephasdafree"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <TwitterIcon />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/vividwebdev"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
