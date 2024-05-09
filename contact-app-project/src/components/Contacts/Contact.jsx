import { useEffect, useState } from "react"
/* eslint-disable react/prop-types */
function Contact(props){
    let list = props.faveList
    const [isFave, setFave] = useState(list.find(contact => contact.id.value == props.data.id.value)? true : false)
    const callHandler = () =>{
        localStorage.setItem(props.data.name.first , JSON.stringify(props.data))
        props.setRecent(props.data.name.first)
    }
    const heartHandler = ()=>{
        setFave(!isFave)
        if(!isFave){
            props.setFaveList(oldList =>[...oldList,props.data])
        }
        if(isFave){
            props.setFaveList(oldList => oldList.filter(contact => contact.name.first !== props.data.name.first))
            // i used name.first insted of id.value because some contacts dont have that
            // weird problem with محیا رضایی : chose all the contacts before her as favorite contact and refresh, you will see she automatically becomes a favorite contact
        }
    }
    const deleteHandler = () =>{
        props.setList(oldList => oldList.filter(contact => contact !== props.data))
    }
    return(
        <li className="row list-group-item d-flex justify-content-between flex-column flex-sm-row">
            <div className="col-auto  d-flex flex-row justify-content-center">
                <div className="col-auto p-0 rounded-5 overflow-hidden">
                    <img src={props.data.picture?.thumbnail} alt="" />
                </div>
                <div className="col-auto ms-3 align-content-center">
                    <p className="m-0 mt-2">
                        {props.data.name?.title}.{props.data.name?.first} {props.data.name?.last}
                    </p>
                </div>
            </div>
            <div className="col-auto p-0 d-flex flex-row justify-content-center mt-2 mt-sm-0">
                <div className="col-auto my-auto mx-2">
                <button onClick={deleteHandler} className="btn bg-primary-subtle"><span className="fa fa-trash"></span></button>
                </div>
                <div className="col-auto my-auto mx-2">
                    <button className="btn bg-primary-subtle">edite</button>
                </div>
                <div className="col-auto my-auto mx-2"> 
                    <button onClick={()=>{heartHandler(event)}} className="btn bg-primary-subtle"><span className={isFave?`fa fa-heart text-danger`:`fa fa-heart`}></span></button>
                </div>
                <div className="col-auto my-auto mx-2">
                    <button onClick={callHandler} className="btn bg-primary-subtle"><span className="fa fa-phone"></span></button>
                </div>
            </div>
        </li>
    )
}
export default Contact




