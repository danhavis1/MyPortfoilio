import { Folder, Github, Linkedin, MoveRight, Swords, User } from "lucide-react";
import { Link } from "react-router";
import Pic from "../assets/WhatsApp Image 2025-08-27 at 4.23.35 AM.jpeg";
import Board from "../assets/Screenshot 2025-09-28 120940.jpg";
import New from "../assets/Screenshot 2025-09-29 095755.jpg"
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="max-w-[1080px]  mx-auto  p-2 ">
      <section
        className="flex  justify-between items-center p-2 gap-3  
            h-screen 
            w-full bg-gradient-to-r from-white to-purple-50 " id="home"
      >
        <div className="flex flex-col gap-8 items-center p-3 w-[600px]">
        
        <h1 className="text-6xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent  font-bold hover:scale-125">Hi, Im Havis</h1>
        <p className="text-slate-600 text-center font-medium text-xl">
          A Frontend developer based in Lagos ,<br/>Creating a good and substainable
          <br />
          website for seemless digital experiences.<br/> Explore my work and let’s
          discuss your project!
        </p>
        <div className="flex gap-6">
        <button className="btn btn-border border-purple-400 bg-purple-400 text-white hover:bg-purple-700 hover:text-white font-bold rounded-md w-[200px] p-7 ">
          Get In Touch{" "}
        </button>
        <button className="btn btn-border border-slate-100 bg-white text-slate-700 hover:border-blue-500 font-bold rounded-md shadow-sm p-7">Download CV</button>
        </div>
            <div className="flex space-x-4 text-white">
  <div className=" bg-white text-slate-600 rounded-full p-4">
  <a href="https://github.com/danhavis1" target="_blank" >
   <Github  />
  </a>
  </div>

  <div className="bg-white text-slate-600 rounded-full p-4">
  <a href="https://linkedin.com/in/danmole-havis-a80b622ba" target="_blank" >
   <Linkedin />
  </a>
</div>
 
 {/* <div className="border border-slate-300 bg-slate-500 rounded-full p-4">
  <a href="mailto:danmole.havis@gmail.com" >
    <Mail  />
  </a>
  </div> */}
</div>
        </div>
        <img
          src={Pic}
          alt="pic"
          className="rounded-[50%] h-[400px] w-[500px]"
        />
      </section>

      <section className=" flex flex-col items-center  justify-center h-[500px]  gap-4 bg-white rounded p-3 text-slate-700" id="about">
        <User size={40} className="bg-purple-400 text-purple-600 rounded-full" />
        <h1 className="text-4xl  font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
        ">About Me</h1>
        <p className="font-md text-xl ">
          I am a Frontend developer with over 2 years of experience creating
          modern, scalable web applications. My <br />
          expertise includes building intuitive front-end interfaces with{" "}
          <span className="text-xl text-purple-500">
            React, Tailwind CSS and Daisy UI{" "}
          </span>
        </p>
        <p className=" font-md text-xl">
          {" "}
          I tried the path of minialism, Finding beauty in simplicity and order.
          When I'm not crafting beautiful web
          <br /> experiences, you can find me swimming or just getting into the
          rhythm of good music , losing myself <br />  in the captivating flow
          of melodies. You can reach me at{" "}
          <Link to="/contact">
            <span className="text-purple-500 text-xl">CONTACT ME</span>
          </Link>
        </p>
        <p className=" font-md text-xl">
          Driven by curiosity and a commitment to excellence, I am passionate
          about delivering impactful digital
          <br /> solutions and continuously improving my skills.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 p-3 mt-18 text-slate-600 bg-purple-50" id="skils">
        <Swords size={40} className="text-purple-500"/>
        <h1 className="font-bold text-4xl bg-gradient-to-r from-purple-600 to-orange-400 bg-clip-text text-transparent ">Technologies</h1>
        <p className="font-md text-2xl">
          This is a collection of technologies I have worked with.
        </p>
        <div className="flex justify-between gap-4 mt-15  ">
          <div className="w-[350px] h-[500px] bg-white hover:bg-purple-100 border  rounded shadow-md border-none flex flex-col items-center gap-3">
            <div className="flex flex-col items-center justify-center gap-4 rounded w-[300px] h-[100px]  ">
              <h1 className="font-bold text-xl">Front-End Technologies</h1>
              <hr className="w-full text-purple-600" />
              <p className="font-md">Frontend Tech used in my projects</p>
            </div>
            <div className="flex flex-col    gap-4 items-center p-2 font-bold  ">
              <div className="w-full h-3 ">
                <div className="flex justify-between gap-15 ">
              <p className="hover:scale-125 font-medium">React</p>
              <p clasName="text-sm font-medium text-blue-600">90%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
              <p className="hover:scale-125 font-medium">HTML/CSS</p>
              <p clasName="text-sm font-medium text-blue-600">95%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
              <p className="hover:scale-125 font-medium">Tailwind CSS</p>
              <p clasName="text-sm font-medium text-blue-600">80%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
              <p className="hover:scale-125 font-medium ">Javascript</p>
              <p clasName="text-sm font-medium text-blue-600">80%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">Typescript</p>
              <p clasName="text-sm font-medium text-blue-600">80%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              
              
              
           
             
            
             
            </div>
          </div>

          <div className="w-[350px] h-[500px] bg-white hover:bg-purple-100 border border-none rounded shadow-md flex flex-col items-center gap-3">
            <div className="flex flex-col items-center justify-center gap-3 rounded w-[300px] h-[100px]   ">
              <h1 className="font-bold text-xl">Back-End</h1>
              <hr className="w-full text-purple-600" />
              <p className="font-md" >Backend Tech used in my projects</p>
            </div>
            <div className="flex flex-col gap-4 items-center p-2 font-bold">
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">Nodejs</p>
              <p clasName="text-sm font-medium text-blue-600">80%</p>
              </div>
              <div className="h-full bg-black rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">Express</p>
              <p clasName="text-sm font-medium text-blue-600">70%</p>
              </div>
              <div className="h-full bg-pink-300  rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">MongoDB</p>
              <p clasName="text-sm font-medium text-blue-600">85%</p>
              </div>
              <div className="h-full bg-blue-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              
            
              
             <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">REST API</p>
              <p clasName="text-sm font-medium text-blue-600">80%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
              
            </div>
          </div>

          <div className="w-[350px] h-[500px] bg-white hover:bg-purple-100 border border-none shadow-md
            rounded flex flex-col items-center gap-3 text-slate-600">
            <div className="flex flex-col items-center justify-center gap-3 rounded w-[300px] h-[100px]    ">
              <h1 className="font-bold text-xl">Tools and API's</h1>
              <hr className="w-full text-purple-600" />
              <p className="font-md ">Tools and API's used in my projects</p>
            </div>
            <div className="flex flex-col  gap-4  items-center p-2 font-bold ">
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">Git and Github</p>
              <p clasName="text-sm font-medium text-blue-600">85%</p>
              </div>
              <div className="h-full bg-blue-600 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">VsCode </p>
              <p clasName="text-sm font-medium text-blue-600">85%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
               <div className="w-full h-3 mt-8">
                <div className="flex justify-between gap-15 ">
                  <p className="hover:scale-125 font-medium ">Vercel </p>
              <p clasName="text-sm font-medium text-blue-600">85%</p>
              </div>
              <div className="h-full bg-gradient-to-r from-green-300 to-greren-500 rounded-full  transition-all duration-1000 ease-out animate-pulse w-[300px] "></div>
              </div>
             
             
             
              <p>Prettier</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 mt-25 text-slate-600 " id="projects">
        <Folder size={40} className="text-blue-500" />
        <h1 className="font-bold text-6xl  bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</h1>
        <p className="font-medium text-xl">
          Here are some of the projects I've worked on.
        </p>
        <div className="flex items-center justify-between gap-6 mt-10">
          <div className="border border-none rounded-md shadow-xl  h-[600px] w-[500px] p-3 gap-4 text-slate-700 flex flex-col bg-white hover:scale-125">
            <img src={Board} alt="pic" className="w-full h-[200px]" />
            <h2 className="font-bold text-2xl">Cliniccare</h2>
            <hr className="text-slate-400" />
            <p className="text-slate-600 font-md ">
              Comprehensive tools designed to enhance efficiency, improve
              patient care, and streamline hospital operations.
            </p>

            <h3 className="font-bold text-xl text-blue-300  ">Technologies</h3>
            <div className="flex items-center justify-between flex-wrap font-bold text-slate-400 gap-3">
              <p className="border border-none p-2 rounded shadow-md bg-blue-100 text-blue-600">React</p>
              <p className="border border-none p-2 rounded shadow-md bg-blue-100 text-blue-600">Tailwind Css</p>
              <p className="border border-none p-2 rounded shadow-md bg-blue-100 text-blue-600">Daisy UI</p>
              <p className="border border-none p-2 rounded shadow-md bg-blue-100 text-blue-600">Javascript</p>
              <p className="border border-none p-2 rounded shadow-md bg-blue-100 text-blue-600">Express</p>
            </div>

           <a href="https://clinicare-mgmt-app.vercel.app/">
            <button className="mt-20 border rounded w-[100px] items-center font-bold text-md p-2 bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:">
              Demo
            </button>
            </a>
          </div>

          {/* <div className="border border-slate-400 rounded-md   h-[600px] w-[350px] p-3 gap-4 text-white flex flex-col ">
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
          </div> */}
        </div>
      </section>

      {/* <Contact/> */}
    </div>
  );
}
