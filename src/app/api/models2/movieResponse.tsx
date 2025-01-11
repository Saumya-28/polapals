
export interface MoviePhoto {
    id: number;
    title: string;
    year: number;
    creator: string[];
    rating: string;
    genre: string[];
    runtimeInMinutes: number;
    episodes: number;
    image: string;
  }
  

export interface MovieArray
{
    movies:MoviePhoto[];
}

