import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import FaveContact from "../../contextes/faveCntactContext/FaveContact"

const Contact = (props)=>{
    const nav = useNavigate()
    const [faveContact, setFaveContact]= useState(false)
    const faveContactHandle = ()=>{
        setFaveContact(!faveContact)
        setNumFaveContact(prev => !faveContact ? prev+1 : prev-1);

    }
    const {setNumFaveContact} = useContext(FaveContact)

    return(
        <li className="list-group-item d-flex">
            <div className="imgBox overflow-hidden rounded-5" style={{height:"50px", width:"50px"}}>
                <img src={props.data.picture.thumbnail} alt="" className=" w-100" />
            </div>
            <p className="m-0 my-auto ms-3 "  >
                {` ${props.data.name.title} ${props.data.name.first} ${props.data.name.last}`}
            </p>
                <button type="button" className="btn btn-primary mx-3" onClick={()=>{nav('/ContactInfo')}}>
                    call
                </button>
            <p className="m-0 my-auto ms-auto ">
                {props.data.cell}
            </p>
            <span className={`fa fa-heart  my-auto ms-3 ${faveContact && 'text-danger'}`} onClick={faveContactHandle}></span>
        </li>
    )
}
export default Contact