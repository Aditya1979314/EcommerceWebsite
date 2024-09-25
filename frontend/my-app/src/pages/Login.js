import{Link} from "react-router-dom"
import { useRecoilState } from "recoil";
import { emailAtom, passwordAtom, usernameAtom} from "../Stores/atoms/UserAtoms";
import { useCallback } from "react";

export function Login(){
    const[username,setusername] = useRecoilState(usernameAtom)
    const[email,setemail] = useRecoilState(emailAtom);
    const[password,setpassword] = useRecoilState(passwordAtom);
    
    const handleSubmit = useCallback(async ()=>{
    
    const data = {
        password:password,
        email:email,
        username:username
    }
    
        const repsonse = await fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        
        const result = await repsonse.json();
        if(result.token){
            localStorage.setItem('token',result.token);
            alert('user logged in')
            window.location.reload();
        }else{
            alert('some error occured');
        }
    },[email,password])

    return(
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-12">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
            <p className="text-lg text-green-600">Ecommerce</p>
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <div>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" onChange={(e)=>{
                    setemail(e.target.value)
                }} />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Username" aria-label="Username" onChange={(e)=>{
                    setusername(e.target.value)
                }} />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" onChange={(e)=>{
                    setpassword(e.target.value)
                }}/>
            </div>

            <div className="mt-4">

                <button onClick={handleSubmit} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <Link to="/signup" className="mx-2 text-sm font-bold text-green-500 dark:text-green-400 hover:underline">Register</Link>
    </div>
</div>
    )
}