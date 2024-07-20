import React from "react";
import GetCartData from "@/components/data/GetCartData";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { getCart } from "@/services/cartService";
const Basket = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getCart"],
    queryFn: getCart,
  });
  return (
    <div>
      <div
        id="hs-overlay-right"
        class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full  z-[80] w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white"
        tabindex="-1"
      >
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h3 class="font-bold text-gray-800 dark:text-white">My Cart</h3>
          <button type="button" data-hs-overlay="#hs-overlay-right">
            <div class="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="h-6 transition-all ease-in-out hover:scale-110 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div class="p-4">
          {/* <div class="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              ></path>
            </svg>
            <p class="mt-6 text-center text-2xl font-bold">
              Your cart is empty.
            </p>
          </div> */}
          <div class="flex h-full flex-col justify-between overflow-hidden p-1">
            <ul class="flex-grow overflow-auto py-4">
              <li class="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
                <div class="relative flex w-full flex-row justify-between px-1 py-4">
                  <div class="absolute z-40 -mt-2 ml-[55px]">
                    <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                      <button
                        type="submit"
                        aria-label="Remove cart item"
                        aria-disabled="false"
                        class="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          class="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                      <p aria-live="polite" class="sr-only" role="status"></p>
                    </form>
                  </div>
                  <a
                    class="z-30 flex flex-row space-x-4"
                    href="/product/acme-drawstring-bag?color=White&amp;size=7+x+9+inch"
                  >
                    <div class="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <img
                        class="h-full w-full object-cover"
                        src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&amp;w=128&amp;q=75"
                      />
                    </div>
                    <div class="flex flex-1 flex-col text-base">
                      <span class="leading-tight">Acme Drawstring Bag</span>
                      <p class="text-sm text-neutral-500 dark:text-neutral-400">
                        White / 7 x 9 inch
                      </p>
                    </div>
                  </a>
                  <div class="flex h-16 flex-col justify-between">
                    <p class="flex justify-end space-y-2 text-right text-sm">
                      $7.00<span class="ml-1 inline">USD</span>
                    </p>
                    <div class="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                      <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                        <button
                          type="submit"
                          aria-label="Reduce item quantity"
                          aria-disabled="false"
                          class="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-4 w-4 dark:text-neutral-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h14"
                            ></path>
                          </svg>
                        </button>
                        <p aria-live="polite" class="sr-only" role="status"></p>
                      </form>
                      <p class="w-6 text-center">
                        <span class="w-full text-sm">1</span>
                      </p>
                      <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                        <button
                          type="submit"
                          aria-label="Increase item quantity"
                          aria-disabled="false"
                          class="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-4 w-4 dark:text-neutral-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            ></path>
                          </svg>
                        </button>
                        <p aria-live="polite" class="sr-only" role="status"></p>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="py-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div class="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                <p>totalQTY</p>
                <p class="text-right text-base text-black dark:text-white">
                  $0.00<span class="ml-1 inline">USD</span>
                </p>
              </div>
              <div class="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                <p>Shipping</p>
                <p class="text-right">Calculated at checkout</p>
              </div>
              <div class="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                <p>Total</p>
                <p class="text-right text-base text-black dark:text-white">
                  $7.00<span class="ml-1 inline">USD</span>
                </p>
              </div>
            </div>
            <a
              href="https://dev-vercel-shop.myshopify.com/cart/c/Z2NwLXVzLWVhc3QxOjAxSjI5N1k1MTlSQkMyOVpNR1NGM05XR1la?key=b7f0625fdbbe2cb201f0baa64afd34cb"
              class="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
            >
              Proceed to Checkout
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
