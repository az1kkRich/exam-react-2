import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

function FiltredProductCard({ product }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col relative group h-full">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition">
        <HeartOutlined className="text-xl" />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain mx-auto mb-4"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-center font-medium text-base mb-2">{product.name}</h3>
        </div>
        <p className="text-center text-2xl font-semibold mb-4">${product.price}</p>
        <Button color="default" variant="solid" className='w-full'>
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default FiltredProductCard;