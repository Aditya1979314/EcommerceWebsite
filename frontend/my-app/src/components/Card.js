import { Link } from "react-router-dom"

export function Card({id,productname,description,price,category}){
    return(
        <Link to={`/products/${id}`}>
        <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
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
</Link>
    )
}