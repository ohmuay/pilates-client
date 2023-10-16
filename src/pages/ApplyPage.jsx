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
    <div className="flex flex-col justify-center px-10 pt-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-4xl font-semibold text-secondtext2 drop-shadow-md pt-10">
          Apply Pilates Class
        </div>
        <div className="text-xl font-light text-thirdtext pb-5">
          Welcome to the world of good health for yourself.
        </div>
      </div>
      <div className="px-20">
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

{
  /* //packages.map((package)=><ApplyClass name={package.name} amount={`Total ${} time`}/>) */
}
