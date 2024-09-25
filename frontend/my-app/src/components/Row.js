import {Link} from 'react-router-dom'

export function Row({id,description,productName,category,price}){
  

    return (
       
        <tr>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">{productName}</h2>
                            
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        {category}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 className="text-gray-700 dark:text-gray-200">{description}</h4>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <h4 className="text-gray-700 dark:text-gray-200">Rs. {price}</h4>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <Link to={`/admin/products/${id}`}><button>Edit</button></Link>
                                </td>

                            </tr>
                           
    )
}