import { useState,useEffect } from "react";
import { RESTAURANT_API } from "./utils";
const useRestaurantCards = ()=>{
     let [resList,setresList] = useState([]);
        let [origList,setOrigList] = useState([]);
        const [error, setError] = useState(null);
        
       
        useEffect(()=>{
            fetchData()
        },[]);
    
        const fetchData = async ()=>{
            try{
                const data = await fetch(RESTAURANT_API)
            const json = await data.json() ;
             let resFromLiveApi = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            setresList(resFromLiveApi);
            setOrigList(resFromLiveApi)
           
            }catch(err){
                console.log(error.message)
                setError(err)
            }
            
          }
      return {resList,origList,setresList,setOrigList,error}

}



export default useRestaurantCards