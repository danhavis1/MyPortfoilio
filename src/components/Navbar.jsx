import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [darkMode , setDarkMode] = useState(false)

  return (
    <div className={ `max-w-[1080px] mx-auto flex justify-between items-center p-2 mt-2 ${ darkMode ? "bg-gray-900 text-white " : "text-slate-600 bg-gradient-to-r from-white to-purple-50"}  `}>
      <Link to="/">
        {/* <Sun size={60}  /> */}
       <h2 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent ">Danmole Havis</h2>
      </Link>
      <div className="flex justify-between gap-10  font-md  text-md font-medium text-slate-600 
      ">

        <a href="#home" className="hover:border-b-2 border-purple-600">Home</a>
         <a href="#about" className="hover:border-b-2 border-purple-600">About</a>
          <a href="#skils" className="hover:border-b-2 border-purple-600">Skills</a>
          <a href="#projects" className="hover:border-b-2 border-purple-600">Projects</a>
       
      </div>

      <div className="flex gap-6">
         <Link to="/contact">
          <p className="font-medium text-xl">Contact</p>
        </Link>
           <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg transition-colors ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 "
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 " />
          )}
        </button>
      </div>
    </div>
  );
}
