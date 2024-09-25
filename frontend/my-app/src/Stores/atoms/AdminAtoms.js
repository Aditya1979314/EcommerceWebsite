import {atom, selector} from 'recoil';


export const productnameAtom = atom({
  key:'productname',
  default:''
});

export const descriptionAtom = atom({
  key:'description',
  default:''
});

export const priceAtom = atom({
  key:'price',
  default:''
});

export const categoryAtom = atom({
  key:'category',
  default:''
});

export const productsAtom = atom({
  key:'products',
  default:selector({
    key:'productsSelector',
    get:async ()=>{
      const response = await fetch('http://localhost:3000/admin/allproducts',{
        method:'GET'
      })
      const result = await response.json();
      return result;
    }
  })
})

export const allusersAtom = atom({
  key:'allusers',
  default:selector({
    key:'allusersSelector',
    get:async ()=>{
      const response = await fetch('http://localhost:3000/admin/allusers',{
        method:'GET'
      })
      const result = await response.json();
      return result.data;
    }
  })
})

