"use client";

import React from "react";
import Link from "next/link";
import { GoQuestion } from "react-icons/go";

import { addNewContact } from "@/services/contactService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(3)
      .max(255)
      .required("This field is required"),
    title: yup
      .string()
      .trim()
      .min(3)
      .max(255)
      .required("This field is required"),
    phoneNumber: yup
      .string()
      .trim()
      .min(6)
      .max(255)
      .required("This field is required"),
    email: yup.string().email().required("This field is required"),
    description: yup
      .string()
      .trim()
      .min(10)
      .max(500)
      .required("This field is required"),
  })
  .required();

const ContactForm = () => {
  const {
    data: contactData,
    mutateAsync: mutateContact,
    error,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: ["addNewContact"],
    mutationFn: addNewContact,
  });

  const {
    register: formContact,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const data = await mutateContact(formData);
    console.log(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your message has been sent successfull!");
      redirect("/contact/succesfull-contact");
    }
    if (error) {
      toast.error("datas are wrong! pls try again...");
    }
  }, [isSuccess, error]);

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 bg-zinc-950 rounded-md lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl dark:text-white">
              Contact with me
            </h1>
            <p className="mt-1 text-gray-400 dark:text-gray-400">
              I&apos;ll be glad to work with you
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border dark:bg-zinc-950 border-zinc-800 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-zinc-800">
              <h2 className="mb-8 text-xl font-semibold text-white dark:text-gray-200">
                Fill in the form
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="sr-only"
                      >
                        First Name
                      </label>
                      <input
                        {...formContact("name")}
                        className="py-3 px-4 block w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-950 dark:border-zinc-800 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Full Name"
                      />
                      <span className="text-red-600">
                        {errors.name?.message}
                      </span>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="sr-only"
                      >
                        Last Name
                      </label>
                      <input
                        {...formContact("title")}
                        className="py-3 px-4 block w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-950 dark:border-zinc-800 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Title"
                      />
                      <span className="text-red-600">
                        {errors.title?.message}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <input
                      {...formContact("email")}
                      className="py-3 px-4 block w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-950 dark:border-zinc-800 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Email"
                    />
                    <span className="text-red-600">
                      {errors.email?.message}
                    </span>
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      {...formContact("phoneNumber")}
                      className="py-3 px-4 block w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-950 dark:border-zinc-800 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Phone Number"
                    />
                    <span className="text-red-600">
                      {errors.phoneNumber?.message}
                    </span>
                  </div>

                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Details
                    </label>
                    <textarea
                      {...formContact("description")}
                      rows="4"
                      className="py-3 px-4 block w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-950 dark:border-zinc-800 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Your Message"
                    ></textarea>
                    <span className="text-red-600">
                      {errors.description?.message}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-400">
                    We&apos;ll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-zinc-800 dark:divide-zinc-800">
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 size-6 mt-1.5 text-white dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-white dark:text-gray-200">
                    FAQ
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Search our FAQ for answers to anything you might ask.
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/faqs"
                  >
                    Visit FAQ
                    <svg
                      className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className=" flex gap-x-7 py-6">
                <GoQuestion className="flex-shrink-0 size-7 mt-1.5 text-white dark:text-gray-200" />
                <div className="grow">
                  <h3 className="font-semibold text-white dark:text-gray-200">
                    My Biography
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Check out my bio to get more info about me
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/about"
                  >
                    Contact sales
                    <svg
                      className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className=" flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 size-6 mt-1.5 text-white dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-white dark:text-gray-200">
                    Contact me by email
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    If you wish to write me an email instead please use
                  </p>
                  <Link
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    rambod.alemi87@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
