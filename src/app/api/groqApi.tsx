import { json } from "stream/consumers";
import { ChatCompletion } from "./groqmodel/qroqResponse";

const groqApi='https://api.groq.com/openai/v1/chat/completions';
const  groqKey='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';

// curl --location 'https://api.groq.com/openai/v1/chat/completions' \
// --header 'Content-Type: application/json' \
// --header 'Authorization: Bearer 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' \
// --header 'Cookie: __cf_bm=cXB8tE.miUH55dhpbncu0eetNtuw_eywIiWZjxSkIkQ-1736068110-1.0.1.1-7q9_BovDG2_dBHb7x0guP.Tmk45n5LFYrA1uy89SKnhZkocvYALJQlHpgR1uVi3y4PJxrQd3svk_CzRPG30rYA' \
// --data '{
// "model": "llama-3.3-70b-versatile",
// "messages": [{
//     "role": "user",
//     "content": "Explain the importance of fast language models"
// }]
// }'



export const groqHandler = async(query: string):Promise<ChatCompletion>  => {
    const data={
      "model": "llama-3.3-70b-versatile",
      "messages": [{
      "role": "user",
      "content": query
      }]
    }
    try 
    {
        console.log("entrered try block");
       // console.log(groqKey);
        const response=await fetch(groqApi,
            {
                method:"POST",
                headers:{
                    Authorization: `Bearer ${groqKey}`,
                    
                },
               body:JSON.stringify(data),
            }
        );
        const res=await response.json();
         
       
        if(!response.ok)
        {
            return{
                id: "",
                model: "",
                content: "",
                 choices: [],
            };

        }
        else
        {
            return{
                id: res.id,
                model: res.model,
                content: res.content,
                 choices: res.choices,  
            };
        }
    }
     catch (error) 
    {
        console.log("entrered error block"+error);
        return{
            id: "",
            model: "",
            content: "",
             choices: [],
        };

    }
}