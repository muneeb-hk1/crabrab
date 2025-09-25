import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <section className="bg-green-800 w-full h-screen flex justify-center items-center px-10">
        <div className="div w-full bg-white py-6 px-10 rounded-[4px] md:w-1/2">
          <h2 className="text-green-900 font-medium text-[18px] mb-5 underline decoration-green-900">
            Create an Account
          </h2>
          <form action="#">
            <div className="signup_layout space-y-3">
              <div className="w-full flex gap-5">
                <div className="w-full">
                  <label for="name">First Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    className="border-green-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent w-full"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full">
                  <label for="name">Last Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    className="border-green-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent w-full"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label for="email">Email</label> <br />
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  className=" w-full border-green-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>
              <div>
                <label for="number">Number</label> <br />
                <input
                  type="number"
                  id="number"
                  placeholder="Your Number"
                  className=" w-full border-green-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 py-2 px-5 mt-2 text-white rounded-[3px]"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-4 text-[13px]">
            Already have an account -{" "}
            <Link
              to="/login"
              className="text-green-900 font-medium underline decoration-green-900"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
