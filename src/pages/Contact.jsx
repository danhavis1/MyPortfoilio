import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="max-w-[1200px]  mx-auto px-4 py-4 mt-9 ml-14">
      <div className="flex flex-col items-start p-2 gap-6">
        <h1 className="font-bold text-5xl text-white">Contact.</h1>
        <p className=" font-bold text-sm text-white ">
          Get in touch or shoot me an email directly on danmole.havis@gmail.com
        </p>
        <form className="w-[50vw] py-4  space-y-8  ">
          <div className="w-full ">
            <label className="input input-neutral w-full text-white bg-[#1e293b]" >   
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
            <label className="input input-neutral w-full text-white bg-[#1e293b]">    
              <input
                className="grow"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
              />
            </label>
          </div>
         <textarea name="message" placeholder="Message..." className="w-full bg-[#1e293b] border-0 h-[150px] p-2 text-white" 
         required></textarea>


       <button className="btn btn-border text-black bg-white">Send Message</button>
     
        </form>
        <p className="text-white font-bold ">Go back home<Link to="/"> <MoveRight/></Link></p>
      </div>
    </div>
  );
}
