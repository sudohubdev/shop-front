import { useEffect, useState } from "react";
import { useAuthMutation } from "../../store/rtkQuery/authApi"

export const  useLogin  = ()=>{
    const [auth,{data,isError,error}] = useAuthMutation();
    const login = (email: string, password: string) => {
        auth({ email, password });
      };
    
      return { data, login,isError,error };
}


export const useErrorMsg = (error:any)=>{
    
    const isErrorMessage = ()=>{
        let errMsg =""
        if (error && 'data' in error && error.data) {
        console.log(error)
        const dataWithErrors = error.data as { error: string };
        errMsg = dataWithErrors.error
    }
        return errMsg;  
    }
    return {isErrorMessage}
}