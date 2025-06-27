import FiltredProductCard from "./FiltredProductCard";



export default function Grid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <FiltredProductCard key={product.id} product={product} delayIndex={index} />
      ))}
    </div>
  );
}