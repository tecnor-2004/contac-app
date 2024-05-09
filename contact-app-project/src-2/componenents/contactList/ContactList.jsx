import { useEffect, useState } from "react";
import Contact from "./Contact";
function ContacList(){
    // const DATA = [
    //     
    // ]
    const[contact,setContact]= useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=20')
        .then(res=>res.json())
        .then(json=> setContact(json.results))
    },[])
    return(
        <>
            <div className="container">
                <div className="row">
                    <ul className="list-group">
                        {
                            contact.map((contact, i)=>{
                                return <Contact data={contact} id={i} key={i}/>
                                })    
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ContacList; 