import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/74059664?s=400&u=35b405983077bf2d1bf9bdb02446b4b161dfde18&v=4"}
          alt="Founder"
        />

        <h2>Ujjwal Garg</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ujjwal-garg-1147881b9/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/BRUTAlVision" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
