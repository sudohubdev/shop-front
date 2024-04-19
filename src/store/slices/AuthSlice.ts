import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthSlice {
    isAuth:boolean
    name:string,
    lastName:string,
    phone:string,
    email:string
}

const initialState = {
    isAuth:false,
    name:'',
    lastName:'',
    email:'',
    phone:''
}


const AuthSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    auth(state,action) {
      
      state.isAuth=action.payload
    },
    setUser(state,action){
      state.name=action.payload.name
      state.lastName=action.payload.lastName,
      state.phone=action.payload.phone,
      state.email=action.payload.email
    }
  },
})

export const { auth,setUser } = AuthSlice.actions
export default AuthSlice.reducer