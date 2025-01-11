import { PixaPhoto } from "./model3/pixarResponse";

const pixarbayApi='https://pixabay.com/api/';
const PixaKey='47870046-fa0d7ca57459ac67bae67c0e0';

export const pixaHandler= async (): Promise<PixaPhoto> =>{

    const queryParams = {
        key: '47870046-fa0d7ca57459ac67bae67c0e0', 
        q: 'cute+bunny',    
        image_type: 'photo',        
      };
      
      // Convert query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      const urlWithQuery = `${pixarbayApi}?${queryString}`;

      try {
        const response=await fetch(urlWithQuery
           );
        const data:PixaPhoto=await response.json();
        if(!response.ok)
        {
            return {
                total:0,
                totalHits:0,
                hits:[],
            };
        }
        return{
            total:data.total,
                totalHits:data.totalHits,
                hits:data.hits,
        };
        
        
    } catch (error) {
        return {
            total:0,
                totalHits:0,
                hits:[],
        };
    }
}