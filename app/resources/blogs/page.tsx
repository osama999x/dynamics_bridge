"use client";
import { useState } from "react";
import PageLayout from '@/app/components/PageLayout';

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
  "Field Service"
];

const allBlogs = [
  {
    title: "Best Business Central Partners in the UK for 2026",
    category: "Business central",
    desc: "Compare expertise, pricing, and support.",
    author: "Alice Johnson",
    date: "2026-01-29",
    readingTime: "8 mins read"
  },
  {
    title: "Business Central Implementation Guide",
    category: "Business central",
    desc: "Step-by-step implementation roadmap.",
    author: "Michael Smith",
    date: "2026-01-15",
    readingTime: "10 mins read"
  },
  {
    title: "Power BI Advanced Dashboard Guide",
    category: "Power BI",
    desc: "Transform decision-making with real-time insights.",
    author: "Emma Davis",
    date: "2026-02-01",
    readingTime: "7 mins read"
  },
  {
    title: "Power BI Data Modeling Best Practices",
    category: "Power BI",
    desc: "Build scalable BI models.",
    author: "Robert Lee",
    date: "2026-01-20",
    readingTime: "9 mins read"
  },
  {
    title: "Dynamics NAV Migration Guide",
    category: "Dynamics Nav",
    desc: "Migration planning strategies.",
    author: "Sophia Brown",
    date: "2026-01-10",
    readingTime: "12 mins read"
  },
  // Add similar fields for all other blogs...
];

export default function BlogsPage() {
  const [searchInput, setSearchInput] = useState(""); // input value
  const [search, setSearch] = useState(""); // value used for filtering
  const [activeTopic, setActiveTopic] = useState("");

  const filteredBlogs = allBlogs.filter((blog) =>
    (blog.title.toLowerCase().includes(search.toLowerCase()) ||
     blog.desc.toLowerCase().includes(search.toLowerCase())) &&
    (activeTopic ? blog.category === activeTopic : true)
  );

  const handleSearchClick = () => {
    setSearch(searchInput); // trigger search when button is clicked
    setActiveTopic(""); // optional: clear topic when searching manually
  };

  return (
    <PageLayout>

      {/* SEARCH BAR CENTER */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex justify-center">
          <div className="flex w-full max-w-3xl">

            <input
              type="text"
              placeholder="Search blog..."
              className="flex-1 border border-gray-300 rounded-l-md px-5 py-3 focus:outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <button
              onClick={handleSearchClick}
              className="bg-[#243B5A] text-white px-5 flex items-center justify-center rounded-r-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="8" r="6"></circle>
                <line x1="12.5" y1="12.5" x2="17" y2="17"></line>
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore by Topic</h3>

            <div className="flex flex-col gap-3">
              {topics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTopic(topic)}
                  className={`border rounded-full px-4 py-2 text-left
                  ${
                    activeTopic === topic
                      ? "bg-red-700 text-white border-red-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* BLOG LIST */}
          <div className="lg:col-span-3 space-y-10">
            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500 text-xl">No blogs found.</p>
            ) : (
              filteredBlogs.map((blog, i) => (
                <div key={i} className="border-b pb-10">
                  <h2 className="text-3xl font-bold mb-3">{blog.title}</h2>

                  {/* INFO LINE UNDER TITLE */}
                  <div className="flex flex-wrap items-center text-red-600 text-sm gap-4 mb-4">
                    {/* Author */}
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
                      </svg>
                      <span>{blog.author}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V3a1 1 0 011-1zM5 9h10v7H5V9z" />
                      </svg>
                      <span>{blog.date}</span>
                    </div>

                    {/* Reading time */}
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9H9V5h2v6z" />
                      </svg>
                      <span>{blog.readingTime}</span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v3H3V4zm0 5h14v7a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
                      </svg>
                      <span>{blog.category}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{blog.desc}</p>
                  <a href="#" className="text-red-600 font-semibold">
                    Read More →
                  </a>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

    </PageLayout>
  );
}