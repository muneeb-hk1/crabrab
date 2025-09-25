import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="bg-black w-full mx-auto h-screen flex justify-center items-center">
        <div className="h-[60%] flex flex-col w-[80%] md:flex-row">
          <div className="w-[70%] hidden h-full overflow-hidden md:block">
            <img
              src="/images/main_bg.gif"
              className="object-cover bg-cover bg-no-repeat bg-center"
            />
          </div>
          <div className="div w-[100%] bg-white py-6 px-10 md:w-[30%]">
            <h2 className="text-green-900 font-medium text-[18px] mb-5 underline decoration-green-900">
              Login to your Account
            </h2>
            <form action="#" className="space-y-3">
              <div>
                <label for="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  className="border-green-900 rounded-[4px] w-full focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="email">Email</label> <br />
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  className="border-green-900 rounded-[4px] w-full focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 py-2 px-5 mt-2 text-white rounded-[3px]  "
              >
                {" "}
                Submit
              </button>
            </form>

            <p className="mt-4 text-[13px]">
              Don't have an account -{" "}
              <Link
                to="/signup"
                className="text-green-900 font-medium underline decoration-green-900 "
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
