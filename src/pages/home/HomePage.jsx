import React, { memo, useEffect, useState } from "react";
import TableRowMemo from "../../components/TableRow";
import TableHeadMemo from "../../components/TableHead";
import SearchInputMemo from "../../components/SearchInput";
import ModalMemo from "../../components/Modal";
import AllPriceMemo from "../../components/AllPrice";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [isModal , setIsModal] = useState(false)
  const [product, setProduct] = useState([
    {
      id: 10,
      name: "Tovuq go‘shti",
      category: "Go‘sht",
      description: "Yangi tovuq go‘shti",
      price: 5.5,
      quantity: 60,
    },
    {
      id: 1,
      name: "Olma",
      category: "Meva",
      description: "Shirin va qizil olma",
      price: 2.5,
      quantity: 100,
    },
    {
      id: 5,
      name: "Kartoshka",
      category: "Sabzavot",
      description: "Yangi terilgan kartoshka",
      price: 1.5,
      quantity: 200,
    },
    {
      id: 13,
      name: "Sut",
      category: "Sut mahsulotlari",
      description: "Tabiiy sigir suti",
      price: 1.5,
      quantity: 120,
    },
    {
      id: 2,
      name: "Banan",
      category: "Meva",
      description: "Import banan",
      price: 3,
      quantity: 80,
    },
    {
      id: 17,
      name: "Guruch",
      category: "Don mahsulotlari",
      description: "Oq guruch, 1 kg",
      price: 2.2,
      quantity: 140,
    },
    {
      id: 8,
      name: "Pomidor",
      category: "Sabzavot",
      description: "Qizil va suvli pomidor",
      price: 2.2,
      quantity: 150,
    },
    {
      id: 11,
      name: "Mol go‘shti",
      category: "Go‘sht",
      description: "Yuqori sifatli mol go‘shti",
      price: 8,
      quantity: 50,
    },
    {
      id: 20,
      name: "Choy",
      category: "Ichimliklar",
      description: "Qora choy, yuqori sifat",
      price: 3.5,
      quantity: 75,
    },
    {
      id: 6,
      name: "Sabzi",
      category: "Sabzavot",
      description: "Vitamin A ga boy sabzi",
      price: 1.2,
      quantity: 180,
    },
    {
      id: 3,
      name: "Apelsin",
      category: "Meva",
      description: "Vitamin C ga boy apelsin",
      price: 2.8,
      quantity: 90,
    },
    {
      id: 15,
      name: "Pishloq",
      category: "Sut mahsulotlari",
      description: "Yumshoq pishloq",
      price: 4.5,
      quantity: 40,
    },
    {
      id: 9,
      name: "Bodring",
      category: "Sabzavot",
      description: "Yangi va qarsildoq bodring",
      price: 1.8,
      quantity: 160,
    },
    {
      id: 18,
      name: "Makaron",
      category: "Don mahsulotlari",
      description: "Sifatli makaron mahsuloti",
      price: 1.9,
      quantity: 110,
    },
    {
      id: 4,
      name: "Uzum",
      category: "Meva",
      description: "Yashil va shirin uzum",
      price: 4,
      quantity: 70,
    },
    {
      id: 12,
      name: "Baliq",
      category: "Baliq mahsulotlari",
      description: "Yangi tutilgan baliq",
      price: 7,
      quantity: 45,
    },
    {
      id: 16,
      name: "Non",
      category: "Non mahsulotlari",
      description: "Yangi yopilgan non",
      price: 0.8,
      quantity: 300,
    },
    {
      id: 7,
      name: "Piyoz",
      category: "Sabzavot",
      description: "Oshxona uchun asosiy mahsulot",
      price: 1,
      quantity: 220,
    },
    {
      id: 19,
      name: "Shakar",
      category: "Oziq-ovqat",
      description: "Oq shakar, 1 kg",
      price: 1.7,
      quantity: 130,
    },
    {
      id: 14,
      name: "Qatiq",
      category: "Sut mahsulotlari",
      description: "Uy qatig‘i",
      price: 1.3,
      quantity: 90,
    },
  ]);

  useEffect(() => {
    function searchedProduct() {
      let searhched = product.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedProduct(searhched);
    }
    searchedProduct();
  }, [search, product]);

  function open() {
    setIsModal(true)
  };
  function close() {
    setIsModal(false)
  }
  return (
    <>
      <section>
        <div className="relative container mx-auto p-5">
          {
            isModal ? 
            <ModalMemo close={close}/> : ""
          }
          <div className="flex items-center justify-between">
            <h1 className="text-[34px] text-blue-800">Mahsulotlar ombori</h1>
            <div className="flex items-center gap-5">
              <SearchInputMemo setSearch={setSearch} />
              <button
              onClick={open} 
              className="outline-none py-2 px-2 border rounded-[10px]  border-blue-600 text-[20px] text-blue-600 hover:bg-blue-600 hover:text-white duration-300 transition-all ">
                Mahsulotlar qo'shish
              </button>
            </div>
          </div>
          <div className="category mt-10">
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <TableHeadMemo />
                <tbody>
                  {searchedProduct.length > 0
                    ? searchedProduct.map((el) => (
                        <TableRowMemo
                          key={el.id}
                          name={el.name}
                          description={el.description}
                          category={el.category}
                          price={el.price}
                          quantity={el.quantity}
                        />
                      ))
                    : product.map((el) => (
                        <TableRowMemo
                          key={el.id}
                          name={el.name}
                          description={el.description}
                          category={el.category}
                          price={el.price}
                          quantity={el.quantity}
                        />
                      ))}
                  <AllPriceMemo product={product} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


const HomePageMemo = memo(HomePage)
export default HomePageMemo;
