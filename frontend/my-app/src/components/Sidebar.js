import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { maxpriceAtom, minpriceAtom,categoryuserAtom} from '../Stores/atoms/UserAtoms';

const Sidebar = ({ categories}) => {
const[category,setcategory] = useRecoilState(categoryuserAtom);
const[minprice,setminprice] = useRecoilState(minpriceAtom);
const[maxprice,setmaxprice] = useRecoilState(maxpriceAtom);


  return (
    <div className="w-64 p-4 bg-white shadow-md rounded-lg self-start">
      <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Category</h4>
        <select
          onChange={(e)=>{
            setcategory(e.target.value)
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm">
            Min:
            <input
              type="number"
              name="min"
              onChange={(e)=>{
                setminprice(e.target.value)
              }}
              className="w-24 p-1 ml-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="text-sm">
            Max:
            <input
              type="number"
              name="max"
              onChange={(e)=>{
                setmaxprice(e.target.value)
              }}
              className="w-24 p-1 ml-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
