import { useState } from "react";
import Grid from "../components/products/Grid";
import Filter from "../components/products/Filter";
import i14Pro from "../assets/Iphone-14-pro-1.png"; // Example image import
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../api/api";
import { Spin } from "antd";




export default function HomePro() {
  const [selectedBrands, setSelectedBrands] = useState(["Apple"]);

  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchCategories(id),
  })

  if (isLoading) return <div className="w-full flex justify-center mt-[96px] mb-10"><Spin size="large"></Spin></div>;
  if (error) return <div className="text-red-500 mt-[106px]">Error loading products</div>;
  if (data.products.length === 0) return <div className="text-gray-500 mt-[106px] mb-10">No products found</div>;

  console.log(data);


  if (data.products.length > 0) return (
    <div className="flex min-h-screen mt-[63px]">
      <div className="w-72 p-4">
        <Filter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg">
            Selected Products: <b>{data.products.length}</b>
          </span>
        </div>
        <Grid products={data.products} />
      </div>
    </div>
  );
}