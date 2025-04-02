import {useState,useCallback} from 'react'
import axios from 'axios'
const usePost = (url) => {
    

 const [data,setData] = useState(null)
 const [loading,setLoading]= useState(false)
 const [error,setError] = useState()

 const postData = useCallback(async(payload)=>{
    setLoading(true)
    setError(null)
    try {
        const response = await axios.post(url,payload)
        setData(response.data)
        return response.data
    } catch (error) {
        setError(error.message)
        return null
    }finally{
        setLoading(false)
    }
 },[url])

  return {postData,loading,error,data}


}

export default usePost
