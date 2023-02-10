/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Teams1 from "@notus-pro/react/Teams1";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//import 'Sl.css';

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
};

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      
        <div className="container mx-auto items-center flex flex-wrap">

        </div>
        <IndexNavbar fixed />
        <img
          className="absolute top-0 b-auto left-0 pt-16 sm:w-full
           -mt-48 sm:mt-0 w-full max-h-860px"
          src={require("assets/img/Home.png").default}
          alt="..."
          
        />
      </section>

      <section className="mt-1 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="container mx-auto px-4 pb-32 pt-48">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                  <div className="md:pr-12">
                    <h3 className="text-5xl font-bold text-lightBlue-600">
                      HIZRATECH?
                    </h3>
                    <p className="mt-4 text-3xl leading-relaxed text-blueGray-500">
                      Hizratech adalah
                      perusahaan yang
                      bergerak dalam
                      development system
                      yang akan
                      mewujudkan sistem
                      digital anda.
                      Hizratech juga
                      menyediakan
                      berbagai jasa layanan
                      publik yang siap
                      membantu klien yang
                      berkaitan dengan
                      teknologi.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-xl"
                    style={{
                      transform:
                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }}
                    src={require("assets/img/Black & Orange Minimal Startup H Letter Business Logo (1).png").default}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4 ">
            <h3 className="text-5xl font-bold text-orange-500">What We Offer</h3>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">

                  <Link to="/sys-dev">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/programmin-990x500.jpg").default}
                      />
                    </div>
                  </Link>
                  <h5 className="text-2xl font-bold pb-4 text-center text-orange-500">
                    System Development
                  </h5>
                  <h5 className="text-sm font-bold pb-4 text-center text-white">
                    Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">

                  <Link to="/Profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/layanan.jpg").default}
                      />
                    </div>
                  </Link>
                  <h5 className="text-2xl font-bold pb-4 text-center text-orange-500">
                    Layanan Publik
                  </h5>
                  <h5 className="text-sm font-bold pb-4 text-center text-white">
                    Hizratech siap untuk melayani klien dalam rangka pemenuhan kebutuhan pelayanan baik di bidang jasa, layanan maupun administratif.
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">

                  <Link to="/sys-dev">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/lep.jpg").default}
                      />
                    </div>
                  </Link>
                  <h5 className="text-2xl font-bold pb-4 text-center text-orange-500">
                    Jual Beli Perangkat Lunak dan Keras
                  </h5>
                  <h5 className="text-sm font-bold pb-4 text-center text-white">
                    Hizratech juga menjual berbagai jenis barang perangkat lunak dan keras.
                  </h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-1 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>

          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="text-5xl mb-2 font-bold leading-normal text-black">
                Why HKS ?
              </h3>
              <div className="text-center mt-16"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">

                <Link to="/sys-dev">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/yyy.jpg").default}
                    />
                  </div>
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-indigo-500">
                  Kualitas Terbaik
                </h5>
                <h5 className="text-sm font-bold pb-4 text-center text-black">
                  Team akan melakukan yang terbaik untuk klean serta mengutamakan kualitas yang tidak merngecewakan klien.
                </h5>
              </div>

              <div className="w-full lg:w-4/12 px-4">

                <Link to="">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/hhh.jpg").default}
                    />
                  </div>
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-indigo-500">
                  Klien Terpercaya
                </h5>
                <h5 className="text-sm font-bold pb-4 text-center text-black">
                  klien sepenuhnya bisa mempercayain hizratech sebagai mitranya,serta hizratech siap untuk menyelesaikan kendala yang dihadapi oleh klien.
                </h5>
              </div>

              <div className="w-full lg:w-4/12 px-4">

                <Link to="">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/Macam-macam-layanan-internet.jpg").default}
                    />
                  </div>
                </Link>
                <h5 className="text-2xl font-bold pb-4 text-center text-indigo-500">
                  Layanan Bervariasi
                </h5>
                <h5 className="text-sm font-bold pb-4 text-center text-black">
                  Hizratech menyediakan berbagai jasa layanan sesuai dengan kebutuhan klien.

                </h5>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="mt-24 py-10 border-t border-blueGray-200 text-center ">
          <Slider {...settings}>
            <div className="text-center mt-0">
            <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA A
              <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>
              
              </div>
            </div>
            <div className="text-center mt-0">
            <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
            SMA B
              <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>
              
              </div>
            </div>
            <div className="text-center mt-0">
            <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
            SMA C
              <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>
              
              </div>
            </div>
            <div className="text-center mt-0">
            <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
            SMA D
              <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>
              
              </div>
            </div>
            <div className="text-center mt-0">
            <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
            SMA E
              <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>
              
              </div>
            </div>
            

          </Slider>
        </div> */}
      </section>

      <section className="mt-0 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="w-full text-left py-12 px-6 lg:w-full">
          <h3 className="text-5xl mb-2 px-12 font-bold leading-normal text-lightBlue-700">
            MITRA KAMI
          </h3>
          <div className="text-center mt-1"></div>
        </div>
        <div className="mt-4 py-10  border-t border-blueGray-200 text-center ">
          <Slider {...settings}>
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4 ">
                SMA A
                <img src={require("assets/img/sketch.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4 ">
                SMA B
                <img src={require("assets/img/sketch.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4 ">
                SMA C
                <img src={require("assets/img/sketch.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4 ">
                SMA D
                <img src={require("assets/img/sketch.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4 ">
                SMA E
                <img src={require("assets/img/sketch.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>


            {/* <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA A
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA B
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA C
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA D
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div>
            <div className="text-center mt-0">
              <div className="text-2xl leading-normal mt-0 mb-2 text-lightBlue-700 font-bold uppercase">
                SMA E
                <div><img src={require("assets/img/lep.jpg").default} alt="Credit to Joshua Earle on Unsplash" /></div>

              </div>
            </div> */}


          </Slider>
        </div>
      </section>


      <Footer />
    </>
  );
}
