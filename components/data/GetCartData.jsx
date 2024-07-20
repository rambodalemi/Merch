"use client";

import { getCart } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";
import CartDetail from "../shared/CartDetail";

const GetCartData = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getCart"],
    queryFn: getCart,
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
      <>
        {data.data.map((cart) => (
          <CartDetail
            key={cart._id}
            totalAmount={cart.totalAmount}
            totalQTY={cart.totalQTY}
            cartItems={cart.cartItems}
          />
        ))}
      </>
    );
  }
};

export default GetCartData;
