

export function CartPrice({totalprice,price}){

    return(
        <div className="w-1/4 px-8 py-4 bg-white rounded-lg shadow-md flex flex-col justify-between self-start">
             <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Price Details</h1>

             <div className="flex flex-row gap-2">
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Price</p>
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Rs.{price}</p>
             </div>

             <div className="flex flex-row gap-2">
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Discount</p>
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Rs.0</p>
             </div>

             <div className="flex flex-row gap-2">
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Delivery</p>
             <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Rs.0</p>
             </div>

             <div className="flex flex-row gap-2">
             <p class="mt-2 text-lg text-gray-800 dark:text-white">Total</p>
             <p class="mt-2 text-lg text-gray-800 dark:text-white">Rs.{totalprice}</p>
             </div>
             
             <button className="px-6 py-2 self-start mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Check Out
</button>
        </div>
    )
}