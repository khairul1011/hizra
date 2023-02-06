import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Visi() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/2.png").default}
                        className="shadow-xl rounded-lg h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-bold leading-normal mb-2 text-lightBlue-700 mb-2">
                    Visi & Misi
                  </h3>
                  <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                    PT. HIZRATECH KONSULTAN SERVIS
                  </div>
                </div>
                <div className="container px-4 mx-auto">
                  <div className="text-left mt-12 ">
                    <div className="text-xl leading-normal mt-0 text-lightBlue-600 font-bold uppercase">
                      Visi
                    </div>
                    <div className=" text-blueGray-600 mt-3">
                      Terwujudnya pengembangan digital dalam negeri yang dibangun dari kreatifitas bersama secara kompeten, sinergis, profesional,
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-1">
                      dan berdaya saing global.
                    </div>
                    <div className="text-xl leading-normal mt-5 mb-3 text-lightBlue-600 font-bold uppercase">
                      Misi
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      1. Berkontribusi pada kemajuan teknologi di segala bidang. Seperti UMKM, Kesehatan, Pendidikan, Pertanian, dll.
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      2. Mendukung penuh partisipasi anak muda dalam merealisasikan pengembangan teknologi sesuai dengan perkembangan zaman.
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      3.  Memberikan solusi yang optimal kepada mitra kerja dalam mengatasi berbagai permasalahan di dunia teknologi informasi.
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      4.  Menjalin kerjasama yang sinergis dan berkelanjutan.
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      5.  Memberikan edukasi pengembangan digital yang efektif sebagai pengabdian kepada masyarakat.
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      6. Memberikan jasa konsultasi dalam meningkatkan kreatifitas, efektivitas, efisiensi, serta produktivitas di bidang teknologi digital.
                    </div>
                    <div className="mb-2 leading-relaxed text-blueGray-600 ">
                      7. Memberikan jasa layanan terbaik dan berkualitas di dukung oleh SDM yang berkompeten di bidangnya.
                    </div>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  {/* <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
