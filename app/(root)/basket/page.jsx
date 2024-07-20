import React from "react";
import { CiCircleRemove } from "react-icons/ci";
const page = () => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div class="aspect-square overflow-hidden bg-neutral-950 rounded">
            <img
              alt=""
              class="h-full w-full object-contain object-center p-2"
              src="https://storefront.saleor.io/_next/image?url=https%3A%2F%2Fstorefront1.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-grey-hoodie_thumbnail_1024.webp&w=1080&q=75"
            />
          </div>
          <div class="mt-2 flex justify-between">
            <div>
              <h3 class="mt-1 text-sm font-semibold text-white">
                Saleor Grey Hoodie
              </h3>
              <p class="mt-1 text-sm text-neutral-500">Sweatshirts</p>
            </div>
            <div>
              <p class="mt-1 text-sm font-medium text-white">$18.00</p>
              <button
                type="button"
                class="flex flex-shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <CiCircleRemove className="size-7" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="aspect-square overflow-hidden bg-neutral-950 rounded">
            <img
              alt=""
              class="h-full w-full object-contain object-center p-2"
              src="https://storefront.saleor.io/_next/image?url=https%3A%2F%2Fstorefront1.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-grey-hoodie_thumbnail_1024.webp&w=1080&q=75"
            />
          </div>
          <div class="mt-2 flex justify-between">
            <div>
              <h3 class="mt-1 text-sm font-semibold text-white">
                Saleor Grey Hoodie
              </h3>
              <p class="mt-1 text-sm text-neutral-500">Sweatshirts</p>
            </div>
            <div>
              <p class="mt-1 text-sm font-medium text-white">$18.00</p>
              <button
                type="button"
                class="flex flex-shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <CiCircleRemove className="size-7" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="aspect-square overflow-hidden bg-neutral-950 rounded">
            <img
              alt=""
              class="h-full w-full object-contain object-center p-2"
              src="https://storefront.saleor.io/_next/image?url=https%3A%2F%2Fstorefront1.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-grey-hoodie_thumbnail_1024.webp&w=1080&q=75"
            />
          </div>
          <div class="mt-2 flex justify-between">
            <div>
              <h3 class="mt-1 text-sm font-semibold text-white">
                Saleor Grey Hoodie
              </h3>
              <p class="mt-1 text-sm text-neutral-500">Sweatshirts</p>
            </div>
            <div>
              <p class="mt-1 text-sm font-medium text-white">$18.00</p>
              <button
                type="button"
                class="flex flex-shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <CiCircleRemove className="size-7" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-5 justify-center items-center">
        <button
          type="button"
          class="sm:w-96 w-full mt-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default page;
