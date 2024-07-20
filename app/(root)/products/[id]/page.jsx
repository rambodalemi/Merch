import React from "react";
import OneProductData from "@/components/data/OneProductData";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { getOneProduct } from "@/services/productOptionService";
const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["oneProduct"],
    queryFn: getOneProduct,
  });

  return (
    <div>
      <div class="mx-auto px-4">
        <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div class="h-full w-full basis-full lg:basis-4/6">
            <div class="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
              <img
                alt="Acme Slip-On Shoes - shoes-1"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                class="h-full w-full object-contain"
                sizes="(min-width: 1024px) 66vw, 100vw"
                srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=3840&amp;q=75 3840w"
                src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=3840&amp;q=75"
              />
              <div class="absolute bottom-[15%] flex w-full justify-center">
                <div class="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                  <a
                    aria-label="Previous product image"
                    class="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                    href="/product/acme-slip-on-shoes?image=3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      class="h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      ></path>
                    </svg>
                  </a>
                  <div class="mx-1 h-6 w-px bg-neutral-500"></div>
                  <a
                    aria-label="Next product image"
                    class="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                    href="/product/acme-slip-on-shoes?image=1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      class="h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <ul class="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              <li class="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  class="h-full w-full"
                  href="/product/acme-slip-on-shoes?image=0"
                >
                  <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-blue-600">
                    <img
                      alt="Acme Slip-On Shoes - shoes-1"
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&amp;w=256&amp;q=75"
                    />
                  </div>
                </a>
              </li>
              <li class="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  class="h-full w-full"
                  href="/product/acme-slip-on-shoes?image=1"
                >
                  <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <img
                      alt="Acme Slip-On Shoes - shoes-2"
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-2.png%3Fv%3D1690004110&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-2.png%3Fv%3D1690004110&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-2.png%3Fv%3D1690004110&amp;w=256&amp;q=75"
                      
                    />
                  </div>
                </a>
              </li>
              <li class="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  class="h-full w-full"
                  href="/product/acme-slip-on-shoes?image=2"
                >
                  <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <img
                      alt="Acme Slip-On Shoes - shoes-3"
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-3.png%3Fv%3D1690004110&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-3.png%3Fv%3D1690004110&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-3.png%3Fv%3D1690004110&amp;w=256&amp;q=75"
                      
                    />
                  </div>
                </a>
              </li>
              <li class="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  class="h-full w-full"
                  href="/product/acme-slip-on-shoes?image=3"
                >
                  <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <img
                      alt="Acme Slip-On Shoes - shoes-4"
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-4.png%3Fv%3D1690004110&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-4.png%3Fv%3D1690004110&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-4.png%3Fv%3D1690004110&amp;w=256&amp;q=75"
                      
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="basis-full lg:basis-2/6">
            <div class="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 class="mb-2 text-5xl text-white font-medium">Acme Slip-On Shoes</h1>
              <div class="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                <p>
                  $45.00<span class="ml-1 inline">USD</span>
                </p>
              </div>
            </div>
            <dl class="mb-8">
              <dt class="mb-4 text-sm uppercase tracking-wide">Size</dt>
              <dd class="flex flex-wrap gap-3">
                <button
                  aria-disabled="false"
                  title="Size 1"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  1
                </button>
                <button
                  aria-disabled="false"
                  title="Size 1.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  1.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 2"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  2
                </button>
                <button
                  aria-disabled="true"
                  disabled=""
                  title="Size 2.5 (Out of Stock)"
                  class="flex min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
                >
                  2.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 3"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  3
                </button>
                <button
                  aria-disabled="false"
                  title="Size 3.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  3.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 4"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  4
                </button>
                <button
                  aria-disabled="false"
                  title="Size 4.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  4.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  5
                </button>
                <button
                  aria-disabled="true"
                  disabled=""
                  title="Size 5.5 (Out of Stock)"
                  class="flex min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
                >
                  5.5
                </button>
                <button
                  aria-disabled="true"
                  disabled=""
                  title="Size 6 (Out of Stock)"
                  class="flex min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
                >
                  6
                </button>
                <button
                  aria-disabled="false"
                  title="Size 6.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  6.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 7"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  7
                </button>
                <button
                  aria-disabled="false"
                  title="Size 7.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  7.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 8"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  8
                </button>
                <button
                  aria-disabled="false"
                  title="Size 8.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  8.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 9"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  9
                </button>
                <button
                  aria-disabled="false"
                  title="Size 9.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  9.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 10"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  10
                </button>
                <button
                  aria-disabled="true"
                  disabled=""
                  title="Size 10.5 (Out of Stock)"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 relative z-10 cursor-not-allowed overflow-hidden text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
                >
                  10.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 11"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  11
                </button>
                <button
                  aria-disabled="false"
                  title="Size 11.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  11.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 12"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  12
                </button>
                <button
                  aria-disabled="false"
                  title="Size 12.5"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  12.5
                </button>
                <button
                  aria-disabled="false"
                  title="Size 13"
                  class="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 "
                >
                  13
                </button>
              </dd>
            </dl>
            <div class="prose mx-auto max-w-6xl text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]">
              <p>
                Step into summer! Every time your head looks&nbsp;down, you'll
                see these beauties, and your mood bounces right back up.
              </p>
              <p>
                Sleek, easy, and effortlessly stylish. Acme&nbsp;Slip-On Shoes
                are the ultimate get-up-and-go footwear. The low-profile slip-on
                canvas upper offers unbeatable convenience, while the clean
                design makes this all-white slip-on the perfect choice for
                anyone with places to go and things to do. One of the most
                popular designs, these shoes are the perfect middle ground
                between style and convenience.
              </p>
              <ul>
                <li>
                  <span >Iconic slip-on shoe</span>
                  <br />
                </li>
                <li>
                  <span >
                    Low profile canvas uppers
                  </span>
                  <br />
                </li>
                <li>
                  <span >
                    Supportive padded collars
                  </span>
                  <br />
                </li>
                <li>
                  <span >Elastic side accents</span>
                  <br />
                </li>
                <li>
                  <span >
                    Signature rubber waffle outsoles
                  </span>
                  <br />
                </li>
              </ul>
            </div>
            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
              <button
                aria-label="Please select an option"
                aria-disabled="true"
                class="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white cursor-not-allowed opacity-60 hover:opacity-60"
              >
                <div class="absolute left-0 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
                Add To Cart
              </button>
              <p aria-live="polite" class="sr-only" role="status"></p>
            </form>
          </div>
        </div>
        <div class="py-8">
          <h2 class="mb-4 text-2xl font-bold">Related Products</h2>
          <ul class="flex w-full gap-4 overflow-x-auto pt-1">
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-hoodie">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Hoodie"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&amp;w=3840&amp;q=75"
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Hoodie
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $50.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-cap">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Cap"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&amp;w=3840&amp;q=75"
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Cap
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $20.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-cup">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Cup"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Cup
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $15.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-t-shirt">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme T-Shirt"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme T-Shirt
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $20.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a
                class="relative h-full w-full"
                href="/product/acme-baby-onesie"
              >
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Baby Onesie"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Baby Onesie
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $10.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a
                class="relative h-full w-full"
                href="/product/acme-bomber-jacket"
              >
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Bomber Jacket"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Bomber Jacket
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $50.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a
                class="relative h-full w-full"
                href="/product/acme-rainbow-prism-t-shirt"
              >
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Prism T-Shirt"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Prism T-Shirt
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $25.00
                        <span class="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a
                class="relative h-full w-full"
                href="/product/acme-geometric-circles-t-shirt"
              >
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Circles T-Shirt"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Circles T-Shirt
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $20.00
                        <span class="ml-1 inline @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-baby-cap">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Baby Cap"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Baby Cap
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $10.00
                        <span class="ml-1 inline @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a class="relative h-full w-full" href="/product/acme-pacifier">
                <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <img
                    alt="Acme Pacifier"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=3840&amp;q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&amp;w=3840&amp;q=75"
                    
                  />
                  <div class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Acme Pacifier
                      </h3>
                      <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $10.00
                        <span class="ml-1 inline @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <>
          <OneProductData />
        </>
      </HydrationBoundary> */}
    </div>
  );
};

export default page;
