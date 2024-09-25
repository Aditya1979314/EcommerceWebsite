import { useMemo } from "react";
import {Card} from "../components/Card";
import Sidebar from "../components/Sidebar";
import {  useRecoilStateLoadable} from "recoil";
import { allproductsAtom } from "../Stores/atoms/UserAtoms";



export function Home(){
 const [data,setdata] = useRecoilStateLoadable(allproductsAtom)


const categories = useMemo(() => {
  if (data.state === 'hasValue') {
    return [...new Set(data.contents.map((obj) => obj.category))];
  }
  return [];
}, [data.contents]);

return (
  <div className="flex flex-row gap-4 mt-4">
    <Sidebar categories={categories} />
    {data.state === 'loading' ? (
      <div>...loading</div>
    ) : data.state === 'hasValue' ? (
      <div className="grid grid-cols-3 gap-2">
      {data.contents.map((obj) => (
        <Card
          key={obj.product_id}
          id={obj.product_id}
          productname={obj.name}
          description={obj.description}
          category={obj.category}
          price={obj.price}
        />
      ))}
      </div>
    ) : (
      <div>No products available</div>
    )}
  </div>
);
}