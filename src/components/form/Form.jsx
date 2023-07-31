"use client";
import React, { useState } from "react";
import Link from "next/link";
import FormLimit from "../atFormLimt/FormLimit";

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="flex justify-center items-center p-5 h-full pb-[35rem]">
        <div className="flex flex-col justify-center  gap-10 w-full lg:w-1/2">
          <div className="flex justify-between">
            <h1 className="leading-tight text-4xl text-blue-darker">
              Your Forms
            </h1>
            <button
              className="btn btn-indigo btn-sm uppercase"
              onClick={handleOpen}
            >
              New Form
            </button>
          </div>

          <ol className="bg-white border-t-2 border-gray-dark shadow rounded-2xl sm:rounded-b-lg sm:rounded-t-none">
            <li className="flex items-center justify-between px-8 py-6 ">
              <div>
                <Link
                  className="block font-bold mb-2 no-underline text-blue-darker hover:underline"
                  href="#"
                >
                  Ankur Yadav
                </Link>
                <span className="break-all text-sm">
                  https://fieldgoal.io/f/v2yA3g
                </span>
              </div>
              <div className="hidden sm:block">
                <button className="copy-link text-blue-light text-sm hover:underline">
                  <span className="text-blue-light text-sm hover:underline">
                    Copy Embed Code
                  </span>
                </button>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <FormLimit open={open} close={handleOpen}/>
    </>
  );
};

export default Form;
