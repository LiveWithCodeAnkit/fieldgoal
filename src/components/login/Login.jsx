"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import { MdOutlineSubject } from "react-icons/md";
import Footer from "../footer/Footer";
import { useLogin } from "./hook/useLogin";

const Login = () => {
  const divStyle = {
    background: "#f3f5f8",
    backgroundColor: "#f3f5f8",
    backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.001), #f3f5f8), url("/screen-pattern-gray.svg?52128fc")`,
    backgroundSize: "cover, 500px auto",
  };

  const { initialValues, schema, handleSubmit } = useLogin();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="bg-[#047756] h-2"></div>
          <div
            style={divStyle}
            className="flex flex-col justify-center items-center gap-12"
          >
            <div className="flex  justify-center items-start pt-9">
              <div className="flex flex-col justify-center items-center gap-12 p-10">
                <div className="flex justify-center items-center">
                  <Link
                    className="flex items-center gap-2 leading-none"
                    href="#"
                  >
                    <MdOutlineSubject className="text-5xl bg-[#047756] text-white rounded-md" />
                    <label className="font-black text-3xl text-[#05B381]">
                      PostForm
                    </label>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center  bg-white border-b-2 rounded-md">
                  <div className="flex justify-center items-center">
                    <h1 className="p-4 font-normal text-blue-darker text-xl">
                      Welcome Back
                    </h1>
                  </div>

                  <div className="flex flex-col justify-center items-start gap-8 p-10 w-full">
                    <div className="flex flex-col justify-center items-start gap-3">
                      <label className="classic-label">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className="w-96 classic-typing-input-on-white"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="font-normal text-blue-darker"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                      <label className="classic-label">Password</label>
                      <Field
                        type="text"
                        name="password"
                        className="w-96 classic-typing-input-on-white"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="font-normal text-blue-darker"
                      />
                    </div>
                    <div className="flex justify-between items-start gap-10 text-blue-darker">
                      <div className="flex justify-center items-center gap-2 ">
                        <input type="checkbox" className="accent-[#05B381]" />
                        Remember me
                      </div>
                      <Link href={"#"} className="classic-link">
                        Forgot your password?
                      </Link>
                    </div>
                    <button className="bg-[#047756] btn btn-indigo btn-lg uppercase w-full">
                      LOG IN
                    </button>
                  </div>
                  <div className="flex justify-center items-center bg-gray-lighter border-t-2 border-gray-dark w-full p-7 rounded-b ">
                    <div className="flex justify-center items-center gap-2 text-blue-darker text-center">
                      <label>Don&apos;t have an account yet?</label>
                      <Link href="/register">Sign up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
