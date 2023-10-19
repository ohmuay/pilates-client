import dayjs from "dayjs";

console.log("AllReservelist");

export default function AllReserveLists({ list }) {
  return (
    <>
      <tr className="border dark:border-maindark text-lg">
        <td className="whitespace-nowrap px-6 py-4">{list?.user?.firstName}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {list?.classroom?.classname}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {dayjs(list?.date).format("DD/MM/YYYY")}
        </td>
      </tr>
    </>
  );
}
