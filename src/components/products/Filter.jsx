import { Checkbox, Input, Collapse } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Panel } = Collapse;

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

function Filter({ selectedBrands, setSelectedBrands }) {
  const [search, setSearch] = useState("");

  const onBrandChange = (checkedValue) => {
    setSelectedBrands(checkedValue);
  };

  return (
    <aside className="w-full max-w-[270px] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <Collapse
        bordered={false}
        defaultActiveKey={["brand"]}
        expandIcon={({ isActive }) => (
          <CaretDownOutlined rotate={isActive ? 180 : 0} />
        )}
        className="!bg-white"
      >
        <Panel header={<span className="font-semibold text-lg">Brand</span>} key="brand">
          <Input
            size="small"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-2"
          />
          <Checkbox.Group
            value={selectedBrands}
            onChange={onBrandChange}
            className="flex flex-col gap-2"
          >
            {brands
              .filter(b =>
                b.label.toLowerCase().includes(search.toLowerCase())
              )
              .map((brand) => (
                <Checkbox key={brand.label} value={brand.label}>
                  <span className="flex items-center">
                    {brand.label}
                    <span className="ml-1 text-xs text-gray-400">{brand.count}</span>
                  </span>
                </Checkbox>
              ))}
          </Checkbox.Group>
        </Panel>

        {/* Add more filter sections as needed */}
        <Panel header="Battery capacity" key="battery" />
        <Panel header="Screen type" key="screen" />
        <Panel header="Screen diagonal" key="diagonal" />
        <Panel header="Protection class" key="protection" />
        <Panel header="Built-in memory" key="memory" />
      </Collapse>
    </aside>
  );
}

export default Filter;