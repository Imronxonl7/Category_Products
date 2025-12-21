import React, { memo } from 'react'

const SearchInput = ({setSearch}) => {
  return (
     <input
              onChange={(e) => setSearch(e.target.value)}
                className="outline-none py-2 px-2 border-1 rounded-[10px] border-[1px] border-blue-600 text-[20px] text-blue-600"
                type="search"
                placeholder="Mahsulotlarni qidirish"
              />
  )
}
const SearchInputMemo = memo(SearchInput)
export default SearchInputMemo