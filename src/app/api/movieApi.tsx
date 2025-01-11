import { MoviePhoto } from "./models2/movieResponse";


const movieApi='https://api.sampleapis.com/cartoons/cartoons2D';

export const movieHandler = async(): Promise<MoviePhoto[]> =>{
try {
    const response= await fetch(movieApi);
    const res:MoviePhoto[]= await response.json();

    return res;
}
 catch (error) 
 {
    return [];
}
}