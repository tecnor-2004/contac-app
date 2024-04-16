import { useEffect, useState } from "react";
import Contact from "./Contact";
function ContactList(){
    const [Contacts, setList] = useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/959e4340-4ac8-4baa-88f3-d420f2735606')
        .then(res=>res.json())
        .then(json=> setList(json))
    },[])
    console.log(Contacts);
    return(
        <ul className="container mb-3 list-group">
            {Contacts.map((contact, i)=>{
                return <Contact data={contact} key={i} id={i}></Contact>;
            })}
        </ul>
    )
}
export default ContactList ; 