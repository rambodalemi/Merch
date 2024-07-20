import React from "react";

const Sub = () => {
  return (
    <>
      <div class="max-w-[85rem] border-t mt-20 border-t-gray-200 dark:border-t-zinc-950 px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="max-w-md">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Subscribe
            </h2>
            <p class="mt-3 text-gray-600 dark:text-neutral-400">
              Subscribe and start making the most of every engagement.
            </p>
          </div>

          <form>
            <div class="w-full sm:max-w-lg md:ms-auto">
              <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div class="w-full">
                  <label for="hero-input" class="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p class="mt-3 text-sm text-gray-500 dark:text-neutral-500">
                No spam, unsubscribe at any time
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sub;
