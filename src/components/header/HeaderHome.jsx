import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineSubject } from "react-icons/md";

const HeaderHome = () => {
  const divStyle = {
    background: "#f3f5f8",
    backgroundColor: "#f3f5f8",
    backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.001), #f3f5f8), url("/screen-pattern-gray.svg?52128fc")`,
    backgroundSize: "cover, 500px auto",
    // height: "847px",
  };
  return (
    <>
      <div className="bg-[#047756] h-2"></div>
      <div
        className="flex justify-center items-center py-20  font-Roboto"
        style={divStyle}
      >
        <div className="flex flex-col items-center lg:items-start justify-center gap-4">
          <div className="flex justify-center items-start gap-20 lg:gap-96 p-5">
            <Link className="flex items-center gap-2 leading-none" href="#">
              <MdOutlineSubject className="text-5xl bg-[#047756] text-white rounded-md" />
              <label className="font-black text-3xl text-[#05B381]">
                PostForm
              </label>
            </Link>
            <nav>
              <ul className="flex items-center gap-5 lg:gap-10 text-lg  text-blue-darker font-bold">
                <li className="hover:underline">
                  <Link href="#">See what&apos;s new! 🎉</Link>
                </li>

                <li className="hover:underline">
                  <Link href="/login">Sign In</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Docs</Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="bg-[#047756] btn-indigo p-4 rounded-md text-white hover:bg-[#05B381]"
                  >
                    Start Free Trial
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="font-extrabold text-5xl lg:w-[47rem] p-5 text-blue-darker font-sans text-center lg:text-start">
            <span>
              Don&apos;t build a whole backend just for one stupid form.
            </span>
          </div>
          <div className="text-xl p-5 w-[32rem]  font-normal text-blue-lighter">
            <span>
              FieldGoal provides form endpoints as a service, so your simple
              sites can stay simple.
            </span>
          </div>
          <div className="flex flex-row-reverse  justify-center items-center  p-3">
            <Image
              src={"/messagePic.png"}
              width={400}
              height={100}
              className="hidden lg:block"
              alt="message pic"
            />
            <div className="animation-code relative">
              <div className="font-mono  sm:flex">
                <div className="bg-blue-light lg:flex-col  leading-loose pl-6 pr-4 py-6 rounded-l-md text-white text-xs  hidden  lg:flex">
                  <span className="mb-3">1</span>
                  <span className="mb-3">2</span>
                  <span className="mb-3">3</span>
                  <span className="mb-3">4</span>
                  <span>5</span>
                </div>

                <div className="bg-blue-darkest flex flex-col px-10 py-6 rounded-lg text-white text-xs w-full sm:px-6 md:text-xxs sm:rounded-l-none md:rounded-l-md lg:px-10 lg:rounded-l-none lg:text-sm">
                  <span className="mb-5 md:mb-4">
                    &lt;<span className="text-pink-code">form</span>{" "}
                    <span className="text-green-code">action</span>=
                    <span className="text-yellow-code">
                      &quot;https://fieldgoal.io/f/tGhtN&quot;
                    </span>{" "}
                    <span className="text-green-code">method</span>=
                    <span className="text-yellow-code">&quot;POST&quot;</span>
                    &gt;
                  </span>
                  <span className="mb-5 pl-8 md:mb-4">
                    &lt;<span className="text-pink-code">input</span>{" "}
                    <span className="text-green-code">type</span>=
                    <span className="text-yellow-code">&quot;text&quot;</span>{" "}
                    <span className="text-green-code">name</span>=
                    <span className="text-yellow-code">
                      &quot;first_name&quot;
                    </span>
                    &gt;
                  </span>
                  <span className="mb-5 pl-8 md:mb-4">
                    &lt;<span className="text-pink-code">input</span>{" "}
                    <span className="text-green-code">type</span>=
                    <span className="text-yellow-code">&quot;text&quot;</span>{" "}
                    <span className="text-green-code">name</span>=
                    <span className="text-yellow-code">
                      &quot;last_name&quot;
                    </span>
                    &gt;
                  </span>
                  <span className="mb-5 pl-8 md:mb-4">
                    &lt;<span className="text-pink-code">button</span>{" "}
                    <span className="text-green-code">type</span>=
                    <span className="text-yellow-code">&quot;submit&quot;</span>
                    &gt;Submit&lt;/
                    <span className="text-pink-code">button</span>&gt;
                  </span>
                  <span>
                    &lt;/<span className="text-pink-code">form</span>&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
