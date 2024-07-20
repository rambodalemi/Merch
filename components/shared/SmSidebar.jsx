import React from "react";

const SmSidebar = () => {
  return (
    <div>
      <div
        id="hs-overlay-left"
        class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full w-full z-[80] flex-col bg-white pb-6 dark:bg-black"
        tabindex="-1"
      >
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h3 class="font-bold text-gray-800 dark:text-white">
            Offcanvas title
          </h3>
          <button
            class="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
            data-hs-overlay="#hs-overlay-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div class="p-4">
          <div class="mb-4 w-full">
            <form class="w-max-[550px] relative w-full lg:w-80 xl:w-full">
              <input
                placeholder="Search for products..."
                autocomplete="off"
                class="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                type="text"
                name="search"
              />
              <div class="absolute right-0 top-0 mr-3 flex dark:text-white h-full items-center">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>
              </div>
            </form>
          </div>
          <ul class="flex w-full flex-col">
            <li class="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white">
              <a href="/search">All</a>
            </li>
            <li class="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white">
              <a href="/search/shirts">Shirts</a>
            </li>
            <li class="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white">
              <a href="/search/stickers">Stickers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmSidebar;
