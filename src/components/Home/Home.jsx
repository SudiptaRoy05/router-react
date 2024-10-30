import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h3 className="text-orange-300 ">Welcome Home</h3>
        <p className="text-blue-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sed eveniet a!</p>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
