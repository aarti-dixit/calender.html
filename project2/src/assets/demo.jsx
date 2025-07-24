import {useEffect,useState} from "react"
const Demo=()=>{
    const [Likes,setLikes]=useState(0)
    useEffect(()=>{console.log("hello world")
        //calling API's getting data,loading default
    },[Likes]);
    return<h1>Hello World {Likes}
    <button onClick={()=>setLikes(Likes+1)}>click me </button>
</h1>
  
}
export default Demo;