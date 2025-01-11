export interface PexelsPhoto
{
    id:number;
    src:{
        original:string;
    }
    alt:string;
}

 export interface PexelsResponse
{
    photos: PexelsPhoto[];
}

export interface ApiResponse {
    page:number,
    per_page:number,
    photos:PexelsPhoto[],
    total_results:number,
    next_page:string,
    status:number,
    code:string,
}

