import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function FiltredProductCard({ product }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col relative group h-full">
      
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-40 h-40 object-contain mx-auto mb-4"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-center font-medium text-base mb-2">{product.name}</h3>
        </div>
        <p className="text-center text-2xl font-semibold mb-4">${product.price}</p>
        <Link to={`/detail/${product.id}`} className="text-center text-blue-500 hover:underline ">
        <Button color="default" variant="solid" className='w-full'>
          See More
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default FiltredProductCard;