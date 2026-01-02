export default function About() {
  return (
    <div className="max-h-dvh w-full border-t-2 border-b-2 border-dashed">
      <h1 className="text-center text-4xl text-gray-600 m-12 ">
        Get To Know Me
      </h1>
      <div className="flex justify-center items-start w-full min-h-dvh  flex-col gap-9 md:flex-row md:max-w-5xl max-w-100  mx-auto">
        <div className="md:w-[60%] w-full">
          <div className="flex flex-col border-2 p-11 gap-6 bg-gray-500 text-white rounded-2xl hover:text-gray-500 hover:bg-white transition-colors duration-300">
            <h1 className="font-bold text-2xl underline underline-offset-3">
              Who I Am
            </h1>
            <p>
              I'm a curious and driven B.Tech student specializing in Electrical
              and Electronics Engineering at Banasthali Vidyapith, Rajasthan. As
              a tech enthusiast and aspiring software engineer, I'm passionate
              about bridging the gap between hardware and software. My journey
              in technology is fueled by an insatiable curiosity to understand
              how things work and a desire to create meaningful solutions. I
              believe in continuous learning and am always eager to explore new
              technologies and methodologies in the ever-evolving tech
              landscape.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-[35%] w-full">
          <div className="flex flex-col border-2 p-4 rounded-2xl bg-gray-500 text-white rounded-2xl hover:text-gray-500 hover:bg-white transition-colors duration-300">
            <h1>B.Tech in Computer Science and Engineering</h1>
            <h2>Banasthali Vidyapith</h2>
            <h3>Expected 2028</h3>
            <i class="fa-solid fa-calendar"></i>
          </div>
          <div className="flex flex-col border-2 p-4 rounded-2xl bg-gray-500 text-white rounded-2xl hover:text-gray-500 hover:bg-white transition-colors duration-300">
            Hobbies
            <p>
              <a>-painting </a>
              <br></br> -sleeping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
