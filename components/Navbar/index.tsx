import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between items-center py-2 px-4">
      <div>
        <a className="btn btn-ghost normal-case text-xl">Pixabay Search by Derek Merrikin</a>
      </div>
      <div className="flex items-center">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
