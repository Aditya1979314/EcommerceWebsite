import { Row } from "../components/Row";

const data = [
    {
      id: 1,
      productName: "Wireless Mouse",
      description: "A sleek and ergonomic wireless mouse with adjustable DPI.",
      category: "Electronics"
    },
    {
      id: 2,
      productName: "Running Shoes",
      description: "Lightweight and comfortable running shoes with breathable fabric.",
      category: "Footwear"
    },
    {
      id: 3,
      productName: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with powerful bass and 10-hour battery life.",
      category: "Electronics"
    },
    {
      id: 4,
      productName: "Yoga Mat",
      description: "Eco-friendly yoga mat with non-slip surface and extra cushioning.",
      category: "Fitness"
    },
    {
      id: 5,
      productName: "Coffee Maker",
      description: "Automatic drip coffee maker with programmable settings and a 12-cup capacity.",
      category: "Home Appliances"
    },
    {
      id: 6,
      productName: "Smartphone Stand",
      description: "Adjustable smartphone stand with a sleek aluminum design and non-slip base.",
      category: "Accessories"
    },
    {
      id: 7,
      productName: "Electric Kettle",
      description: "Fast-boiling electric kettle with auto-shutoff and a 1.7-liter capacity.",
      category: "Home Appliances"
    },
    {
      id: 8,
      productName: "Gaming Headset",
      description: "Over-ear gaming headset with surround sound and noise-cancelling microphone.",
      category: "Electronics"
    },
    {
      id: 9,
      productName: "Water Bottle",
      description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
      category: "Fitness"
    },
    {
      id: 10,
      productName: "Desk Lamp",
      description: "LED desk lamp with adjustable brightness and a flexible gooseneck.",
      category: "Home Office"
    }
  ];

export function Orders(){

    return(
<section className="container px-4 mx-auto">

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                        <span>Product Name</span>

                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                        </svg>
                                    </button>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Category
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Description
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Price</th>


                                <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                           
                           {
                            data.map((obj)=>{
                                return(
                                    <Row key={obj.id} id={obj.id} price={obj.price} description={obj.description} category={obj.category} productName={obj.productName                                                                                                                                                                                                  }/>
                                )
                            })
                           }

                           
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between mt-6">
        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div>

        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section>
    )
}