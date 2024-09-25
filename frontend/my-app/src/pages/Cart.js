
import { useRecoilValueLoadable, useSetRecoilState,useRecoilValue } from "recoil";
import { CartCard } from "../components/CartCard";
import { CartPrice } from "../components/CartPrice";
import { cartAtom, tokenAtom, totalpricecart } from "../Stores/atoms/UserAtoms";


export function Cart(){
const data = useRecoilValueLoadable(cartAtom);
const settoken = useSetRecoilState(tokenAtom);
const totalprice = useRecoilValue(totalpricecart);

if(localStorage.getItem('token')){
  const token = localStorage.getItem('token');
  settoken(token);
}


    return (
        <div className="flex flex-row w-full h-full px-4 mt-4 justify-between dark:bg-gray-800">
            <div className="w-8/12 flex flex-col justify-between gap-2">
            {data.state === 'loading'?(<div>...loading</div>):(data.state === 'hasValue' && data.contents.length !== 0)?
                data.contents.map((obj)=>{
                    return(
                        <CartCard id={obj.product_id} productname={obj.name} description={obj.description} category={obj.category} price={obj.price}/>
                    )
                }):(<div>Cart is empty</div>)
            }
       </div>
        <CartPrice totalprice={totalprice} price={totalprice}/>
        </div>
    )
}