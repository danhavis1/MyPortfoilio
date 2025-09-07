import { Folder, MoveRight, Swords, User } from "lucide-react";
import { Link } from "react-router";
import Pic from "../assets/WhatsApp Image 2025-08-27 at 4.23.35 AM.jpeg"

export default function Home() {
  return (
    <div className="max-w-[1200px]  mx-auto  p-2 ">
    
      <div className="flex flex-col justify-center items-center p-2 gap-6">
        <img
          src={Pic}
          alt="pic"
          className="rounded-[50%] h-[150px] w-[150px]"
        />
        <h1 className="text-6xl text-white font-bold">Hi, Im Havis</h1>
        <p className="text-white font-bold text-md text-center">
          A Frontend developer based in Lagos , Creating a good and substainable
          <br />
          website for seemless digital experiences. Explore my work and let’s
          discuss your project!
        </p>
        <button className="btn btn-border border-green-400 text-green-400 hover:bg-green-700 hover:text-black bg-transparent font-bold rounded-md w-[200px] ">
          Projects{" "}
        </button>
      </div>

      <div className=" flex flex-col items-center  justify-center h-[400px] mt-30 gap-4 bg-slate-700 rounded p-3">
        <User size={40} className="bg-green-400 rounded-full" />
        <h1 className="text-3xl text-white font-bold">About Me</h1>
        <p className="font-bold text-white">
          I am a Frontend developer with over 2 years of experience creating
          modern, scalable web applications. My <br />
          expertise includes building intuitive front-end interfaces with{" "}
          <span className="text-xl text-green-400">
            React, Tailwind CSS and Daisy UI{" "}
          </span>
        </p>
        <p className="text-white font-bold ">
          {" "}
          I tried the path of minialism, Finding beauty in simplicity and order.
          When I'm not crafting beautiful web
          <br /> experiences, you can find me swimming or just getting into the
          rhythm of good music , losing myself <br />
          in the captivating flow of melodies. You can reach me at{" "}
          <Link to="/contact">
            <span className="text-green-400">CONTACT ME</span>
          </Link>
        </p>
        <p className="text-white font-bold">
          Driven by curiosity and a commitment to excellence, I am passionate
          about delivering impactful digital
          <br /> solutions and continuously improving my skills.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-2 mt-18 ">
        <Swords size={40} className="text-green-400" />
        <h1 className="font-bold text-white text-3xl">Technologies</h1>
        <p className="font-bold text-slate-300">
          This is a collection of technologies I have worked with.
        </p>
        <div className="flex justify-between gap-4 mt-15">
          <div className="w-[350px] h-[300px] bg-slate-700 border border-slate-500 rounded flex flex-col items-center gap-3">
            <div className="flex flex-col items-center justify-center gap-3 rounded w-[300px] h-[100px] bg-[#1e293b] text-white  ">
              <h1 className="font-bold text-xl">Front-End</h1>
              <hr className="w-full text-slate-400" />
              <p className="text-white ">Frontend Tech used in my projects</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center p-2 font-bold text-white">
              <p>React</p>
              <p>Html</p>
              <p>Tailwind CSS</p>
              <p>DaisyUI</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Lucide</p>
              <p>Font Awesome</p>
            </div>
          </div>

          <div className="w-[350px] h-[300px] bg-slate-700 border border-slate-500 rounded flex flex-col items-center gap-3">
            <div className="flex flex-col items-center justify-center gap-3 rounded w-[300px] h-[100px] bg-[#1e293b] text-white   ">
              <h1 className="font-bold text-xl">Back-End</h1>
              <hr className="w-full text-slate-400" />
              <p className="text-white ">Backend Tech used in my projects</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center p-2 font-bold text-white">
              <p>Node.js</p>
              <p>Express</p>
              <p>MongoDb</p>
              <p>REST API </p>
            </div>
          </div>

          <div className="w-[350px] h-[300px] bg-slate-700 border border-slate-500  rounded flex flex-col items-center gap-3">
            <div className="flex flex-col items-center justify-center gap-3 rounded w-[300px] h-[100px] bg-[#1e293b] text-white   ">
              <h1 className="font-bold text-xl">Tools and API's</h1>
              <hr className="w-full text-slate-400" />
              <p className="text-white ">Tools and API's used in my projects</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4  items-center p-2 font-bold text-white">
              <p>Git</p>
              <p>Github</p>
              <p>Vercel</p>
              <p>Vs Code </p>
              <p>Prettier</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-25">
      <Folder size={40} className="text-yellow-400"/>
      <h1 className="font-bold text-4xl text-white">Projects</h1>
      <p className="text-slate-400">Here are some of the projects I've worked on.</p>
      
      </div>
    </div>
  );
}
