import { useParams } from "react-router-dom"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { productAtom } from "../Stores/atoms/UserAtoms";



export function Product(){
const params = useParams();
const product = useRecoilValueLoadable(productAtom(params.id))
console.log(params.id)
console.log(product)

    return (
      <div>
      {product.state === 'loading'?
        (<div>...loading</div>):
        product.state === 'hasValue'?(<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={product.contents.image}
                alt={product.contents.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-2">{product.contents.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.contents.category}</p>
              <p className="text-gray-800 text-lg mb-6">{product.contents.description}</p>
              <div className="text-2xl font-semibold text-green-500 mb-6">
                ${product.contents.price}
              </div>
    
              <div className="flex flex-row justify-around">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                Add to Cart
              </button>
    
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Buy Now 
              </button>
              </div>
            </div>
          </div>
        </div>):(<div>No product</div>)
      }

</div>
    )
}