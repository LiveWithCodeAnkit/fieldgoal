import Image from "next/image";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { PiWarningCircle } from "react-icons/pi";
import { TbBrandZapier, TbCloudUpload } from "react-icons/tb";

const PricePlan = () => {
  return (
    <>
      <div className="flex justify-center items-center p-5 font-Roboto absolute top-[90rem] left-0 right-0 z-10">
        <div className="flex flex-col justify-center items-center gap-8 p-8 relative border bg-white shadow-slate-400 rounded-md">
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
      <div className="h-96 bg-indigo-800 flex justify-center items-center flex-col font-Roboto gap-2 opacity-70">
        <h1 className="text-4xl  text-white">Simple Pricing</h1>
        <h1 className="text-2xl text-blue-500">Always know what you’ll pay</h1>
      </div>

      <div className="flex flex-col justify-start items-start gap-4">
        <div>
          <label>PRICING PLANS</label>
        </div>
        <p>
          Fieldgoal offers plans if you need a single form for your personal
          website or need forms to support all of your clients.
        </p>
        <label>All of our plans include:</label>
        <div className="flex justify-start items-center gap-3">
          <FiDownload />
          <label>Store unlimited submissions</label>
        </div>
        <div className="flex justify-start items-center gap-3">
          <HiOutlineMail />
          <label>Email Forwarding</label>
        </div>
        <div className="flex justify-start items-center gap-3">
          <PiWarningCircle />
          <label>Spam blocking</label>
        </div>
        <div className="flex justify-start items-center gap-3">
          <TbBrandZapier />
          <label>Zapier integration</label>
        </div>
        <div className="flex justify-start items-center gap-3">
          <FiDownload />
          <label>File uploads to S3</label>
        </div>
      </div>
    </>
  );
};

export default PricePlan;
