import React from "react";
import EnvironmentalPlanning from '/src/assets/EnvironmentalPlanning.png'
import Art from '/src/assets/Art.png'
import Garden from '/src/assets/Garden.png'
import Man from '/src/assets/Man.png'
import Waitress from '/src/assets/Waitress.png'
import Tie from '/src/assets/Tie.png'

const Category = () => {
  return (
    <div>
      {/* search bar */}
      <div className="py-8 flex flex-row justify-center items-center gap-4">
        <div className="pt-2 relative  text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[1084px]"
            type="search"
            name="search"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="pt-3">
          <box-icon name="heart"></box-icon>
        </div>
        <div className="pt-3">
          <box-icon name="cart-alt"></box-icon>
        </div>
      </div>

      {/* heading */}
      <div className="flex flex-row items-center gap-4 pl-6">
        <div className="w-[20.98px] h-[41.96px] relative">
          <div className="w-[20.98px] h-[41.96px] left-0 top-0 absolute bg-teal-700 rounded" />
        </div>
        <div className="text-teal-700 text-base font-semibold font-poppins leading-[20.98px]">Categories</div>
      </div>

        {/* subheading */}
        <div className="flex flex-row items-center px-6 justify-between">
        <div className="text-black text-[37.76px] font-semibold font-poppins leading-[50.35px] tracking-wider">Browse By Category</div>
        <div className=" flex flex-row gap-2">
            <div className="rounded-full w-[42px] h-[42px] bg-neutral-100 items-center flex justify-center"><box-icon name='left-arrow-alt' ></box-icon></div>
            <div className="rounded-full w-[42px] h-[42px] bg-neutral-100 items-center flex justify-center"><box-icon name='right-arrow-alt' ></box-icon></div>
        </div>
        </div>

        {/* boxes */}
        <div className="flex flex-row justify-evenly items-center gap-4 my-8">

            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={EnvironmentalPlanning} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Household</div>
            </div>
            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={Art} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Art & Craft</div>
            </div>
            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={Waitress} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Women</div>
            </div>
            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={Man} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Men</div>
            </div>
            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={Garden} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Gardening</div>
            </div>
            <div className="w-[172px] h-[156px] outline outline-2 outline-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
                <img src={Tie} alt="" />
                <div className="text-black text-2xl font-medium font-poppins leading-loose tracking-wide">Accessories</div>
            </div>



        </div>

    </div>
  );
};

export default Category;
