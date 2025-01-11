'use client';

import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import {apiHandler} from "../api/pexelsApi";
import { PexelsResponse, PexelsPhoto } from "../api/models/apiResponse";



export  function Photos():PexelsPhoto[]
{
    const [photo,setPhoto]=useState<PexelsPhoto[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string>("");
    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const res=await apiHandler();
            console.log(res);
            try {
               
                if(res.status==401)
                {
                    setLoading(false);
                }
                else
                {
                    setLoading(false);
                    setPhoto(res.photos);
                    
                }
            } catch (error) {
                setLoading(false);
                
            }
        };
    
        fetchPhotos();
      }, []);

    return photo;
}

export default function Page()
{
    Photos();
    const items = [
        { image: "https://via.placeholder.com/800x400", alt: "First Slide" },
        { image: "https://via.placeholder.com/800x400", alt: "Second Slide" },
        { image: "https://via.placeholder.com/800x400", alt: "Third Slide" },
      ];
    
    const puppy=[
       {image: "images/banner.png" , description:"cute animal", name:"cute"},
       {image: "images/bear.png" , description:"cute animal", name:"cute"},
       {image: "images/penguin.png" , description:"cute animal", name:"cute"},
    ];

    return(
        <main>
          <div className="App">
      <h1 className="text-center text-3xl font-bold mb-6">React Carousel</h1>
    

{/* <Carousel propele={Photos()} />; */}
    </div>
        </main>
    );




}