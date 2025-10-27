import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="max-w-[1200px]  mx-auto px-4 py-4 mt-9 ml-14">
      <div className="flex flex-col items-start p-2 gap-6 text-slate-600">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-sky-300 to-blue-600  bg-clip-text text-transparent ">Contact.</h1>
        <p className=" font-medium text-md ">
          Get in touch or shoot me an email directly on danmole.havis@gmail.com
        </p>
        <form className="w-[50vw] py-4  space-y-8  ">
          <div className="w-full ">
            <label className="input input-neutral w-full text-black bg-white border-slate-100  shadow-md rounded " >   
              <input
                className="grow"
                name="fullName"
                id="fullName"
                type="text"
                
                placeholder="Name"
              />
            </label>
          </div>
          <div className="w-full ">
            <label className="input input-neutral w-full border-slate-100 shadow-md rounded ">    
              <input
                className="grow"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
              />
            </label>
          </div>
         <textarea name="message" placeholder="Message..." className="w-full  border-slate-100 h-[150px] p-2 bg-white text-black rounded shadow-md" 
         required></textarea>


       <button className="btn btn-border w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold rounded-2xl">Send Message</button>
     
        </form>
        <p className="text-white font-bold ">Go back home<Link to="/"> <MoveRight/></Link></p>
      </div>
    </div>
  );
}
