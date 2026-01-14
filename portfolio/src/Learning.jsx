import adulting from "./assets/adulting.jpg";
import reading from "./assets/reading.jpg";
import coder from "./assets/Coder.jpg";

export default function Learning() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-13">
      <h1 className="font-extrabold text-4xl ">What Am I Learning !</h1>
      <div className="flex flex-row justify-center items-center gap-7 md:gap-10 flex-wrap">
        <div className="rounded-2xl border-2 p-5 hover:bg-gray-700 hover:text-white transition-colors duration-300">
          <img
            src={adulting}
            className="h-64 rounded-4xl w-64 border-white border-2"
          ></img>
          <h2 className="font-bold text-center mt-2">Adulting</h2>
        </div>
        <div className="rounded-2xl border-2 p-5 hover:bg-gray-700 hover:text-white transition-colors duration-300">
          <img
            className="h-64 rounded-4xl w-64 border-white border-2"
            src={reading}
          />
          <h2 className="font-bold text-center mt-2">Reading</h2>
        </div>
        <div className="rounded-2xl border-2 p-5 hover:bg-gray-700 hover:text-white transition-colors duration-300">
          <img
            src={coder}
            className="h-64 rounded-4xl w-64 border-white border-2"
          ></img>
          <h2 className="font-bold text-center mt-2">Frontend</h2>
        </div>
      </div>
    </div>
  );
}
