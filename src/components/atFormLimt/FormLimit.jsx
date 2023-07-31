import Link from "next/link";
import React from "react";

const FormLimit = ({ open, close }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0  flex flex-col p-3 items-center justify-center bg-opacity-25 bg-slate-400 ">
        <div className="flex flex-col w-1/3 rounded-md bg-white shadow-lg">
          <div className="p-4 flex flex-col justify-center items-start gap-5">
            <h1 className="text-blue-darker text-2xl">At Form Limit</h1>
            <p className="text-blue-darker ">
              Free trials only include one form. Please choose a plan to add
              more forms.
            </p>
          </div>

          <div className="bg-gray flex items-center justify-center   px-6 py-5 rounded-b-md">
            <button
              dusk="modal_modal_cancel"
              type="button"
              className="btn btn-lg btn-white uppercase w-full sm:mr-4 sm:w-auto"
              onClick={close}
            >
              Nevermind
            </button>
            <Link
              dusk="modal_modal_confirm_link"
              href="/plan"
              className="btn btn-lg  btn-indigo  mb-4 uppercase w-full sm:mb-0 sm:w-auto"
            >
              Choose Plan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLimit;
