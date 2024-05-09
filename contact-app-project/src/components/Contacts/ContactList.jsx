import { useEffect, useState } from "react";
import Contact from "./Contact";
import Header from "../Header";
import Recent from "../recent/Recent";
function ContactList(){
    const [Contacts, setList] = useState(JSON.parse(localStorage.getItem('mainList'))? JSON.parse(localStorage.getItem('mainList')) : [])
    const [faveList, setFaveList] = useState(JSON.parse(localStorage.getItem('faveList'))?JSON.parse(localStorage.getItem('faveList')) : [] )
    const [recents,setRecent] = useState([])
    const resetHandle = ()=>{
        fetch('https://mocki.io/v1/959e4340-4ac8-4baa-88f3-d420f2735606')
        .then(res=>res.json())
        .then(json=> setList(json))
        localStorage.setItem('mainList', JSON.stringify(Contacts))
    }
    useEffect(()=>{
        localStorage.setItem('mainList', JSON.stringify(Contacts))
    },[Contacts])
    useEffect(()=>{
        localStorage.setItem('faveList', JSON.stringify(faveList))
    },[faveList])
    return(
        <>
        <Header/>
        <Recent data={recents}/>
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