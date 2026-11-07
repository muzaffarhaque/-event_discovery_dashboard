import { useEffect, useState } from "react"
import commonGetApi from "../server/Api";

const useFetch = (url="")=>{
  const [data,setData]= useState(null);
  const [loading,setLoading]= useState(true);

  async function getData(){
    try{
        setLoading(true);
        const res = await commonGetApi("https://raw.githubusercontent.com/muzaffarhaque/dynamic-search-data/refs/heads/main/mixdata.json");
        console.log(res);
        setData(res.data)
    }catch(error){
        console.log(error)

    }finally{
        setLoading(false);
    }
  }
  useEffect(()=>{
    getData()
  },[url])

    return {data,loading,refeatch:getData}
}
export default useFetch;