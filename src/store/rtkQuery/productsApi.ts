
interface ICharacterisctics {
    key:string,
    value:string
}
export interface IFeedBack {
    id: number,
    userName: string,
    userId: string,
    productId: string,
    text: string,
    rating: number
    userEmail: string,
  
}
export interface IResultOrder{
  success:boolean
}

export interface IOrder{
  id?:number,
  productId: number,
  quantity: number,
  legalName: string,
  phoneNumber: string,
  city: string,
  postOffice: string,
  deliveryMethod: string,
  paymentMethod: string,
  dateOrdered?:string,
  userId?:string,
  priceOrdered?:number
}

  export interface IResult{
    id:number;
    name: string,
    images: string[],
    characteristics: string[],
    characteristicsPairs: ICharacterisctics [
    ],
    feedbacks: IFeedBack [],
    price: number,
    discount: number,
    isHit: boolean,
    category: string,
    quantity: 2,
    isAvailable: boolean,
    score: number
  }
  


  import {createApi } from "@reduxjs/toolkit/query/react";
  import { fetchBaseQueryApi } from "./fetchQuery";
  
  
  
  
  export const productsApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQueryApi,
    tagTypes: [ 'comments'],
    endpoints: (builder) => ({
        getProducts: builder.query<IResult[], void>({
          query: () => `/productss`,
        }),
       
        getProductsWithTypes: builder.query<IResult[], string>({
          query: (type:string) => `/productss/type?type=${type}`,
          
        }),
        getProductsWithSearch: builder.query<IResult[], string>({
          query: (search:string) => `/productss/search?q=${search}`,
        }),
        orderPush: builder.mutation<IResultOrder, IOrder>({
          query: (order:IOrder) => ({
            url: '/productss/order',
            method: "POST",
            body:order
          })
        }),
        getOrders:builder.query<IOrder[], void>({
          query: () => `/productss/orders`,
        }),
      }),
    
  });
  
  
    export const { useGetProductsQuery,useGetProductsWithTypesQuery,useGetProductsWithSearchQuery,useOrderPushMutation,useGetOrdersQuery } = productsApi