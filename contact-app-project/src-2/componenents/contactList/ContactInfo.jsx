import { useEffect, useState } from "react"


function ContactInfo(){
    const[contact,setContact]= useState({})
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=1')
        .then(res=>res.json())
        .then(json=> setContact(json.results[0]))
    },[])
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto ">
                    <div className={`card ${contact?.picture? '' : 'd-none'  }`}>
                        <img src={contact?.picture?.large} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{contact.cell}</h5>
                            <p className="card-text"></p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className={`spinner-border ${contact?.picture? 'd-none' : ''  }`} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo