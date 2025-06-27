import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Input, Button, Popconfirm } from 'antd';
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();

  // Mahsulot soni .
  const subtotal = cart.reduce((acc, item) => acc + item.price * 1, 0);
  const tax = 50;
  const shipping = 29;
  const total = subtotal + tax + shipping;

  return (
    <div className="flex flex-col lg:flex-row gap-8 container px-5 py-6 mx-auto mt-[63px]">
      {/* Shopping Cart */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-6">
            <div className="flex items-center gap-4">
              <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">#{item.id}</p>
              </div>
            </div>

            {/* Quantity Controls & Price */}
            <div className="flex items-center gap-4">
              <Button shape="circle" icon={<MinusOutlined />} size="small" />
              <span className="border px-4 py-1 rounded">1</span>
              <Button shape="circle" icon={<PlusOutlined />} size="small" />
              <p className="w-20 text-right font-semibold">${item.price}</p>
              {/* Remove Button */}
              <Popconfirm
                title="Are you sure you want to remove this item from your cart?"
                onConfirm={() => {
                  removeFromCart(item.id);
                }}
                okText="Yes"
                cancelText="No" >

                <Button type="text" icon={<CloseOutlined />} />
              </Popconfirm>

            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-[400px] bg-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <p className="mb-1 text-sm">Discount code / Promo code</p>
        <Input placeholder="Code" className="mb-4" />

        <p className="mb-1 text-sm">Your bonus card number</p>
        <div className="flex gap-2 mb-4">
          <Input placeholder="Enter Card Number" />
          <Button type="default">Apply</Button>
        </div>

        <div className="space-y-2 text-sm border-t pt-4">
          <div className="flex justify-between">
            <span>Hammasini narxi</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxminiy soliq</span>
            <span>${tax}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxminiy yetkazib berish </span>
            <span>${shipping}</span>
          </div>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-6 border-t pt-4">
          <span>Jami Elementlar narxi</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button
          type="primary"
          block
          size="large"
          className="mt-6 bg-black hover:bg-gray-800"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
