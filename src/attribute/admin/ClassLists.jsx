export default function ClassLists({ list }) {
  return (
    <>
      <tr>
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {list.id}
        </td>
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {list.classname}
        </td>
        <td className="p-2 border-b border-secondtext2 bg-white text-center text-base">
          {list.time}
        </td>
      </tr>
    </>
  );
}
