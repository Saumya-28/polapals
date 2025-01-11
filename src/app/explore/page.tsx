'use client';
import { useState, useEffect } from 'react';
import { groqHandler } from '../api/groqApi';
import { ChatCompletion, ChatMessage, Choice } from '../api/groqmodel/qroqResponse';
import { json } from 'stream/consumers';
import { parseAnimalData } from '../utils/utils';

export default function Page() {
  const [data, setData] = useState<ChatMessage>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   
  
  async function init() {
    try {
      setLoading(true);
      const response = await groqHandler("Create a JSON object listing these polar animals only: Polar Bear, Arctic Fox, Walrus, Arctic Hare, Narwhal, Emperor Penguin, and King Penguin. Structure: { \"animals\": [{ \"name\": \"string\", \"image\": \"URL\", \"habitat\": \"string\", \"traits\": [\"string\"], \"facts\": [\"string\"] }] }");
      //const pdata:Choice=JSON.parse(response.choices[0].message.content);
      const pdata=parseAnimalData(response.choices[0].message.content);
      setData(response.choices[0].message);
      console.log("RESPONSE CONTENT"+pdata)
      console.log("ANOTHER RESPONSE FROM EXPLORE"+ data);
     // console.log("FROM EXPLORE PAGE DATA"+pdata);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <main>
     
    </main>
  );
}