import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { heroSectionCards } from "../constant/heroSection";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center pb-80 bg-screen-pattern-gray font-sans  relative">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:px-96">
          <h1 className="text-2xl text-blue-darker font-extrabold lg:w-1/2 text-center lg:text-start p-2">
            Capturing form submissions has never been this hassle-free.
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            {heroSectionCards.map((card) => (
              <div key={card.id} className="flex flex-col  gap-3 p-2">
                <div className="flex justify-start items-center gap-2 p-2">
                  <BsFillPatchCheckFill className="text-3xl  text-[#047756]" />
                  <label className="font-bold text-blue-darker">{card.title}</label>
                </div>
                <p className="text-blue-lighter  p-2">
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
