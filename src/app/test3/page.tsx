'use client';

import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { MoviePhoto } from "../api/models2/movieResponse";
import { pixaHandler } from "../api/pixarApi";
import { HitArray, PixaPhoto } from "../api/model3/pixarResponse";




export  function Photos():HitArray[]
{
    const [photo,setPhoto]=useState<HitArray[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string>("");
    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const res=await pixaHandler();
            console.log(res);
            try {
               
              
                    setLoading(false);
                    setPhoto(res.hits);
                    
                
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
    

<Carousel propele={Photos()} />;
    </div>
        </main>
    );




}