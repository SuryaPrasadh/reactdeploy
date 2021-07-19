import {useState,useEffect} from 'react';


const useFetch = (url) =>{
    
    

    const[data,setData] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(()=>{

        const abortcont = new AbortController();

      setTimeout(()=>{
         fetch(url,{ signal : abortcont.signal }).then((res)=>{
             if(!res.ok){
                 throw Error("Couldn't fetch the data");
             }
             return res.json();  
         }).then((data)=>{   
             setData(data);
             setpending(false);
             seterror(null);
         }).catch(err =>{
             if(err.name === "AbortError"){
                 console.log("fetch aborted");
             }else{
            seterror(err.message);
            setpending(false);     
                 }
         })
        },1000);
        
        return ()=>abortcont.abort();
     },[url]);

     return { data, pending,error}
}

export default useFetch;