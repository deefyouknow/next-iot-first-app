import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl text-blue-200 shadow-2xl text-center">HOME Page</h1>
      <h1 className="text-center">ID:6519410033</h1>
      <h1 className="text-center">Thanawat Sriwan</h1>
      <div className="h-12"></div>
      <hr />
      <p>Welcome to the home page!</p>
      <p>This is a sample home page.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <a href="/about">
        <a className="text-blue-500 hover:text-blue-700">About</a>
      </a>
    </div>
  );
}
