export interface IFeedBackSend{
    productId:string,
    text:string,
    rating?:number
  }
  export interface IResult{
    success:boolean
  }

  import { createApi, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
  import { fetchBaseQueryApi } from "./fetchQuery";
import { IFeedBack } from "./productsApi";
  
  
  
  
  export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQueryApi,
    tagTypes: ['Products'],
    endpoints: (builder) => ({
      addComment: builder.mutation<IResult|FetchBaseQueryError, IFeedBackSend>({
        query: (feedback: IFeedBackSend) => ({
          url: '/Products/feedback',
          method: "POST",
          body: feedback
        }),
        invalidatesTags: ['Products']
      }),
      getComments:builder.query<IFeedBack[], string>({
        query: (id) => `/feedbacks/${id}`,
        providesTags: (result, error, id) => [{ type: 'Products', id }],
      }),
    }),
  });
  
  
    export const { useAddCommentMutation,useGetCommentsQuery } = commentApi