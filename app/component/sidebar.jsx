import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons/";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-green flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={200}
          height={200}
          className="rounded-full h-full mb-6"
          src="/image/IMG_20230209_211440_419.jpg"
          alt="IMG_20230209_211440_419.jpg"
          aria-label="IMG_20230209_211440_419.jpg"
        />
        <h2 className="mb-5 pr-7 pl-7 font-normal py-1 text-yellow bg-black rounded-full">{name}</h2>
        <h3 className="bg-white text-black font-semibold px-4 mb-8 ">{role}</h3>
        <p className="mb-2 text-black font-extrabold hover:bg-black hover:text-white">{education[0]}</p>
        <p className="mb-2 hover:bg-black hover:text-white text-black font-extrabold">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-4 py-1 bg-midnight text-white">CONTACT ME</h3>
          <div className="flex flex-row bg-yellow rounded-full text-black px-3 justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[3]}
              aria-label={"medium link"}
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
