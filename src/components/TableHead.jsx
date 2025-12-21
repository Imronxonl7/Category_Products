import React, { memo } from "react";

const TableHead = () => {
  return (
    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
      <tr>
        <th scope="col" className="px-6 py-3 font-medium">
          Mahsulot nomi
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Mahsulot haqida
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Bo'limi
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Mahsulot narxi
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Mahsulot miqdori
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Mahsulot umumiy narxi
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Boshqaruv
          <span className="sr-only">Edit</span>
          <span className="sr-only">Delete</span>
        </th>
      </tr>
    </thead>
  );
};
const TableHeadMemo = memo(TableHead)
export default TableHeadMemo;
