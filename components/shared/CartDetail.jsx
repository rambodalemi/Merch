import React from "react";

const CartDetail = () => {
  return (
    <div>
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
                    alt="Acme Drawstring Bag"
                    loading="lazy"
                    width="64"
                    height="64"
                    decoding="async"
                    data-nimg="1"
                    class="h-full w-full object-cover"
                    srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&amp;w=128&amp;q=75"
                    style="color: transparent;"
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
            <p>Taxes</p>
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
  );
};

export default CartDetail;
