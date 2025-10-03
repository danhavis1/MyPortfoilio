import { Folder, MoveRight, Swords, User } from "lucide-react";
import { Link } from "react-router";
import Pic from "../assets/WhatsApp Image 2025-08-27 at 4.23.35 AM.jpeg";
import Board from "../assets/WhatsApp Image 2025-09-08 at 4.48.29 AM.jpeg";
import New from "../assets/41a8da18-f189-4c66-92a6-6789c58e9814.jpg"

export default function Home() {
  return (
    <div className="max-w-[1200px]  mx-auto  p-2 ">
      <section
        className="flex flex-col justify-center items-center p-2 gap-6  bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D')]  bg-cover 
            bg-left-center
            bg-no-repeat 
            h-screen 
            w-full "
      >
        <img
          src={Pic}
          alt="pic"
          className="rounded-[50%] h-[150px] w-[150px]"
        />
        <h1 className="text-6xl  text-green-400 font-bold">Hi, Im Havis</h1>
        <p className=" text-green-400 font-bold text-md text-center">
          A Frontend developer based in Lagos , Creating a good and substainable
          <br />
          website for seemless digital experiences. Explore my work and let’s
          discuss your project!
        </p>
        <button className="btn btn-border border-green-400 text-green-400 hover:bg-green-700 hover:text-black bg-transparent font-bold rounded-md w-[200px] ">
          Projects{" "}
        </button>
      </section>

      <section className=" flex flex-col items-center  justify-center h-[500px]  gap-4 bg-slate-700 rounded p-3">
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
          rhythm of good music , losing myself <br />  in the captivating flow
          of melodies. You can reach me at{" "}
          <Link to="/contact">
            <span className="text-green-400">CONTACT ME</span>
          </Link>
        </p>
        <p className="text-white font-bold">
          Driven by curiosity and a commitment to excellence, I am passionate
          about delivering impactful digital
          <br /> solutions and continuously improving my skills.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 p-2 mt-18 ">
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
              <p>JWT</p>
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
      </section>

      <section className="flex flex-col justify-center items-center gap-4 mt-25">
        <Folder size={40} className="text-yellow-400" />
        <h1 className="font-bold text-4xl text-white">Projects</h1>
        <p className="text-slate-400">
          Here are some of the projects I've worked on.
        </p>
        <div className="flex items-center justify-between gap-6 mt-10">
          <div className="border border-slate-400 rounded-md  h-[600px] w-[350px] p-3 gap-4 text-white flex flex-col ">
            <img src={Board} alt="pic" className="w-full h-[150px]" />
            <h2 className="font-bold text-2xl">Cliniccare</h2>
            <hr className="text-slate-400" />
            <p className="text-slate-400 ">
              Comprehensive tools designed to enhance efficiency, improve
              patient care, and streamline hospital operations.
            </p>

            <h3 className="font-bold text-md  ">Technologies</h3>
            <div className="flex items-center justify-between flex-wrap font-bold text-slate-400 gap-3">
              <p>React</p>
              <p>Tailwind Css</p>
              <p>Daisy UI</p>
              <p>Javascript</p>
              <p>Express</p>
            </div>

           <a href="https://clinicare-mgmt-app.vercel.app/">
            <button className="mt-20 border rounded w-[100px] items-center font-bold text-md p-2 hover:">
              Demo
            </button>
            </a>
          </div>

          <div className="border border-slate-400 rounded-md   h-[600px] w-[350px] p-3 gap-4 text-white flex flex-col ">
            <img src={New} alt="pic" className="w-full h-[150px]" />
            <h2 className="font-bold text-2xl">TvMaze</h2>
            <hr className="text-slate-400" />
            <p className="text-slate-400 ">
              TvMaze is an application that helps user serarch for the latest
              movies and Tv shows
            </p>

            <h3 className="font-bold text-md  ">Technologies</h3>
            <div className="flex items-center justify-between flex-wrap font-bold text-slate-400 gap-3">
              <p>React</p>
              <p>Bootstrap</p>
              <p>Javascript</p>
            </div>
    
           <a href="https://t-vreact.vercel.app">
            <button className="mt-20 border rounded w-[100px] items-center font-bold text-md p-2 cursor-pointer ">
              Demo
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
