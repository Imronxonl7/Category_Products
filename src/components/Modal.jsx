import React, { memo } from 'react'

const Modal = ({close}) => {
  return (
    <div 
            onClick={close}
            className="fixed z-1 top-0 left-0 w-full h-screen flex justify-center items-center">
            <form 
            onClick={(e) => e.stopPropagation()}
            className="flex  justify-center items-center flex-col gap-5 max-w-[500px] w-full p-5 rounded-[20px] bg-blue-300 opacity-90 backdrop-blur ">
              <input className="text-[18px] p-2 w-full outline-none rounded-[20px] border-1 border-blue-700" type="text" placeholder="Mahsulot nomi" />
              <input className="text-[18px] p-2 w-full outline-none rounded-[20px] border-1 border-blue-700" type="text" placeholder="Mahsulot haqida" />
              <input className="text-[18px] p-2 w-full outline-none rounded-[20px] border-1 border-blue-700" type="text" placeholder="Mahsulot bo'limi" />
              <input className="text-[18px] p-2 w-full outline-none rounded-[20px] border-1 border-blue-700" type="number" placeholder="Mahsulot narxi ($)" />
              <input className="text-[18px] p-2 w-full outline-none rounded-[20px] border-1 border-blue-700" type="number" placeholder="Mahsulot miqdori (kg)" />
              <button className="text-[24px] p-2 w-full  rounded-[20px] border-1 border-blue-600 bg-blue-700 text-white">Qo'shish</button>
            </form>
          </div> 
  )
}
const ModalMemo = memo(Modal)
export default ModalMemo