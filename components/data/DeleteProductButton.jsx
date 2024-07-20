import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { removeProduct } from './api'; // Adjust the import path as necessary

function DeleteProductButton({ productId }) {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => removeProduct(productId), {
    // Optional: Perform actions after mutation succeeds or fails
    onSuccess: () => {
      // Invalidate and refetch queries to update the UI
      queryClient.invalidateQueries('products');
    },
    onError: (error) => {
      console.error('Error deleting product:', error);
    },
  });

  return (
    <button
      onClick={() => {
        mutation.mutate();
      }}
    >
      Delete Product
    </button>
  );
}

export default DeleteProductButton;
