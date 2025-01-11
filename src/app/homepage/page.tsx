'use client';
import Marquee from "react-fast-marquee";
import { groqHandler } from "../api/groqApi";
import { useState } from "react";

export default function Page()
{
   
   
    const defaultMessages = [
        {
          text: "Hello! How can I help you today?",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        }
      ];
    const [tap,setTap]= useState<Boolean>(false);
    const [messages, setMessages] = useState(defaultMessages);
    const [inputValue, setInputValue] = useState('');
    const[count,setCount]=useState<number>(0);
    console.log("COUNT ITNA COUNT HUA"+count);

    const handleSendMessage = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString()
    };
    
    console.log("GROQQQQ RESPONSEEEE"+groqHandler(inputValue));
    setCount(count+1);
    console.log("COUNT INSIDE MESSAGE WALA FUNCTION"+count);
    //console.log("this is what you GET FROM GROQ AAAAAAAA"+groqResponse.choices);
    const botMessage = {
      text:   (await groqHandler(inputValue)).choices[0].message.content,//groqResponse.choices[0].message.content,
      sender: "bot",
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
  };

    console.log(tap);
    return(
        <main>
        <section>
           <div className="w-[100%] h-[600px] bg-custom-gray rounded-br-[100px] rounded-bl-[100px]">
               <nav className="flex flex-row pt-[1%] w-[100%]">
                 <div className="inline-flex flex-row w-24 h-14 ml-[10%] ">
                    <img src="images/logo.png" alt="logo" />
                    <h1 className="font-bold pt-5 text-xl">Polapals</h1>
                 </div>
                 <div className="flex flex-row gap-10 mt-[1.4%] ml-[14%] font-thin text-gray-600 text-md ">
                 <h1  className="hover:text-custom-blue hover:font-bold">Rescue Mission</h1>
                 <h1 className="hover:text-custom-blue hover:font-bold">Community Meet</h1>
                 <h1 className="hover:text-custom-blue hover:font-bold">Donation Guidelines</h1>
                 <h1 className="hover:text-custom-blue hover:font-bold">Our Team</h1>
                 <h1 className="hover:text-custom-blue hover:font-bold">Our Partners</h1>
                 </div>
                 <button className="bg-white px-[2%] py-0 h-8 mt-[1.2%] ml-[4%] text-center justify-center  text-gray-600 rounded-3xl">
                   Contribute!
                 </button>
               </nav>

               <div className="flex flex-row w-[100%] h-[400px]">
                <div className="flex-[50%] pl-[10%]">
                   <strong><p className=" block text-start text-3xl pt-[20%] ">Protecting Polar Lives,<br/> Preserving Our Planet.</p></strong>
                   <p className="block text-start pt-2 ">Join us in rescuing and safeguarding polar animals like penguins, polar bears, and seals. Together, we can ensure their survival in a warming world.</p>
                   <div className="flex flex-row pt-10 gap-6">
                    <button className="bg-white rounded-xl py-2 px-4 border-transparent border-4 hover:border-gray-600">Report Mission</button>
                    <button className="bg-white rounded-xl py-2 px-4 border-transparent border-4 hover:border-gray-600">Join Mission</button>
                   </div>
                </div>
                <div className="flex-[50%]">
                    <div className="pt-[10%] pl-[200px] ">
                    <img src="images/ice.png" alt="polarbear" className="w-[400px]" />
                    </div>
                </div>

               </div>
           </div>
           
           <div className="w-full h-[160px] bg-white rounded-br-[100px] rounded-bl-[100px] relative z-10 flex flex-wrap justify-center items-center space-x-10">
  <div className="flex w-[100px] h-[100px] p-2">
    <img src="images/sony.png" alt="sony" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[120px] h-[120px] p-2">
    <img src="images/amazonpay.png" alt="amazonpay" className="w-full h-full object-contain" />
  </div>

  <div className="flex w-[100px] h-[100px] p-2">
    <img src="images/sony.png" alt="sony" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[120px] h-[120px] p-2">
    <img src="images/amazonpay.png" alt="amazonpay" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[100px] h-[100px] p-2">
    <img src="images/sony.png" alt="sony" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[120px] h-[120px] p-2">
    <img src="images/amazonpay.png" alt="amazonpay" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[100px] h-[100px] p-2">
    <img src="images/sony.png" alt="sony" className="w-full h-full object-contain" />
  </div>
  <div className="flex w-[120px] h-[120px] p-2">
    <img src="images/amazonpay.png" alt="amazonpay" className="w-full h-full object-contain" />
  </div>
            </div>


        </section>
        <section className=" bg-custom-gray" >
          <div className=" flex flex-row w-[100%] h-[80vh] -mt-[100px]">
            <div className="flex-1">
                <h1 className="pt-[26%] pl-[24%] justify-start text-3xl font-bold">Work for a Better Planet!</h1>
                <p className="block justify-start pt-[2%] pl-[24%]">At Polapals, we’re dedicated to rescuing, rehabilitating, and protecting polar animals like penguins, 
                    polar bears, and seals. With habitats melting and threats increasing,
                     these creatures need our help now more than ever. Together, we can create a safer, sustainable world for polar wildlife to thrive.
                </p>
                <hr className="border-gray-400 w-[76%] ml-[24%] mt-4" />
                <h1 className="text-lg font-extrabold ml-[24%] mt-4">What we strive for:</h1>
                <ul className="list-none mt-6 pl-[26%]">
               <li className="flex flex-row items-center mb-2 ">
                  <span className="w-4 h-4 inline-block mr-2"> <img src="images/tick.png" alt="tick" /></span>
                  Rescue: Immediate help for injured polar animals.
                </li>
                   <li className="flex items-center mb-2">
                   <span className="w-4 h-4 inline-block mr-2"> <img src="images/tick.png" alt="tick" /></span>
                   Rehabilitation: Care until ready for release.
                 </li>
                 <li className="flex items-center">
                 <span className="w-4 h-4 inline-block mr-2"> <img src="images/tick.png" alt="tick" /></span>
                 Advocacy: Raising awareness for polar wildlife.
                </li>
            </ul>

            </div>
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-0 pt-[10%] ">
              <div className="h-[200px] w-[200px] ml-[46%] mt-12">
                    <img src="images/gridpic1.png" alt="grid1" className="object-cover h-full w-full" />
                      </div>
                    <div className=" h-[200px] w-[200px] mt-12">
                   <img src="images/gridpic2.png" alt="grid2" className="object-cover h-full w-full" />
                          </div>
                    <div className=" h-[200px] w-[200px] ml-[46%]">
                     <img src="images/gridpic2.png" alt="grid3" className="object-cover h-full w-full" />
                    </div>
                    <div className=" h-[200px] w-[200px]">
                  <img src="images/gridpic1.png" alt="grid4" className="object-cover h-full w-full" />
                 </div>
                 </div>
          </div>
           <div className="font-bold w-[100%] h-[5vh] mt-7 bg-white justify-center items-center pt-1 text-2xl shadow-[7px_1px_10px_rgba(0,0,0,0.5)]">
           <Marquee speed={100} gradient={true} >
           <p className="inline-block pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
           <p className="inline-block  pr-1"> Rescue. Rehabilitate. Restore. </p>
            
           </Marquee>
           </div>
           <div className="w-[100%] h-[50vh] bg-custom-gray">
                  <div className="bg-white w-[60%] h-[9vh] rounded-full mt-[10%] ml-[18%] shadow-2xl flex justify-center items-center">
                  <h1 className=" font-extrabold text-3xl ">While you're here, we have something for you!</h1>

                  </div>
                
                  <div className="mt-[-5%] ml-[73%] w-[80px] h-[80px] ">  <img src="images/click.png" alt="bear" /></div>
           </div>
           </section>
           <section>
            <div className="bg-white h-[60vh] w-100% rounded-tl-[100px] rounded-tr-[100px] mt-[-10%] flex flex-col justify-center items-center gap-6" >
                <p className="font-extrabold text-2xl">Let's stay Connected!</p>
                <div className="flex flex-row gap-6 mt-[2%]">
                     <input type="text" placeholder="Name" className="border-2 border-black rounded-lg px-5 py-2 text-pretty"/>
                     <input type="text" placeholder="Email  Addresss" className="border-2 border-black rounded-lg px-5 py-2 text-pretty " />
                </div>
                <div className="flex flex-row gap-6">
                <input type="number" placeholder="Phone Number" className="border-2 border-black rounded-lg px-5 py-2 text-pretty" />
                <input type="number" placeholder="Pin Code" className="border-2 border-black rounded-lg px-5 py-2 text-pretty" />
                </div>
                <button className={` bg-custom-gray px-14 py-2 rounded-3xl font-bold shadow-lg border-2 border-transparent
                       `}>Submit</button>
            </div>
           </section>

         
                   <div className="fixed bottom-4 right-4 z-50">
                   <div 
                    className={`absolute bottom-16 right-14 w-96 h-[500px] bg-light-gray rounded-2xl shadow-3xl p-4 
                        flex flex-col ${tap ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                          <div className="flex flex-row  pt-2 justify-between text-center items-center ">
                               <h1 className=" text-2xl font-semibold text-custom-blue ">Chat with Fuzzy</h1>
                               <button
                                   onClick={()=>setTap(false)}
                                   className="p-2 bg-white hover:bg-gray-300 rounded-full mt-1  "
                             >
                             <img src="images/close.png" alt="close" className="h-3 w-3" />
                             </button>
                          </div>
                          <div className="bg-white rounded-lg p-3 mt-4 h-[44vh] overflow-y-auto">
                          {messages.map((message, index) => (
                           <div
                             key={index}
                             className={`flex ${
                                 message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                             >
                                <div
                                  className={`max-w-[80%] rounded-lg p-3 ${
                                      message.sender === 'user'
                                     ? 'bg-blue-500 text-white'
                                      : 'bg-gray-100'
                                      }`}
                                      >
                                     <p>{message.text}</p>
                                      
                                 </div>
                             </div>
                              ))}
                            </div>
                          <form onSubmit={handleSendMessage} className="pt-4 flex gap-2">
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message here" 
                                className="flex-1 px-3 py-2 border rounded-lg hover:outline-none focus:ring-2 hover:ring-blue-500"
                            />
                            <button
                                type="submit" // Changed from type="button"
                                className="bg-white hover:bg-gray-300 text-white px-2 py-2 rounded-full flex items-center justify-center"
                            >
                                <img src="images/send.png" alt="send" className="h-6 w-6"/>
                            </button>
                            </form>
                        </div>
                        <div className={`fixed bottom-5 right-5 bg-transparent rounded-full h-16 w-16 z-[9999] border-2 border-custom-blue
                           ${tap?'bg-blue-900' : 'bg-transparent'}`}
                            onClick={()=>setTap(!tap)}>
                   <img src="images/smile.png" alt="bear" className="h-15 w-15 pt-0.5"/>
                   </div>
                   </div>
                   

            
      
        </main>
    );
}