import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col bg-amber-500 py-8">
      <div className="flex justify-center items-center gap-5 flex-col">
        <h1 className="font-black text-3xl ">Get To Know Me</h1>
        <h4 className="text-gray-700">Don't be Shy, Make the first move.</h4>
        <h2 className="text-gray-700 ">Feel free to reach out!</h2>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/shreyabhardwaj354" className="text-white">
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.instagram.com/sh_0506ivbz?igsh=dXFnNnkzY2Fvbjh3"
            className="text-white"
          >
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/feed/" className="text-white">
            <FaLinkedin size={40} />
          </a>
          <a href="https://x.com/home?lang=en" className="text-white">
            <FaTwitter size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
