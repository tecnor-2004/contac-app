import { useEffect, useState } from "react";
import Contact from "./Contact";
import Header from "../Header";
import Recent from "../recent/Recent";
function ContactList(){
    const [Contacts, setList] = useState(JSON.parse(localStorage.getItem('mainList'))? JSON.parse(localStorage.getItem('mainList')) : [])
    const [faveList, setFaveList] = useState(JSON.parse(localStorage.getItem('faveList'))?JSON.parse(localStorage.getItem('faveList')) : [] )
    const [recentList,setRecent] = useState(JSON.parse(localStorage.getItem('recentList'))?JSON.parse(localStorage.getItem('recentList')) : [] )
    const resetHandle = ()=>{
        fetch('https://mocki.io/v1/19809881-9874-4396-a5d2-e97129079192')
        .then(res=>res.json())
        .then(json=> setList(json.results))
        localStorage.setItem('mainList', JSON.stringify(Contacts))
    }
    useEffect(()=>{
        localStorage.setItem('recentList', JSON.stringify(recentList))
    },[recentList])
    useEffect(()=>{
        localStorage.setItem('mainList', JSON.stringify(Contacts))
    },[Contacts])
    useEffect(()=>{
        localStorage.setItem('faveList', JSON.stringify(faveList))
    },[faveList])
    return(
        <>
        <Header/>
        <Recent data={recentList}/> 
        <ul className="container mb-5 mt-2 list-group">
            <li className="list-group-item active row d-flex justify-content-between">
                <div className="p-0 m-0 w-auto my-auto d-flex gap-3">
                    <div>all Contacts</div>
                    <div>{Contacts.length}</div>
                </div>
                <button onClick={resetHandle} className="btn w-auto text-danger">reset</button>
            </li>
            {Contacts?.map((t,i)=>{
                return <Contact data={t} Data={Contacts} setList={setList} setRecent={setRecent} setFaveList={setFaveList} faveList={faveList} key={i} id={i}></Contact>;
            })}
        </ul>
        </>
    )
}
export default ContactList ; 