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
      <td className="px-6 py-4">$ {Math.ceil(price * quantity)}</td>
      <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-fg-brand hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

const TableRowMemo = memo(TableRow)
export default TableRowMemo;
