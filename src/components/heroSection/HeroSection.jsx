import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { heroSectionCards } from "../constant/heroSection";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center py-40 bg-[#F4F1F1] font-Roboto  relative">
        <div className="flex flex-col items-start justify-center gap-4 mr-64 ml-64 p-2 ">
          <h1 className="text-3xl font-bold w-1/2">
            Capturing form submissions has never been this hassle-free.
          </h1>
          <div className="flex">
            <div className=" flex flex-col justify-start  gap-4 p-2">
              <div className="flex justify-start items-center gap-2 p-2">
                <BsFillPatchCheckFill className="text-3xl  text-[#047756]" />
                <label className="font-semibold">
                  Build your form your way
                </label>
              </div>
              <p className="text-blue-400 w-80">
                You already know HTML and CSS, so build your form exactly the
                way you want to. We don't get in your way with JavaScript
                widgets, WYSIWYG editors, or janky iframes.
              </p>
            </div>
            <div className=" flex flex-col justify-start  gap-4 p-2">
              <div className="flex justify-start items-center gap-2 p-2">
                <BsFillPatchCheckFill className="text-3xl  text-[#047756]" />
                <label className="font-semibold">
                  Point your form at FieldGoal
                </label>
              </div>
              <p className="text-blue-400 w-80">
                Create a new FieldGoal endpoint and we'll give you a unique URL
                to point your form at. Add it as your form's action attribute
                and you're all set.
              </p>
            </div>
            <div className=" flex flex-col justify-start  gap-4 p-2">
              <div className="flex justify-start items-center gap-2 p-2">
                <BsFillPatchCheckFill className="text-3xl  text-[#047756]" />
                <label className="font-semibold text-center ">
                  Delivered to where you desire
                </label>
              </div>
              <p className="text-blue-400 w-80">
                With Zapier integration, you can get your submissions delivered
                to wherever you desire.
                <Link href={"#"} className="text-blue-600 hover:underline">
                  {" "}
                  Learn more about using Zapier to integrate apps with
                  FieldGoal.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
