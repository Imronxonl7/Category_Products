import React, { memo } from "react";

const TableRow = ({ name, description, category, price, quantity }) => {
  return (
    <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {name}
      </th>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">$ {price}</td>
      <td className="px-6 py-4">{quantity} kg</td>
      <td className="px-6 py-4 pl-10">$ {Math.ceil(price * quantity)}</td>
      <td className="px-6 py-4 flex gap-5 text-right">
        <a href="#" className="font-medium text-blue-700 hover:underline">
          Edit
        </a>
        <a href="#" className="font-medium text-red-700 hover:underline">
          Delete
        </a>
      </td>
    </tr>
  );
};

const TableRowMemo = memo(TableRow)
export default TableRowMemo;
