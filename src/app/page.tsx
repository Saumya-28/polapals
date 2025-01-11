'use client';
import Image from "next/image";
import Carousel from "./components/Carousel";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { useState } from "react";
import { Client } from 'appwrite';
import Link from "next/link";
require('dotenv').config();

export default function Home() {
  const client = new Client();
  const projectId=process.env.NEXT_PUBLIC_PROJECTID;
client.setProject(`${projectId}`);
console.log(` Project id is: ${projectId}`);
  const [count,setCount]=useState<number>(0);
  const [tap,isTapped]=useState<boolean>(false);
  console.log(count);
  console.log(tap);
  return (
    <main >
   
   <section
  className="relative bg-cover bg-center h-[100vh]"
  style={{
    backgroundImage: 'url(images/headerback.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
  }}
>
  <header className="bg-transparent text-black ml-[12%] p-4 h-20 flex justify-between z-6 relative pt-6">
    <h1 className="pl-[9%] mt-1 font-bold text-2xl md:text-3xl">Polapals</h1>
    <nav className="gap-12 pr-16 font-bold inline-flex items-center ">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services" className="inline-flex items-center">
        Services
        <ChevronDownIcon aria-hidden="true" className="size-5 ml-1 text-gray-400" />
      </a>
      <a href="#team">Our Team</a>
      <a href="#contact">Contact Us</a>
    </nav>
    
    <button
  className={`ml-0 -m-1.5 mr-[14%] h-11 inline-flex items-center justify-center text-center rounded-3xl pt-2 px-6 pb-2 text-black border-2 border-black ${tap ? 'bg-blue-500' : 'bg-transparent'}`}
  onClick={() => {
    isTapped(!tap); // Toggle tap state
  }}
>
  Donate Now!
</button>

    <img src="images/logo.png" alt="mouse" className="h-16 w-16 absolute top-[-0.1px] left-[5.2%] z-10 pt-1" />
  </header>
  
  <div className="w-[30%] h-[20%] mt-[12%] ml-[12%]">
    <p className="text-block font-bold text-3xl">Welcome to Polapals – where cold paws meet warm hearts!</p>
    <p className="mt-4 font-thin">We are a dedicated network committed to rescuing and caring for polar animals, ensuring their safety and survival in a warming world.</p>
    <Link href={"/signup"}>
    <button
  className="mt-4 h-11 inline-flex items-center justify-center text-center rounded-3xl pt-2 px-6 pb-2 text-black border-2 border-black bg-transparent"
  onClick={() => setCount(count + 1)}
>
  Join Us!
</button>
</Link>
   

  </div>
  {/* <div className="absolute top-[50%] left-0 w-full  z-10 ">
  <img src="images/waveheader.png" alt="border" className="h-[2%] w-[100%]" />
</div> */}
</section>

{/* Positioned image div */}

<section
  className="relative bg-cover bg-center h-[100vh]"
  style={{
    backgroundImage: 'url(images/cardholder.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
  }}
  
>
  <p className="pt-[16%] pl-[44%] font-bold text-4xl">What We Do</p>

  <div className=" flex flex-row gap-[8%] pt-[4%] pl-[12%]  ">
  <div className="block border-2 border-black w-[300px] h-[360px] bg-white shadow-md rounded-lg p-6">
  <p className="font-bold text-2xl">Rescue & Rehabilitation</p>
  <p className="pt-[8%] text-xl">We respond to emergencies and provide medical care to injured or stranded polar animals.</p>
  
  <div className="flex items-center justify-start mt-10">
    <img src="images/penguincard.png" alt="penguin" className="h-[50px] w-[60px] ml-[112px] mt-[50px]" />
    <img src="images/bear.png" alt="bear" className="h-[98px] w-22" />
  </div>
</div>

    <div className=" block  border-2 border-black w-[300px] h-[360px] bg-white shadow-md rounded-lg p-6">
      <p className="font-bold text-2xl">Habitat Preservation</p>
      <p className="pt-[8%] text-xl">Collaborating with global partners, we advocate for the protection of polar regions from climate threats.</p>
      <div className="flex items-center justify-start mt-10">
    <img src="images/penguincard.png" alt="penguin" className="h-[50px] w-[60px] ml-[112px] mt-[54px]" />
    <img src="images/bear.png" alt="bear" className="h-[100px] w-22" />
  </div>
    </div>
    <div className=" block  border-2 border-black w-[300px] h-[360px] bg-white shadow-md rounded-lg p-6">
      <p className="font-bold text-2xl">Community Engagement</p>
      <p className="pt-[8%] text-xl">Empowering individuals and communities to join our mission and make a difference.</p>
      <div className="flex items-center justify-start mt-10">
    <img src="images/penguincard.png" alt="penguin" className="h-[50px] w-[60px] ml-[112px] mt-[50px]" />
    <img src="images/bear.png" alt="bear" className="h-[98px] w-22" />
  </div>
    </div>

  </div>

</section>

<section
  className="relative bg-cover bg-center h-[100vh]"
  style={{
    backgroundImage: 'url(images/projectsection.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
  }}

>
<p className="pt-[10%] pl-[40%] font-bold text-4xl">Our Projects</p>

<div className=" flex flex-row gap-[8%] pt-[4%] pl-[12%]  ">
  <div className="block border-2 border-black w-[300px] h-[360px] bg-transparent shadow-md rounded-lg p-6">
  <p className="font-bold text-2xl">Rescue & Rehabilitation</p>
  <p className="pt-[8%] text-xl">We respond to emergencies and provide medical care to injured or stranded polar animals.</p>
  
 
</div>

    <div className=" block  border-2 border-black w-[300px] h-[360px] bg-transparent shadow-md rounded-lg p-6">
      <p className="font-bold text-2xl">Habitat Preservation</p>
      <p className="pt-[8%] text-xl">Collaborating with global partners, we advocate for the protection of polar regions from climate threats.</p>
      
    </div>
    <div className=" block  border-2 border-black w-[300px] h-[360px] bg-transparentshadow-md rounded-lg p-6">
      <p className="font-bold text-2xl">Community Engagement</p>
      <p className="pt-[8%] text-xl">Empowering individuals and communities to join our mission and make a difference.</p>
      
    </div>

  </div>


</section>

<section
className=" relative w-[100%] h-[65vh] ">
 <div className="flex flex-row gap-16 p-4 mt-[10%] ml-[20%]">
  {/* Left Section */}
  <div className="flex flex-col items-start">
    {/* Logo and Title */}
    <div className="flex flex-row items-center gap-2">
      <img src="images/logo.png" alt="logo" className="w-16 h-16" />
      <h1 className="font-bold text-2xl md:text-3xl">Polapals</h1>
    </div>
    {/* Description */}
    <p className="w-[200px] text-left font-extralight text-sm mt-3">
      We are a network dedicated to rescuing and protecting polar animals in a warming world.
    </p>
    {/* Social Media Icons */}
    <div className="flex flex-row gap-4 mt-4">
      <img src="images/instagram.png" alt="instagram" className="h-4 w-4" />
      <img src="images/facebook.png" alt="facebook" className="h-4 w-4" />
      <img src="images/instagram.png" alt="instagram" className="h-4 w-4" />
      <img src="images/facebook.png" alt="facebook" className="h-4 w-4" />
    </div>
  </div>

  {/* Resources Section */}
  <div className="flex flex-col items-start">
    <ul className="list-none space-y-2">
      <li className="font-bold text-xl">Resources</li>
      <li className="font-normal">Home</li>
      <li className="font-normal">Services</li>
      <li className="font-normal">Our Team</li>
    </ul>
  </div>

  {/* Community Section */}
  <div className="flex flex-col items-start">
    <ul className="list-none space-y-2">
      <li className="font-bold text-xl">Community</li>
      <li className="font-normal">BearSquad</li>
      <li className="font-normal">PenguinHugs</li>
      <li className="font-normal">IceCubs</li>
    </ul>
  </div>

  {/* Newsletter Section */}
  <div className="flex flex-col w-1/3">
    <h1 className="font-bold text-lg whitespace-nowrap">Join Our Newsletter</h1>
    <p className="mt-2 text-sm whitespace-nowrap">
      Stay connected with us—subscribe to our newsletter for the<br/> latest updates on polar animal rescue and conservation!
    </p>
    <div className="flex flex-row ">
  <form className="flex gap-2 mt-6">
    <input
      type="email"
      placeholder="Enter your email"
      className="py-2 px-4 border border-gray-300 rounded-md flex-grow"
    />
    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-custom-blue whitespace-nowrap">
      Subscribe
    </button>
  </form>
</div>

  </div>
</div>

<div
  className="relative bg-cover bg-center w-[100%] h-[40vh] overflow-hidden"
  style={{
    backgroundImage: 'url(images/borderwave.png)',
    backgroundRepeat: 'no-repeat',
    
  }}
></div>







</section>




    </main>
  );
}
