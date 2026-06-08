"use client";

import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";

export default function BlogsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState("");

  const topics = [
    "Business central",
    "Power BI",
    "Dynamics Nav",
    "Comparison",
    "Dynamics AX",
    "Microsoft Dynamics 365",
    "Dynamics 365 F&O",
    "Microsoft Cloud",
    "Power Platform",
    "CRM",
    "ERP",
    "Field Service",
  ];

  const allBlogs = [
    {
      title: "Best Business Central Partners in the UK for 2026",
      category: "Business central",
      desc: "Compare expertise, pricing, and support for Microsoft Business Central implementations.",
      author: "Alice Johnson",
      date: "2026-01-29",
      readingTime: "8 mins read",
      image: "/blog/business-central.jpg", // ✅ public/blog/business-central.jpg
    },
    {
      title: "Power BI Advanced Dashboard Guide",
      category: "Power BI",
      desc: "Transform decision-making with real-time dashboards and advanced analytics in Power BI.",
      author: "Emma Davis",
      date: "2026-02-01",
      readingTime: "7 mins read",
      image: "/blog/powerbi.jpg",
    },
  ];

  const filteredBlogs = allBlogs.filter(
    (blog) =>
      (blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.desc.toLowerCase().includes(search.toLowerCase())) &&
      (activeTopic ? blog.category === activeTopic : true)
  );

  const featuredBlog = allBlogs[0];

  return (
    <PageLayout>
      {/* HERO SECTION */}
      <div className="bg-[#1F2A44] py-16 px-4 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
          Insights & Articles
        </h1>

        <div className="flex justify-center">
          <div className="flex w-full max-w-2xl bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search Dynamics, Power BI, ERP..."
              className="flex-1 px-5 py-3 outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              onClick={() => setSearch(searchInput)}
              className="bg-[#E11D48] hover:bg-red-700 text-white px-6"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* FEATURED BLOG */}
      <div className="container mx-auto px-4 mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

          <img
            src="/blog/blog.png"
            alt={featuredBlog.title}
            className="h-64 md:h-full w-full object-cover"
          />
          <div className="p-8 flex flex-col justify-center">
            <span className="text-xs bg-[#E11D48] text-white px-3 py-1 rounded-full w-fit">
              Featured Article
            </span>

            <h2 className="text-3xl font-bold mt-4 text-[#1F2A44]">
              {featuredBlog.title}
            </h2>

            <p className="text-gray-600 mt-4">{featuredBlog.desc}</p>

            <button className="mt-6 bg-[#1F2A44] text-white px-5 py-2 rounded-md hover:bg-black transition w-fit">
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <h3 className="text-lg font-bold text-[#1F2A44] mb-4">
              Topics
            </h3>

            <div className="flex flex-wrap lg:flex-col gap-2">
              {topics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTopic(topic)}
                  className={`text-sm px-4 py-2 rounded-full border transition duration-200 ${activeTopic === topic
                      ? "bg-[#1F2A44] text-white border-[#1F2A44]"
                      : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </aside>

          {/* BLOG GRID */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500">No blogs found.</p>
            ) : (
              filteredBlogs.map((blog, i) => (
                <article
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-5">
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>

                    <h2 className="text-lg font-bold mt-3 text-[#1F2A44] hover:text-[#E11D48] transition">
                      {blog.title}
                    </h2>

                    <div className="text-xs text-gray-500 flex flex-wrap gap-3 mt-2">
                      <span>👤 {blog.author}</span>
                      <span>📅 {blog.date}</span>
                      <span>⏱ {blog.readingTime}</span>
                    </div>

                    <p className="text-gray-600 text-sm mt-3">
                      {blog.desc}
                    </p>

                    <a
                      href="#"
                      className="text-[#E11D48] font-semibold text-sm mt-4 inline-block hover:underline"
                    >
                      Read Full Article →
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}