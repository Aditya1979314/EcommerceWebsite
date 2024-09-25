

export function RowUsers({id,username,email,password}){
    return (
        <tr>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">{username}</h2>
                            
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">{email}</h2>
                            
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        {password}
                                    </div>
                                </td>

                               
                            </tr>
    )
}


