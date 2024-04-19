import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const SUDOHUB_APIKEY="dshopapi:mycool_assword"


export const fetchBaseQueryApi = fetchBaseQuery({
    baseUrl: 'https://shop.sudohub.dev/', prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', 'Basic ' + btoa(SUDOHUB_APIKEY));
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    credentials: "include",
    mode: "cors"
})