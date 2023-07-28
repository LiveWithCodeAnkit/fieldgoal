import Image from "next/image";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { PiWarningCircle } from "react-icons/pi";
import { TbBrandZapier, TbCloudUpload } from "react-icons/tb";
import Link from "next/link";
import Footer from "../footer/Footer";

const PricePlan = () => {
  const divStyle = {
    background: "#424d91",
    backgroundColor: "#424d91",
    backgroundImage: `linear-gradient(hsla(0, 5%, 100%, 0.001), #f3f5f8), url("/screen-pattern-indigo.svg?52128fc")`,
    backgroundSize: "500px auto",
  };

  return (
    <>
      <div className="flex justify-center items-center p-5 font-Roboto absolute top-[90rem] left-0 right-0 z-10">
        <div className="flex flex-col justify-center items-center gap-8 p-8  border bg-white shadow-slate-400 rounded-md">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="flex justify-center items-center gap-3 text-2xl font-medium">
              <ImQuotesLeft className="text-slate-400" /> FieldGoal saved me
              hours of boilerplate
            </h1>
            <h1 className="flex justify-center items-center gap-3 text-2xl font-medium">
              form creation. I love it!
              <ImQuotesRight className="text-slate-400" />
            </h1>
          </div>

          <label htmlFor="Taylor Otwell, Creator of Laravel">
            Taylor Otwell, Creator of Laravel
          </label>
          <Image
            src={"/vectorPricePlan.png"}
            height={80}
            width={80}
            alt="vectorPricePlan.jpg"
            className="rounded-full absolute top-40"
          />
        </div>
      </div>
      <div
        className="h-[35rem] flex justify-center items-center flex-col font-Roboto gap-2 "
        style={divStyle}
      >
        <div className="flex flex-col justify-center items-center w-1/2 gap-3">
          <h1 className="text-4xl  text-white">Simple Pricing</h1>
          <h1 className="text-2xl text-blue-500">
            Always know what you’ll pay
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="flex justify-center items-center w-1/2  mt-36 absolute">
          <div className="flex flex-col justify-center items-start w-96 gap-6   border-2 bg-white ">
            <div className="bg-gray-light font-bold px-10 py-6 rounded-t-md text-blue uppercase w-full">
              <label>PRICING PLANS</label>
            </div>
            <div className="p-5 flex flex-col justify-center items-start gap-4">
              <p className="text-blue-light">
                Fieldgoal offers plans if you need a single form for your
                personal website or need forms to support all of your clients.
              </p>
              <label className="text-blue-light">
                All of our plans include:
              </label>

              <div className="flex flex-col justify-center items-start gap-5  text-blue-darker">
                <div className="flex justify-start items-center gap-4">
                  <FiDownload className="text-2xl text-blue-darker " />
                  <label>Store unlimited submissions</label>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <HiOutlineMail className="text-2xl text-blue-darker " />
                  <label>Email Forwarding</label>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <PiWarningCircle className="text-2xl text-blue-darker " />
                  <label>Spam blocking</label>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <TbBrandZapier className="text-2xl text-blue-darker " />
                  <label>Zapier integration</label>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <FiDownload className="text-2xl text-blue-darker " />
                  <label>File uploads to S3</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[33rem]">
              <div className="bg-white pb-6 sm:px-10 sm:py-6 sm:rounded-t-md">
                <table className="w-full text-blue-darker text-sm sm:text-xs md:text-sm">
                  <tbody>
                    <tr className="border-t border-gray-dark  sm:border-0 ">
                      <td className="pl-6 py-3 sm:pl-0">Single</td>
                      <td className="py-3">
                        <span className="font-bold">1</span> form{" "}
                      </td>
                      <td className="pr-6 py-3 text-right sm:pr-0">
                        <span className="bg-gray-darkest font-bold px-2 py-1 rounded-sm">
                          $5 / mo
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-dark ">
                      <td className="pl-6 py-3 sm:pl-0">Freelancer</td>
                      <td className="py-3">
                        <span className="font-bold">5</span> forms{" "}
                      </td>
                      <td className="pr-6 py-3 text-right sm:pr-0">
                        <span className="bg-gray-darkest font-bold px-2 py-1 rounded-sm">
                          $15 / mo
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-dark ">
                      <td className="pl-6 py-3 sm:pl-0">Studio</td>
                      <td className="py-3">
                        <span className="font-bold">15</span> forms{" "}
                      </td>
                      <td className="pr-6 py-3 text-right sm:pr-0">
                        <span className="bg-gray-darkest font-bold px-2 py-1 rounded-sm">
                          $39 / mo
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-dark ">
                      <td className="pl-6 py-3 sm:pl-0">Agency</td>
                      <td className="py-3">
                        <span className="font-bold">50</span> forms{" "}
                      </td>
                      <td className="pr-6 py-3 text-right sm:pr-0">
                        <span className="bg-gray-darkest font-bold px-2 py-1 rounded-sm">
                          $79 / mo
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Link
                href="#"
                className="block btn-indigo font-bold no-underline py-6 rounded-b-md text-center tracking-wider uppercase"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-96">
      <Footer />
      </div>
    
    </>
  );
};

export default PricePlan;
