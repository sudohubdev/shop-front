
import { useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Menu from './Component/Menu/Menu';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainPage from './Pages/Main/Main';
import OneProductPage from './Pages/OneProductPage/oneProductPage';
import OrderPage from './Pages/OrderPage/OrderPage';
import OwnerPage from './Pages/OwnerPage/OwnerPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


function App() {
  
    const [isShowCart,setIsShowCart]= useState(false);

    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} /> 
            <Route path='/category' element={<CategoryPage />} /> 
            <Route path='/account/*' element={<OwnerPage />} />
            <Route path='/product/:id' element={<OneProductPage />} />
            <Route path='/contacts' element={<ContactPage/>} />
            <Route path='/products' element={<CategoryPage />} />
            <Route path='/order' element={<OrderPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/error' element={<ErrorPage />} />
        </Routes>
    );

}

export default App;