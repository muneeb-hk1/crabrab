import React, { useState } from "react";

const Buildmins = () => {
  const [activeTab, setActiveTab] = useState("json");

  const step_tab_content = () => {
    const json_content = `
    {
  "id": 1,
  "username": "lorettagardner",
  "password": "7BW28%on@7",
  "email": "schmidtchristian@ray-salinas.com",
  "profile_image": "https://i.pravatar.cc/150?img=48"
}`;

    const preview_content = `
  {
  "id": 1,
  "username": "lorettagardner",
  "password": "7BW28%on@7",
  "email": "schmidtchristian@ray-salinas.com",
  "profile_image": "https://i.pravatar.cc/150?img=48"
}
  `;

    const bar_content = `
   content-type           application/json
   cache-control          max-age=3600
   x-ratelimit-limit      5000
   x-ratelimit-remaining  4999
  `;

    if (activeTab === "json") return json_content;
    if (activeTab === "preview") return preview_content;
    if (activeTab === "bar") return bar_content;
  };

  return (
    <>
      <section className="bg-black text-white w-full">
        <div className="flex flex-col md:flex-row w-full pt-50 pb-20 px-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-7xl font-medium mb-4">Ready to Build</h2>
            <p>
              These APIs are built for simplicity, with clear documentation and
              real-world examples to get you started quickly.
            </p>
            <div className="mt-3">
              <div className="api_build_stages">
                <span>1</span>
                <span>
                  Browse Our Collection Discover a wide range of APIs tailored
                  to various use cases—easy to find, easy to use.
                </span>
              </div>
              <div className="api_build_stages">
                <span>2</span>
                <span>
                  Browse Our Collection Discover a wide range of APIs tailored
                  to various use cases—easy to find, easy to use.
                </span>
              </div>
              <div className="api_build_stages">
                <span>3</span>
                <span>
                  Browse Our Collection Discover a wide range of APIs tailored
                  to various use cases—easy to find, easy to use.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full p-4 md:w-[80%]">
              <div className="border-[1px] border-zinc-900 steps_showcase rounded-[20px]">
                <div className="steps_head flex flex-col gap-3">
                  <div className="steps_head_dots flex gap-2 px-5 pt-4">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="steps_tab_menu px-4">
                    <div className="steps_tab bg-green-900 text-white flex justify-between items-center w-40 px-5 py-2.5  rounded-t-[14px] border-[1px] border-green-700">
                      <i class="fa-solid fa-globe"></i>
                      <p className="text-[14px]">User Profile</p>
                      <i class="fa-solid fa-multiply"></i>
                    </div>
                  </div>
                  <div className="steps_navigate w-full border-t-[1px] border-b-[1px] border-zinc-900 px-4 py-2 flex justify-between items-start flex-col md:flex-row md:items-center">
                    <div className="flex justify-start gap-7 mb-2 md:mb-0">
                      <i class="fa-solid fa-arrow-left"></i>
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="bg-black py-2 px-2 rounded-full flex items-center gap-10">
                      <div className="flex gap-2 items-center">
                        <p className="bg-blue-500 py-1 px-4 rounded-full text-[12px]">
                          GET
                        </p>
                        <p className="text-[14px]">
                          https://api.example.com/users/1
                        </p>
                      </div>
                      <i class="fa-solid fa-search"></i>
                    </div>
                  </div>
                </div>
                <div className="steps_tab">
                  <div className="steps_tab_head px-4">
                    <ul className="flex gap-1">
                      <li>
                        <button onClick={() => setActiveTab("json")}>
                          Json
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveTab("preview")}>
                          Preview
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveTab("bar")}>
                          Headers
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="steps_tab_content px-3 p-4 border-t-[1px] border-zinc-950 overflow-x-scroll md:overflow-hidden">
                    <pre>
                      <code>{step_tab_content()}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buildmins;
