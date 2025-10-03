import { Sun } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className=" max-w-[1200px] mx-auto flex justify-between items-center p-2 mt-8">
      <Link to="/">
        <Sun size={80} color="white" />
      </Link>
      <div className="flex justify-between gap-5 text-white font-md  text-md">
      
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
