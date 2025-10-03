import { Github, Linkedin, Mail, Wifi } from "lucide-react";


export default function Footer() {
  return (
    
    <div className="max-w-[1200px] mx-auto h-[400px] w-full bg-slate-700 rounded-t-lg shadow mt-20 p-3 flex flex-col items-center justify-center gap-4">
        <Wifi size={40} className="text-lime-400"/>
       <h1 className="font-bold text-white text-4xl">Let's connect </h1>
     <p className="text-slate-400"> I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
     
    
    <div className="flex space-x-4 text-white">
  <div className="border border-slate-300 bg-blue-600 rounded-full p-4">
  <a href="https://github.com/danhavis1" target="_blank" >
   <Github  />
  </a>
  </div>

  <div className="border border-slate-300 bg-blue-400 rounded-full p-4">
  <a href="https://linkedin.com/in/danmole-havis-a80b622ba" target="_blank" >
   <Linkedin />
  </a>
</div>
 
 <div className="border border-slate-300 bg-slate-500 rounded-full p-4">
  <a href="mailto:danmole.havis@gmail.com" >
    <Mail  />
  </a>
  </div>
</div>


<div className="w-full text-center mt-20">
<hr className="w-full text-slate-500"/>
<p className="text-white text-sm mt-5">HAVISWEBDEV © 2025 All rights reserved.</p>
</div>


    </div>
  )
}

