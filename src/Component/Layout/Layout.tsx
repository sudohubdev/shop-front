import { useEffect, useState } from "react";
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import { Outlet } from 'react-router-dom';
import Cart from "../Cart/Cart";
import { useGetUserQuery } from "../../store/rtkQuery/authApi";
import { useAppDispatch } from "../../store/store";
import { auth, setUser } from "../../store/slices/AuthSlice";



const Layout = ()=>{
    const [isShow,setIsShow] = useState(false);
    const [isShowCart,setIsShowCart]= useState(false)
    const {data} = useGetUserQuery()
    const dispatch = useAppDispatch();
  
    useEffect(()=>{
        const body = document.querySelector('body');
        if (isShowCart) {
            if (body) {
                body.style.height = "100vh";
                body.style.overflow = "hidden";
            }
        }
        else{
            if (body) {
                body.style.height = "100%";
                body.style.overflow = "auto";
            }
        }
       
    },[isShowCart])

    useEffect(()=>{
        console.log(1)
        if(data && 'name' in data){
           if(data.name){
            console.log(data)
            dispatch(auth(true))
            const fullName = data.name;
            const match = fullName.match(/[A-Z][a-z]*/g); 
            let lastName = ''; 
            let firstName = '';

            if (match && match.length >= 2) {
            lastName = match[0]; 
            firstName = match[1];
            console.log(lastName);
            console.log(firstName); 
            }
            dispatch(setUser({name:firstName, lastName:lastName,phone:data.phone,email:data.email}))
           }
        }
        
    },[data])
    
    
    
    

    return (
        <div>
            <Header isShow={isShow} setIsShowCart={setIsShowCart} setIsShow={setIsShow} />
            <Outlet/>
            <Menu isShow={isShow} setIsShow={setIsShow} />
            {isShowCart?<Cart  setIsShowCart= {setIsShowCart} />:null} 
           {isShowCart?<div className="overlap"></div>:null} 
        </div>
    )
}

export default Layout

