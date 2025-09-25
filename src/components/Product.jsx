import React, { useState } from "react";

export default function Product() {
  const [activeTab, setActiveTab] = useState("javascript");

  const lang_javascript = `async function fetchUsers(page: number = 1, limit: number = 1000): Promise<void> {
  try {
    const response = await fetch(\`https://apiplay.vercel.app/api/users?page=\${page}&limit=\${limit}\`);
    if (!response.ok) throw new Error(\`Error: \${response.statusText}\`);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
 
fetchUsers();`;

  const lang_endport = `async function fetchUsers(page: number = 1, limit: number = 1000): Promise<void> {
  try {
    const response = await fetch(\`https://apiplay.vercel.app/api/users?page=\${page}&limit=\${limit}\`);
    if (!response.ok) throw new Error(\`Error: \${response.statusText}\`);

    
  }
}

fetchUsers();`;

  const lang_layout_core = `async function fetchUsers(page: number = 1, limit: number = 1000): Promise<void> {
  try {
    const response = await fetch(\`https://apiplay.vercel.app/api/users?page=\${page}&limit=\${limit}\`);
    if (!response.ok) throw new Error(\`Error: \${response.statusText}\`);

  } catch (error) {
    console.error(error);
  }
}

fetchUsers();`;

  const renderTab = () => {
    if (activeTab === "javascript") return lang_javascript;
    if (activeTab === "endport") return lang_endport;
    if (activeTab === "layout_core") return lang_layout_core;
  };

  return (
    <>
      <section className="bg-black text-white h-full relative pt-[120px]">
        {/* <div className='w-60 h-59 bg-amber-300 rounded-full blur-3xl opacity-40 absolute top-0 left-[-90px]'></div> */}
        <div className="px-6">
          <div className="bg-gradient-to-t from-green-950 to-black flex flex-col w-full rounded-4xl md:flex-row py-4 px-4 ">
            <div className="w-full py-14 px-4 md:w-1/2">
              <h2 className="font-medium text-7xl mb-4">
                CrabRab Build Toast Feet <br />
                <span className="text-green-700 text-2xl border-green-900 border-2 px-4 py-2 rounded-[6px] inline-block mt-4">
                  @npm/crabRab
                </span>
              </h2>
              <p>
                CrabRab is an open-source tool that streamlines API testing,
                request organization, and response inspection — all through a
                clean, developer-friendly interface.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="anc_tag bg-gray-100 text-black mr-4 font-medium"
                >
                  Read Doc File{" "}
                  <i className="fa-solid fa-arrow-right font_arrow ml-1"></i>
                </a>
                <a href="#" className="anc_tag bg-red-400 anc_tag_seen">
                  Browse Api
                </a>
              </div>
            </div>
            <div className="w-full flex items-center justify-center md:w-1/2">
              <div className="w-[85%] lang_main">
                <div className="lang_header">
                  <div className="lang_tab border-[1px] rounded-t-2xl border-green-800 overflow-hidden">
                    <div className="flex justify-between items-center p-2 bg-green-700 px-4">
                      <h3>Ready to Ship 🚀</h3>
                      <div className="flex gap-2">
                        <i class="fa-solid fa-globe"></i>
                        <i class="fa-regular fa-copy"></i>
                      </div>
                    </div>
                    <ul className="lang_tab_list">
                      <li>
                        <button
                          onClick={() => setActiveTab("javascript")}
                          className={`${
                            activeTab === "javascript"
                              ? "bg-green-800 text-white"
                              : "bg-green-950 text-gray-300"
                          }`}
                        >
                          {" "}
                          javascript
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveTab("endport")}
                          className={`${
                            activeTab === "endport"
                              ? "bg-green-800 text-white"
                              : "bg-green-950 text-gray-300"
                          }`}
                        >
                          endport
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveTab("layout_core")}
                          className={`${
                            activeTab === "layout_core"
                              ? "bg-green-800 text-white"
                              : "bg-green-950 text-gray-300"
                          }`}
                        >
                          layout core
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lang_content overflow-hidden">
                  <pre>
                    <code>{renderTab()}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
