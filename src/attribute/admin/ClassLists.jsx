export default function ClassLists({ list }) {
  return (
    <>
      <tr className=" text-lg">
        <td className="whitespace-nowrap px-6 py-4">{list.id}</td>
        <td className="whitespace-nowrap px-6 py-4">{list.classname}</td>
        <td className="whitespace-nowrap px-6 py-4">{list.time}</td>
      </tr>
    </>
  );
}
