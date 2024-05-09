import { useNavigate } from "react-router-dom";
function Footer(){
    const nav = useNavigate()
    let faveNum = JSON.parse(localStorage.getItem('faveList'))
    
    return(
        <div className="row justify-content-around position-fixed bottom-0 start-0 end-0 bg-secondary-subtle p-3">
            <div className="col-auto">
                <button className="btn bg-primary p-2 rounded-3" onClick={()=>{nav('/ContactList')}}>
                    <span className="fa fa-address-book text-white"></span>
                </button>
            </div>
            <div className="col-auto">
                <button className="btn bg-primary p-2 rounded-3 position-relative" onClick={()=>{nav('/FavouriteList')}}>
                    <span className="fa fa-heart text-white"></span>
                    <span className={`position-absolute bottom-50 bg-white rounded-5 p-1 ${Object(faveNum).length == 0 && 'd-none'}`}>{Object(faveNum).length}</span>
                </button>
            </div>
            <div className="col-auto">
                <button className="btn bg-primary p-2 rounded-3" onClick={()=>{nav('/AddContact')}}>
                    <span className="fa fa-user-plus text-white"></span>
                </button>
            </div>
        </div>
    )
}
export default Footer