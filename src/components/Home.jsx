import React from "react";
import Product from "./Product";
import Buildmins from "./Buildmins";
import Form from "./Form";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main className="bg-black text-white h-screen flex items-center justify-center main_bg">
        <section>
          <div className="flex justify-center items-center flex-col space-y-4 px-5 md:px-0">
            <h1 className="text-4xl flex flex-col items-center md:leading-26 md:text-8xl">
              Build Anything <span>Deploy Everywhere</span>{" "}
            </h1>
            <code className="bg-gray-800 text-white opacity-80 border-[2px] border-gray-600 p-2 rounded-[10px]">
              "Code meets craftsmanship — create anything, launch it anywhere."
            </code>
            <Link
              to="/login"
              className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-950 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Product />
      <Buildmins />
      <Form />
    </div>
  );
}
