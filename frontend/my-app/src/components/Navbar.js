import { Button } from "./Button";
import { Link,  } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchtermAtom } from "../Stores/atoms/UserAtoms";

export function Navbar() {
const[searchterm,setsearchterm] = useRecoilState(searchtermAtom);


  return (
    <div className="flex flex-row justify-between items-center p-4">
      <Link to="/" className="text-black-800">Ecommerce</Link>
      <input onChange={(e)=>{setsearchterm(e.target.value)}} value={searchterm} type="text" placeholder="Search" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
      <div className="flex flex-row space-x-4">
        <Link to="/Login">
          <Button label="Login" color={"green"}/>
        </Link>
        <Link to="/Signup">
          <Button label="Signup" color={"green"}/>
        </Link>
      </div>
    </div>
  );
}
