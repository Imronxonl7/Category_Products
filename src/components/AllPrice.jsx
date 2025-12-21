import React, { memo } from "react";

const AllPrice = ({ product }) => {
  return (
    <tr>
      <th scope="col" className="px-6 py-3 text-heading text-[20px] font-bold ">
        Umumiy :
      </th>
      <th scope="col" className="px-6 py-3 font-medium"></th>
      <th scope="col" className="px-6 py-3 font-medium"></th>
      <th scope="col" className="px-6 py-3 font-bold text-heading text-[20px]">
        {" "}
        ${" "}
        {product.reduce((sum, el) => {
          sum += Math.ceil(el.price);
          return sum;
        }, 0)}
      </th>
      <th scope="col" className="px-6 py-3 font-bold text-heading text-[20px]">
        {product.reduce((sum, el) => {
          sum += Math.ceil(el.quantity);
          return sum;
        }, 0)}{" "}
        kg
      </th>
      <th scope="col" className="px-6 py-3 font-bold text-heading text-[20px]">
        ${" "}
        {product.reduce((sum, el) => {
          sum += el.price * el.quantity;
          return sum;
        }, 0)}
      </th>
      <th scope="col" className="px-6 py-3 font-medium"></th>
    </tr>
  );
};

const AllPriceMemo = memo(AllPrice)

export default AllPriceMemo;
