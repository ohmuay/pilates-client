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
    <div className="md:max-[2800px]:flex flex-col justify-center font-Cormorant h-[100%]">
      <div className="md:flex flex-col justify-center items-center text-4xl font-semibold text-secondtext2">
        Apply Pilates Class
      </div>
      <div className="md:flex flex-col p-20 gap-4">
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
