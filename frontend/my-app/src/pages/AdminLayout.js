import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";



export function AdminLayout(){
    return (
        <div className="flex flex-row gap-4">
             <AdminSidebar/>
             <Outlet/>
        </div>
    )
}