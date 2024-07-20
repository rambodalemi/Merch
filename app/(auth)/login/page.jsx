"use client";

import { login } from "@/services/authService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import React from "react";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().email().required("This field is required"),
    password: yup.string().trim().required("This field is required"),
  })
  .required();

const RegisterForm = () => {
  const {
    data: loginData,
    mutateAsync: mutateLogin,
    error,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const {
    register: formLogin,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const data = await mutateLogin(formData);
    console.log(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome!");
      redirect("/");
    }
    if (error) {
      toast.error("The entered data is incorrect, please try again");
    }
  }, [isSuccess, error]);
  return (
    <div>
      <div className="relative h-screen dark:bg-black flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/register"
          className="absolute right-4 p-2 border border-zinc-800 dark:hover:bg-zinc-950 hover:bg-gray-100 rounded-md dark:text-white top-4 md:right-8 md:top-8"
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              Brand
            </div>
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Rambod</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-4 lg:p-8 h-full flex items-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex dark:text-white flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome Back!
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to connect to your account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-w-xl items-center space-y-3">
                <label className=" top-0 start-0 p-2 dark:text-white h-10 text-sm truncate">
                  Email :
                </label>
                <div className="relative">
                  <input
                    {...formLogin("email")}
                    className="p-2 block w-full mb-2 border-zinc-800 dark:bg-black border dark:text-white rounded-md text-sm"
                    placeholder="you@email.com"
                  />
                  <span className="text-red-600">{errors.email?.message}</span>
                </div>

                <label
                  htmlFor="hs-floating-input-passowrd-value"
                  className="top-0 start-0 p-2 h-full dark:text-white text-sm truncate"
                >
                  Password :
                </label>
                <div className="relative">
                  <input
                    {...formLogin("password")}
                    type="password"
                    className="p-2 block w-full border-zinc-800 dark:bg-black border dark:text-white rounded-md text-sm"
                    placeholder="********"
                  />
                  <span className="text-red-600">
                    {errors.password?.message}
                  </span>
                </div>
              </div>

              <button
                disabled={isPending}
                className="ml-auto w-full bg-gray-200 hover:bg-gray-300 dark:bg-white mt-6 rounded-md p-2  dark:hover:bg-gray-200"
                type="submit"
              >
                Register
              </button>
            </form>
            <div className="relative dark:text-white">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-zinc-800 bg-black border-black-800 text-gray-100 shadow-sm hover:bg-zinc-950 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign up with Google
            </button>
            <p className="px-8 text-white text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>
              and
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
