import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import AllProducts from './Pages/Home/Products/AllProducts';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Order from './Pages/Order/Order';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
       <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       
       <Route path="/addproduct" element={
         <RequireAuth>
           <AddProduct></AddProduct>
         </RequireAuth>
       }></Route>
       <Route path="/manage" element={
         <RequireAuth>
           <ManageProducts></ManageProducts>
         </RequireAuth>
       }></Route>
       <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
