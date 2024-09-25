import { Button } from "./Button";



export function CartCard({productname,description,price,category}){

    return (
        <div class="w-8/12 px-4 py-4 bg-white rounded-md shadow-md dark:bg-gray-800 flex flex-col justify-between">
            <div>
    <div class="flex items-center justify-between">
        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
    </div>

    <div>
        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{productname}</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>

    <div>
        <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <span>Price : Rs.{price}</span>
        </div>
        </div>

    </div>
    <button className="px-6 py-2 self-start font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 mt-4">
    Remove
</button>
</div>
    )
}