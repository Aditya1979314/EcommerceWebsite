import './App.css';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Signup } from './pages/Signup';
import { Orders } from './pages/Orders';
import { UserProfile } from './pages/UserProfile';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { AdminProducts } from './pages/AdminProducts';
import { AdminLayout } from './pages/AdminLayout';
import { UserLayout } from './pages/UserLayout';
import { AdminDashboard } from './pages/AdminDashboard';
import {AdminOrders} from './pages/AdminOrders';
import {AdminUsers} from './pages/AdminUsers';
import { AdminSettings } from './pages/AdminSettings';
import { AdminProduct } from './pages/AdminProduct';
import { AdminAddproduct } from './pages/AdminAddproduct';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { isauthAtom } from './Stores/atoms/UserAtoms';
 
function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path='products/:id' element={<Product />} />
        <Route path="orders" element={<Orders />} />
        <Route path='userprofile' element={<UserProfile />} />
        <Route path='cart' element={<Cart />} />
        </Route>
        {/* admin routes */}
        <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path='products' element={<AdminProducts/>} />
        <Route path='products/:id' element={<AdminProduct/>}/>
        <Route path='orders' element={<AdminOrders/>}/>
        <Route path='users' element={<AdminUsers/>}/>
        <Route path='settings' element={<AdminSettings/>}/>
        <Route path='addproduct' element={<AdminAddproduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}


export default App;
