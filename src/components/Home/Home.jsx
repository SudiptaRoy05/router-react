import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <h3>Welcome Home</h3>
        <Outlet></Outlet>
    </div>
  )
}
