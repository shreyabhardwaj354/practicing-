export default function Navbar() {
  return (
    <div className="h-20  flex justify-between items-center p-6 w-full">
      <div className="flex w-[35%] text-3xl font-bold ">S</div>
      <nav
        className="hidden items-center text-gray-600 md:flex md:gap-8
      p-12"
      >
        <a
          href="#/"
          className="hover:text-gray-900 hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Home
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          About
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Experience
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Skills
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Projects
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Services
        </a>
        <a
          href=""
          className="hover:text-white hover:border-b-1  hover:border-b-fuchsia-900 transition-color duration-300 "
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
