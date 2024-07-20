import React from "react";
import Basket from "./Basket";
import SmSidebar from "./SmSidebar";
const Nav = () => {
  return (
    <>
      <nav class="relative flex items-center justify-between p-4 lg:px-6">
        <div class="block flex-none md:hidden">
          <button
            data-hs-overlay="#hs-overlay-left"
            class="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex w-full items-center">
          <div class="flex w-full md:w-1/3">
            <a
              class="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              href="/"
            >
              <div class="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Acme Store logo"
                  viewBox="0 0 32 28"
                  class="fill-black dark:fill-white h-[16px] w-[16px]"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <div class="ml-2 flex-none text-black dark:text-white text-sm font-medium uppercase md:hidden lg:block">
                Acme Store
              </div>
            </a>
            <ul class="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <a
                  class="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  class="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/shirts"
                >
                  Shirts
                </a>
              </li>
              <li>
                <a
                  class="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/stickers"
                >
                  Stickers
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden justify-center md:flex md:w-1/3">
            <form class="w-max-[550px] relative w-full lg:w-80 xl:w-full">
              <input
                type="text"
                placeholder="Search for products..."
                autocomplete="off"
                class="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                name="search"
              />
              <div class="absolute right-0 top-0 mr-3 flex h-full items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-4 text-black dark:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>
              </div>
            </form>
          </div>
          <div class="flex justify-end md:w-1/3">
            <button data-hs-overlay="#hs-overlay-right">
              <div class="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-4 transition-all ease-in-out hover:scale-110 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  ></path>
                </svg>
                <div class="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                  1
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <Basket />
      <SmSidebar />
    </>
  );
};

export default Nav;
