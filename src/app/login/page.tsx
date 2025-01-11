
'use client';
import { Client, Account } from "appwrite";
import { useState } from "react";


export function Login( email:string,password:string)
{
    const projectId=process.env.NEXT_PUBLIC_PROJECTID;
    console.log(`The project id is:${projectId}`);
const client = new Client()
    .setProject(`${projectId}`); // Your project ID

const account = new Account(client);

const promise = account.createEmailPasswordSession(email, password);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

}

export default function Page()
{
    const[email,setEmail]= useState<string>("");
    const[password,setPassword]=useState<string>("");
    return(
        <main>
            <section>
           
            <div className="h-[600px] w-[800px] mt-[4%] ml-[24%] rounded-2xl shadow-[0px_4px_40px_-15px_gray] flex flex-col  items-center space-y-4">
 
               <div className="pt-[18%]">
    <img src="images/logo.png" alt="logo" className="w-[72px] h-[72px] " />
  </div>

  {/* Heading */}
  <div>
    <h1 className="text-2xl font-bold text-gray-700">Good to have you back!</h1>
  </div>

  
  <div >
  <input
    type="text"
    placeholder="Enter your email"
    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => {
        setEmail(e.target.value); // Updates state with input value
      }}
  />
  </div>

  <div >
  <input
    type="text"
    placeholder="Enter your password"
    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => {
        setPassword(e.target.value); // Updates state with input value
      }}
  />
  </div>

  <button className="px-24 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 " onClick={()=>{
    console.log('working button');
    Login(email,password);
  }} >
    Login
  </button>
</div>


            </section>
        </main>
    );
}