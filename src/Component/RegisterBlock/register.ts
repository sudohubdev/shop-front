import { useAuthMutation, useRegistrationMutation } from "../../store/rtkQuery/authApi";


export const useRegister = ()=>{
    const [registration,{data,error}] = useRegistrationMutation();
    const register = (email: string, password: string,phone:string,username:string) => {
        registration({ email, password,phone, username });
      };
    
      return { data, register,error };
    
}

export const useErrorMsgRegister = (error:any)=>{
    
    const isErrorMessage = ()=>{
        let errMsg =""
        if (error && 'data' in error && error.data) {
       errMsg = error.data[0].description
        
    }
        return errMsg;  
    }
    return {isErrorMessage}
}