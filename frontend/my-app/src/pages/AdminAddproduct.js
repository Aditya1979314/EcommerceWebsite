import React, { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { categoryAtom, descriptionAtom, priceAtom, productnameAtom } from "../Stores/atoms/AdminAtoms";



export function AdminAddproduct(){
    const [productname, setProductname] = useRecoilState(productnameAtom);
    const [description,setdescription] = useRecoilState(descriptionAtom);
    const [category,setcategory] = useRecoilState(categoryAtom);
    const [price,setprice] = useRecoilState(priceAtom);
    
    const priceInt = useMemo(()=>{
      return parseInt(price);
    },[price])

      const handleSubmit = useCallback(async ()=>{
          const data = {
            name:productname,
            description:description,
            price:priceInt,
            category:category
          };
          try{
              const repsonse = await fetch('http://localhost:3000/admin/addproduct',{
                  method:'POST',
                  headers:{
                      "Content-Type":'application/json'
                  },
                 body:JSON.stringify(data)
              });
      
              const result = await repsonse.json();
              alert(result.msg);
          }catch(err){
              console.log("some error occured",err);
          }
      },[productname,category,price,description])

    return(
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productname}
            onChange={(e)=>{
              setProductname(e.target.value)
            }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e)=>{
              setdescription(e.target.value)
            }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e)=>{
              setprice(e.target.value)
            }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product category"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
    )
}