import profile from "./assets/proffile.jpeg";
export default function Home() {
  return (
    <div className="flex flex-col-reverse w-full justify-between items-center md:flex-row px-4">
      <div className="flex justify-end flex-col items-start md:w-[65%] px-27 gap-5 py-17">
        <h1 className="font-extrabold text-5xl text-amber-500 ">Hi There!</h1>
        <h2 className="font-extrabold text-7xl text-white [-webkit-text-stroke:2px_gray] hover:text-gray-500 transition-colors duration-300">
          I'M SHREYA
        </h2>
        <p className="w-full text-gray-700 p-7 border-gray-500 border-2 rounded-2xl justify-center items-center md:p-12 hover:border-white hover:text-white hover:bg-gray-400 transition-colors duration-300">
          Hi, I’m currently pretending to be a professional while building this
          website as a “practice project.” If you’re impressed, thank you — if
          you’re not… please refresh the page, it might work better the second
          time. I enjoy learning new things, breaking them immediately, and then
          fixing them like a hero in my own coding drama. One day this will be a
          serious portfolio. Today? We vibe.
        </p>
      </div>
      <div className="flex w-64 h-64 rounded-full object-overflow-hidden md:w-[35%] md:items-center md:justify-center">
        <img
          src={profile}
          alt="profile"
          className=" object-cover rounded-full md:w-64 md:h-64 ring-4 ring-transparent hover:ring-amber-400 transition duration-300"
        ></img>
      </div>
    </div>
  );
}
