import { useState } from "react";
import Grid from "./Grid";
import Filter from "./Filter";
import i14Pro from "../../assets/Iphone-14-pro-1.png"; // Example image import

// Example product (keyin APIdan olasiz)
const PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    image: i14Pro, // static file yoki import qiling
  },
];

export default function HomePro() {
  const [selectedBrands, setSelectedBrands] = useState(["Apple"]);
  // Faqat Apple uchun filterlangan productlar
  const filteredProducts = PRODUCTS.filter((p) =>
    selectedBrands.length === 0 ? true : selectedBrands.includes("Apple")
  );

  return (
    <div className="flex min-h-screen mt-[63px]">
      <div className="w-72 p-4">
        <Filter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg">
            Selected Products: <b>{filteredProducts.length}</b>
          </span>
          <select className="border rounded px-3 py-2">
            <option>By rating</option>
            {/* Add more sort options */}
          </select>
        </div>
        <Grid products={filteredProducts} />
      </div>
    </div>
  );
}