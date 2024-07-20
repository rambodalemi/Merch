import React from "react";
import AllproductsData from "@/components/data/AllproductsData";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { getProductList } from "@/services/productOptionService";
const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["allProducts"],
    queryFn: getProductList,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <>
          <AllproductsData />
        </>
      </HydrationBoundary>
    </div>
  );
};

export default page;
