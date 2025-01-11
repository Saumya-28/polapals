import { error } from "console";
import type { NextApiRequest, NextApiResponse  } from "next";
import { ApiResponse, PexelsResponse } from "./models/apiResponse";
const pexelsApi='https://api.pexels.com/v1/search?query=people';
const APIKey='oHC3T9HyJhutRVV9YfJbxfpOX5idVy8QCgxJNDE4mfB1euTvwi2V3SUd';


// export const fetchRoomStatus = async (
//     roomId: string,
//     token: string
//   ): Promise<FetchRoomStatusResponse> => {

export const apiHandler = async (): Promise<ApiResponse> => {
try {
    const response=await fetch(pexelsApi,
        {headers:{
            Authorization: APIKey,
        }
    });
    const data:ApiResponse=await response.json();
    if(!response.ok|| data.status==401)
    {
        return {
            page:0,
            per_page:0,
            photos: [],
            total_results:0,
            next_page:"",
            status:data.status,
            code:data.code,
        };
    }
    return{
        page:data.page,
        per_page:data.per_page,
        photos: data.photos,
        total_results:data.total_results,
        next_page:data.next_page,
        status:data.status,
        code:data.code,
    };
    
    
} catch (error) {
    return {
        page:0,
        per_page:0,
        photos: [],
        total_results:0,
        next_page:"",
        status:401,
        code:"ERROR FOUND",
    };
}
}