import React from "react";

export default function Form() {
  return (
    <>
      <section>
        <div className="form_main bg-gradient-to-t from-green-950 to-black pt-30 pb-10 px-10">
          <div className="form_layout_conainer flex flex-col md:flex-row w-full">
            <div className="w-full border-[1px] border-white bg-black md:w-[60%]">
              <div class="p-6 rounded-2xl ">
                <h2 class="text-4xl mb-6 text-white underline decoration-[1px] font-normal">
                  Register for more
                </h2>

                <form class="space-y-4">
                  <div className="flex gap-3 w-full">
                    <div className="w-1/2">
                      <label
                        class="block text-white font-medium mb-1"
                        for="name"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="w-full px-4 py-3 text-white border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent  bg-black"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        class="block text-white font-medium mb-1"
                        for="name"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="w-full px-4 py-3 text-white border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent bg-black"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      class="block text-white font-medium mb-1"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="w-full px-4 py-3 text-white border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent bg-black"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      class="block text-white font-medium mb-1"
                      for="number"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      class="w-full px-4 py-3 text-white border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent bg-black"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-white font-medium mb-1"
                      for="company"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      class="w-full px-4 py-3 text-white border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent bg-black"
                      placeholder="Company Pvt Ltd"
                    />
                  </div>

                  <div class="pt-4">
                    <button
                      type="submit"
                      class="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-950 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="form_showcase w-full bg-gradient-to-b from-green-950 to-black border-t-[1px] border-l-[0px] border-b-[1px] border-r-[1px] border-white hidden md:w-[40%] md:block">
              <div className="form_showcase_box">
                Your Fast-Track to Production
              </div>
              <div className="form_showcase_box">Deploy everywhere </div>
              <div className="form_showcase_box">Open Source </div>
              <div className="form_showcase_box">Contribute </div>
              <div className="form_showcase_box">fetch in seconds </div>
              <div className="form_showcase_box">Build for change </div>
            </div>
          </div>
          <div className="form_connect_opts w-full bg-black flex flex-col md:flex-row">
            <div className="form_connect_box w-full md:w-1/3">
              <img src="/images/calendly.jpg" alt="" />
            </div>
            <div className="form_connect_box w-full md:w-1/3">
              <h4>
                Don’t wait for days— <br /> <span>get results in minutes.</span>
              </h4>
            </div>
            <div className="form_connect_box w-full md:w-1/3">
              <h4>Build fast - ship fast</h4>
            </div>
            <div className="form_connect_box w-full md:w-1/3">
              <img src="/images/skype.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
