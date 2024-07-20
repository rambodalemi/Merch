import Link from "next/link";
import React from "react";

const ProductCard = ({ title, imageLink, price, category, _id }) => {
  return (
    <div>
      <div key={_id}>
        <Link href={`/products/${_id}`}>
          <div>
            <div class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-neutral-50 hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
              <img
                alt={title}
                class="h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 object-center p-2"
                src={imageLink}
              />
            </div>
            <div class="mt-2 flex justify-between">
              <div>
                <h3 class="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p class="mt-1 text-sm text-neutral-500">category</p>
              </div>
              <p
                class="mt-1 text-sm font-medium text-neutral-900 dark:text-white"
                data-testid="ProductElement_PriceRange"
              >
                ${price}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
