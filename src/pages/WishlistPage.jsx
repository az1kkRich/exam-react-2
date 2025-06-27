import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { FcFullTrash } from 'react-icons/fc';
import { Button, Popconfirm } from 'antd';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCartStore();

  return (
    <div className="container mx-auto px-5 py-6 mt-[63px]">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-xl border-amber-600 border flex flex-col justify-between"
            >
              <img src={item.images[0]} alt={item.title} className="h-36 border object-contain mb-4" />
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="font-medium">${item.price}</p>

              <div className="mt-4 flex justify-between items-center">
                <button
                size='large'
                  onClick={() => {
                    addToCart(item); 
                    toast.success(`${item.title} added to cart!`);
                    removeFromWishlist(item.id); // Remove from wishlist after adding to cart
                  }}
                  className="bg-black text-white px-4 py-1 rounded cursor-pointer text-xl"
                >
                  Add to Cart
                </button>
                <Popconfirm
                  title="Are you sure you want to remove this item from your wishlist?"
                  onConfirm={() => {
                    removeFromWishlist(item.id);
                    toast.success(`${item.title} removed from wishlist!`);
                  }}
                  okText="Yes"
                  cancelText="No" >

                    <Button className="bg-red-200! ">
                      <FcFullTrash size={32}/>
                    </Button>

                  </Popconfirm>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
