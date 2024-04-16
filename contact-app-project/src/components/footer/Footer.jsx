import { useNavigate } from "react-router-dom";
function Footer(){
    const nav = useNavigate()
    return(
        <div className="row justify-content-around position-fixed bottom-0 start-0 end-0 bg-secondary-subtle p-3">
            <div className="col-auto">
                <span className=" bg-primary p-2 rounded-3" onClick={()=>{nav('/ContactList')}}>contacts</span>
            </div>
            <div className="col-auto">
                <span className=" bg-primary p-2 rounded-3" onClick={()=>{nav('/FavouriteList')}}>favourite</span>
            </div>
            <div className="col-auto">
                <span className=" bg-primary p-2 rounded-3" onClick={()=>{nav('/AddContact')}}>add</span>
            </div>
        </div>
    )
}
export default Footer