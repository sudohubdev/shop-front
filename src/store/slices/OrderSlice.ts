import { createSlice } from '@reduxjs/toolkit'
import { IResult } from '../rtkQuery/authApi'
import { IProduct } from '../../Component/Product/Product'

interface IOrderSlice {
  city:string,
  legalName:string,
  phone:string,
  postOffice:string,
  deliveryMethod:string,
  paymentMethod:string
}

const initialState:IOrderSlice = {
    city:'',
    legalName:'',
    phone:'',
    postOffice:'',
    deliveryMethod:'',
    paymentMethod:''
}


const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addInfo(state,action){
      
        state.city=action.payload.city
        state.legalName=action.payload.legalName
        state.phone=action.payload.phone
        state.postOffice=action.payload.postOffice
        state.deliveryMethod=action.payload.deliveryMethod
        state.paymentMethod=action.payload.paymentMethod
    },

    
}
  
})

export const { addInfo } = OrderSlice.actions
export default OrderSlice.reducer