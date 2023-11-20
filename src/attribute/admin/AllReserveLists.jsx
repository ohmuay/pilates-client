import dayjs from "dayjs";

console.log("AllReservelist");

export default function AllReserveLists({ list }) {
  return (
    <>
      <tr className="text-black">
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {list?.user?.firstName}
        </td>
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {list?.classroom?.classname}
        </td>
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {dayjs(list?.date).format("DD/MM/YYYY")}
        </td>
      </tr>
    </>
  );
}
