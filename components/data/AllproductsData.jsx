"use client";

import { getProductList } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/cards/ProductCard";

const AllproductsData = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProductList,
  });

  if (isLoading) {
    return <>loading...</>;
  }

  if (isError) {
    return <>Error</>;
  }

  if (isSuccess) {
    console.log(data.data);
    return (
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((p) => (
          <ProductCard
            key={p._id}
            title={p.title}
            price={p.price}
            category={p.category}
            imageLink={p.imageLink}
          />
        ))}
        <div key={product.id}>
          <span>{product.name}</span>
          <DeleteProductButton productId={product.id} />
        </div>
      </div>
    );
  }
};

export default AllproductsData;
