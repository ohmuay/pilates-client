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
    <div className="flex flex-col h-full justify-center px-20 py-15">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-4xl font-semibold text-maindark">
          Apply Pilates Class
        </div>
        <div className="text-xl font-light text-thirdtext p-5">
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
            pricepertime={`$${item.pricePerTime}/time`}
            totalprice={`$${item.totalPrice}`}
          />
        ))}
        ;
      </div>
    </div>
  );
}

{
  /* //packages.map((package)=><ApplyClass name={package.name} amount={`Total ${} time`}/>) */
}
