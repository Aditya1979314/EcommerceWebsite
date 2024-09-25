import { atom, atomFamily, selector, selectorFamily } from "recoil"


export const usernameAtom = atom({
    key:'username',
    default:''
})

export const emailAtom = atom({
    key:'email',
    default:''
})

export const passwordAtom = atom({
    key:'password',
    default:''
})

export const categoryuserAtom = atom({
    key:'categoryuserAtom',
    default:''
})

export const minpriceAtom = atom({
    key:'minpriceatom',
    default:0
})

export const maxpriceAtom = atom({
    key:'maxpriceatom',
    default:0
})

export const searchtermAtom = atom({
    key:'searchtermAtom',
    default:''
})

export const allproductsAtom = atom({
    key:'allproductsuser',
    default:selector({
        key:'allproductsselector',
        get:async ({get})=>{
            const category = get(categoryuserAtom);
            const searchterm = get(searchtermAtom);
            const minprice = get(minpriceAtom);
            const maxprice = get(maxpriceAtom);
            let response = '';
            if(maxprice){
                response = await fetch(`http://localhost:3000/user/products?category=${category}&minprice=${minprice}&maxprice=${maxprice}&searchterm=${searchterm}`,{
                    method:"GET"
                });
            }else{
                response = await fetch(`http://localhost:3000/user/products?category=${category}&minprice=${minprice}&searchterm=${searchterm}`,{
                    method:"GET"
                });
            }
           

            const result = await response.json();
            return result;
        }
    })
})

export const isauthAtom = atom({
    key:'isauthatom',
    default:0
})


export const productAtom = atomFamily({
  key: "singleproductatom",
  default: (id) =>
    selectorFamily({
      key: `singleproductselector-${id}`,
      get: (id) => async () => {
        try {
          const response = await fetch(`http://localhost:3000/user/products/${id}`, {
            method: 'GET',
          });

          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }

          const result = await response.json();
          return result[0]; 
        } catch (error) {
          console.error('Error fetching product:', error);
          throw error;
        }
      },
    })(id),
});

export const tokenAtom = atom({
    key:'tokenatom',
    default:''
})

export const cartAtom = atom({
    key:'cartatom',
    default:selector({
        key:'cartselector',
        get:async ({get})=>{
            const token = get(tokenAtom)
            const response = await fetch('http://localhost:3000/user/cart',{
                method:'GET',
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })

            const result = await response.json();
            return result;
        }
    })
})

export const totalpricecart = selector({
    key:'totalpriceselector',
    get:({get})=>{
        const data = get(cartAtom);
        let sum = 0;
        if(data){
        const totalprice = data.map((obj)=>{
            return sum + obj.price
        })
    }
        return sum;
    }
})