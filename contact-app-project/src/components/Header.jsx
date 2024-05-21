import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteContact from "./Favourite/FavouriteContact";
function Header(){
    const isLoged = (JSON.parse(localStorage.getItem('isLoged'))? JSON.parse(localStorage.getItem('isLoged')) : false)
    const userData = JSON.parse(localStorage.getItem('userData'))
    useEffect(()=>{
        localStorage.setItem('isLoged', JSON.stringify(isLoged))
    },[isLoged])
    const nav = useNavigate()
    const loginHandler=()=>{
        if(isLoged == false){
            nav('/Login')
        }
        else{
            nav('/Account')
        }
    }
    const mainList = JSON.parse(localStorage.getItem('mainList'))
    const [search,setSearch] = useState()
    let filteredSearch = search?.replace(/\s+/g, "")
    let lowerSearch = filteredSearch?.toLowerCase()
    console.log(lowerSearch);
    let Result
    if(search != ""){
        Result = mainList.filter(user =>
            user.name.first.toLowerCase().includes(lowerSearch) ||
            user.name.last.toLowerCase().includes(lowerSearch) ||
            user.cell.toString().includes(search) ||
            user.email.toString().toLowerCase().includes(lowerSearch)
        )
    }
    return(
        <div className="container my-3">
            <div className="row">
                <div className="input-group col-12">
                    <input onChange={()=>{setSearch(event.target.value)}} type="text" className="form-control" placeholder="Search contact" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <button onClick={loginHandler} className="input-group-text" id="basic-addon2">{isLoged? userData.name:'login'}</button>
                </div>
            </div>
            <ul className="row list-group mt-2">
                    {Result?.map((data,i)=>{
                        return <FavouriteContact  key={i} data={data} />
                    })}
            </ul>
        </div>
    )
}
export default Header;






