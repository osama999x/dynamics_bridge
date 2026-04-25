'use client';

import PageLayout from '@/app/components/PageLayout';
import Link from 'next/link';

export default function EbooksPage() {
  const ebooks = [
    {
      title: "A Complete Guide to Dynamics GP to BC",
      img: "/resources/dynamics-GP-BC-Ebook-banner-image.avif",
      link: "/resources/ebooks/gp-to-bc-migration"
    },
    {
      title: "A Complete Guide to Dynamics SCM",
      img: "/resources/dynamics-SCM-Ebook-featured-banner.avif",
      link: "/resources/ebooks/d365-supply-chain-management"
    },
    {
      title: "A Complete Guide to Dynamics CRM",
      img: "/resources/dynamics-CRM-Ebook-featured-banner.avif",
      link: "/resources/ebooks/dynamics-crm"
    },
    {
      title: "The Extensive Guide to Dynamics 365 Finance",
      img: "/resources/three-book-mockup.avif",
      link: "/resources/ebooks/dynamics-365-finance"
    }
  ];

  return (
    <PageLayout>

      {/* HERO SECTION */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl font-bold mb-6 text-black">
              Microsoft Dynamics <br /> 365 eBooks
            </h1>

            <p className="text-xl text-gray-600">
              Get Your Business To New Heights With Our <br />
              Microsoft Dynamics 365 E-Books and Guides.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/resources/Cover_Book_Moc.avif"
              alt="Dynamics 365 eBooks"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>

      {/* LATEST EBOOKS SECTION */}
      <div className="py-20 px-4 bg-gradient-to-b from-[#f3f6fb] to-[#e9eef7]">
        <div className="container mx-auto">

          {/* SECTION TITLE */}
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Latest Ebooks
          </h2>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {ebooks.map((book, i) => (
              <div
                key={i}
                className="bg-[#eef1f6] rounded-xl p-10 text-center hover:shadow-xl transition duration-300"
              >
                {/* BOOK IMAGE */}
                <img
                  src={book.img}
                  alt={book.title}
                  className="h-64 mx-auto mb-8 object-contain"
                />

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {book.title}
                </h3>

                {/* VIEW NOW BUTTON */}
                <Link
                  href={book.link}
                  className="inline-block border border-gray-700 px-8 py-3 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  View Now
                </Link>
              </div>
            ))}

          </div>

        </div>
      </div>

    </PageLayout>
  );
}