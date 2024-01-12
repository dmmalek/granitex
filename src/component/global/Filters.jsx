import { Button, Drawer, Select, Slider } from "antd";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const Filters = ({ setFilter }) => {
  const [city, setCity] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [price, setPrice] = useState({
    min: 0,
    max: 7400,
  });
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (city || bedroom || bathroom || price) {
      setFilter({ city, bedroom, bathroom, price });
    }
  }, [city, bedroom, bathroom, price]);

  const handleFilterChange = (value, type) => {
    switch (type) {
      case "city":
        setCity(value);
        break;
      case "bedroom":
        setBedroom(value);
        break;
      case "bathroom":
        setBathroom(value);
        break;
      case "price":
        setPrice({ min: value[0], max: value[1] });
        break;
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleClearFilter = () => {
    setCity("");
    setBedroom("");
    setBathroom("");
    setPrice({ min: 0, max: 7400 });
  };

  return (
    <div className=" container">
      <div className="sm:hidden flex items-center justify-center mt-10">
        <button
          className="btn inline-block"
          type="primary"
          onClick={showDrawer}
        >
          Filter
        </button>

        <Drawer
          placement="bottom"
          closable={false}
          onClose={onClose}
          open={open}
          key="bottom"
        >
          <div className="w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-5 mt-10 p-6 bg-[#004274] ">
            <div className="w-full">
              <Select
                className="w-full"
                placeholder="City"
                onChange={(value) => handleFilterChange(value, "city")}
                value={city}
              >
                <Option value="Los Angeles">Los Angeles</Option>
                <Option value="Houston">Houston</Option>
                <Option value="Chicago">Chicago</Option>
                <Option value="New York">New York</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                className="w-full"
                placeholder="Bedroom"
                onChange={(value) => handleFilterChange(value, "bedroom")}
                value={bedroom}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                className="w-full"
                placeholder="Bathroom"
                onChange={(value) => handleFilterChange(value, "bathroom")}
                value={bathroom}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </div>
            <div className="w-full">
              <Slider
                // className="bg-white"
                range
                defaultValue={[0, 7400]}
                value={[price?.min, price?.max]}
                max={7400}
                min={0}
                onChange={(value) => handleFilterChange(value, "price")}
              />
              <div className="text-white text-center">
                <span>
                  ${price?.min} to ${price.max}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <button
              className="btn !bg-[#EF4444]"
              type="primary"
              onClick={onClose}
            >
              Close
            </button>
            <button onClick={handleClearFilter} className="btn">
              Clear
            </button>
          </div>
        </Drawer>
      </div>
      <div className="hidden sm:block">
        <div className="w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-5 mt-0 p-0 sm:mt-10 sm:p-6 bg-[#004274] ">
          <div className="w-full">
            <Select
              className="w-full"
              placeholder="City"
              onChange={(value) => handleFilterChange(value, "city")}
              value={city}
            >
              <Option value="Los Angeles">Los Angeles</Option>
              <Option value="Houston">Houston</Option>
              <Option value="Chicago">Chicago</Option>
              <Option value="New York">New York</Option>
            </Select>
          </div>
          <div className="w-full">
            <Select
              className="w-full"
              placeholder="Bedroom"
              onChange={(value) => handleFilterChange(value, "bedroom")}
              value={bedroom}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div className="w-full">
            <Select
              className="w-full"
              placeholder="Bathroom"
              onChange={(value) => handleFilterChange(value, "bathroom")}
              value={bathroom}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div className="w-full">
            <Slider
              // className="bg-white"
              range
              defaultValue={[0, 7400]}
              max={7400}
              min={0}
              onChange={(value) => handleFilterChange(value, "price")}
              value={[price?.min, price?.max]}
            />
            <div className="text-white text-center">
              <span>
                ${price?.min} to ${price.max}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button onClick={handleClearFilter} className="btn">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
