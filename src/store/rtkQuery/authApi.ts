export interface IUser{
  email:string,
  password:string,
  username?:string,
  phone?:string
}
export interface IResult{
  success:boolean
}
export interface IResultUserCheck{
  online:boolean,
  name:string,
  email:string,
  phone:string
}
import { fetchBaseQuery, createApi, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryApi } from "./fetchQuery";




export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQueryApi,
  endpoints: (builder) => ({
    auth: builder.mutation<IResult|FetchBaseQueryError, IUser>({
      query: (user: IUser) => ({
        url: '/Account/login',
        method: "POST",
        body: user
      })
    }),
    registration: builder.mutation<IResult|FetchBaseQueryError, IUser>({
      query: (user: IUser) => ({
        url: '/Account/register',
        method: "POST",
        body: user
      })
    }),
    getUser: builder.query<IResultUserCheck|FetchBaseQueryError, void>({
      query: () => ({
        url: '/Account/checkUser',
        method: "GET",
      })
    }),
    exit: builder.mutation<IResult|FetchBaseQueryError, null>({
      query: () => ({
        url: '/Account/logout',
        method: "POST",
      })
    })
  }),
});


  export const { useAuthMutation,useExitMutation,useRegistrationMutation,useGetUserQuery,useLazyGetUserQuery } = authApi