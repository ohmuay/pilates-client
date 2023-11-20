import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import ApplyClass from "../attribute/applyclass/ApplyClass";

export default function ApplyPage() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("/packages")
      .then((res) => setPackages(res.data.packages))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center font-sans h-[100%] gap-4">
      <div className="flex justify-center items-center text-4xl font-bold text-maintext tracking-wider">
        Apply Pilates Class
      </div>
      <div className="flex flex-col py-10 px-20 gap-4">
        {packages.map((item) => (
          <ApplyClass
            key={item.id}
            id={item.id}
            name={item.packageName}
            amount={`Total ${item.amountTotal} times`}
            pricepertime={`${item.pricePerTime} bath/time`}
            totalprice={`${item.totalPrice} bath`}
          />
        ))}
      </div>
    </div>
  );
}
