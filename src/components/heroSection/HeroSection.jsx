import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { heroSectionCards } from "../constant/heroSection";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center py-40 bg-screen-pattern-gray font-Roboto  relative">
        <div className="flex flex-col items-start justify-center gap-4 mr-64 ml-64 p-2 ">
          <h1 className="text-3xl font-bold w-1/2">
            Capturing form submissions has never been this hassle-free.
          </h1>
          <div className="flex">
            {heroSectionCards.map((card) => (
              <div key={card.id} className="flex flex-col gap-4 p-2">
                <div className="flex justify-start items-center gap-2 p-2">
                  <BsFillPatchCheckFill className="text-3xl  text-[#047756]" />
                  <label className="font-semibold">{card.title}</label>
                </div>
                <p className="text-blue-400 w-80">
                  {card.description}
                  {card.link && (
                    <Link href={card.link.href} className="text-blue-600 hover:underline">
                      {" "}
                      {card.link.text}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
