import { useEffect, useState,useRef } from "react"
import RecentContact from "./RecentContact"
function Recent(props){
    let name = props.data
    const [userList, setUserList] = useState([])
    const isInitialMount = useRef(true)
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } 
        else {
            setUserList(oldList=>[...oldList,JSON.parse(localStorage.getItem(name))])
        }
    },[name]);
    return(
        <ul className="container mb-2 mt-2 list-group">
            <li className="list-group-item active row">recently called</li>
            {userList.map((data,i)=>{
                return <RecentContact key={i} id={i} data={data}></RecentContact>
            })}
        </ul>    
    )
}
export default Recent