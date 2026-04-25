'use client';
import PageLayout from '@/app/components/PageLayout';



export default function ContiniaOCRPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Continia Document Capture with Business Central
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Scan, analyse, process, and store documents while saving a lot of time with Continia OCR
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Let's Get Started
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/Continia-Document.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* SANA COMMERCE SECTION */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                        Continia Document Capture for Dynamics 365 Business Central
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Automate data entry, improve accuracy, eliminate errors, and scan documents with the utmost quality using
                        Continia Document Capture with Dynamics 365 Business Central. Built on award-winning OCR technology, Document
                        Capture can scan documents irrespective of their geolocation in more than 180 languages, sufficient for global
                        business operations. It can easily capture documents, including personal data, invoices, payments, quotes, and
                        much more.
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Request a Demo
                    </a>
                </div>
            </section>

            {/* SCAN CAPTURE ANALYSE SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src="/solutions/scan-capture-analyse.avif" 
          alt="Scan and capture documents"
          className="w-[600px] max-w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
          Scan, Capture, and Analyse Document Efficiently
        </h2>

        <p className="text-gray-600 mb-5 leading-relaxed">
          After integrating Continia OCR with Business Central, you have a reliable and strong solution to manage all documents. Being a powerful document capturing solution, it saves a lot of time and effort when it comes to fetching numbers and values from a document. Because a minor mistake can lead you into complex and critical situations that no one wants to face.
        </p>

        <p className="text-gray-600 mb-5 leading-relaxed">
          It can automate most accounting operations, including invoice processing, quote management, electronic invoicing, and streamlining disrupted operations.
        </p>

        <p className="text-gray-600 leading-relaxed">
          It accurately fetches data from scanned documents, analyzes the entire document, and places values in preferred fields of Microsoft Dynamics 365 Business Central. You can also view previous scans through digital archive storage anytime. This makes Continia OCR efficient, user-friendly, and business-oriented for businesses of all sizes.
        </p>
      </div>

    </div>
  </div>
</section>

{/* WHY CHOOSE CONTINIA OCR SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1F2A44] mb-14">
      Why You Should Choose Continia OCR?
    </h2>

    {/* 2 COLUMN LAYOUT */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT SIDE */}
      <div className="space-y-10">

        {/* ITEM 1 */}
        <div className="flex gap-5 items-start p-6 rounded-xl hover:shadow-lg transition">
          <img
            src="/solutions/intelegent-ocr.avif"
            alt="Intelligent OCR"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Intelligent OCR</h3>
            <p className="text-gray-600">
              Being a smart solution, it captures the text written on the document and submits it on the digital sheet.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex gap-5 items-start p-6 rounded-xl hover:shadow-lg transition">
          <img
            src="/solutions/automation.avif"
            alt="Automation"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Automation Enabled</h3>
            <p className="text-gray-600">
              Automation lets you eliminate the data entry of manual and recurring documents, resulting in enhanced productivity.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-10">

        {/* ITEM 3 */}
        <div className="flex gap-5 items-start p-6 rounded-xl hover:shadow-lg transition">
          <img
            src="/solutions/automatic-approval.avif"
            alt="Automatic Approval"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Automatic Approval</h3>
            <p className="text-gray-600">
              With preset parameters, you can automate the approval of quotes, tasks, and processes.
            </p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex gap-5 items-start p-6 rounded-xl hover:shadow-lg transition">
          <img
            src="/solutions/history.avif"
            alt="Document History"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">Document History</h3>
            <p className="text-gray-600">
              With access to digital archive storage, you can access the desired document along with the history of data transactions.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* KEY FEATURES SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src="/solutions/contonia-BC-addonn.avif" 
          alt="Key Features of Continia"
          className="w-[600px] max-w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-8">
          Key Features of Continia Document Capture
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold mb-2">Digital Data Capture</h3>
            <p className="text-gray-600 leading-relaxed">
              It eliminates the tedious tasks of manual data entry, resulting in no manual errors while saving a lot of employee time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Order Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Equipped with three-way matching, you can easily match the data and eliminate the source of errors automatically.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Purchase Contracts</h3>
            <p className="text-gray-600 leading-relaxed">
              With Continia, you can make sure to provide correct invoicing, manage all contracts, and save a lot of money.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>









        </PageLayout>
    );
}
