import { useState } from "react";
import Grid from "../components/products/Grid";
import Filter from "../components/products/Filter";
import i14Pro from "../assets/Iphone-14-pro-1.png"; // Example image import
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../api/api";
import { Button, Drawer, Spin } from "antd";
import { IoFilterSharp } from "react-icons/io5";
import { MdFilterListOff } from "react-icons/md";

const brands = [
  { label: "Apple", count: 110 },
  { label: "Samsung", count: 125 },
  { label: "Xiaomi", count: 68 },
  { label: "Poco", count: 44 },
  { label: "OPPO", count: 36 },
  { label: "Honor", count: 10 },
  { label: "Nokia", count: 22 },
  { label: "Realme", count: 35 },
];


export default function HomePro() {
  const [selectedBrands, setSelectedBrands] = useState(["Apple"]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

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
      <div className="w-72 hidden md:flex p-4">
        <Filter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} brands={brands}/>
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg">
            Selected Products: <b>{data.products.length}</b>
          </span>
          <Button icon={<IoFilterSharp />} onClick={showDrawer}>Filter</Button>
        </div>
        <Grid products={data.products} />
      </div>

      {/* Filter Menu for mobile */}
      <Drawer 
        title='Filterlash'
        placement="right"
        onClose={onClose}
        open={open} 
        closeIcon={<MdFilterListOff />} 
        >
          <Filter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} brands={brands}/>
      </Drawer>
    </div>
  );
}