import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <ul className="flex flex-row w-full justify-end">
        <li className="bg-slate-800 border-r-2 border-white p-3">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-3 bg-slate-800">
          <Link to={"/login"}>Login To Post</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
