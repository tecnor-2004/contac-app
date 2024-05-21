import Header from "../Header"
import FavouriteContact from "./FavouriteContact";
function FavouriteList(){
    let list = JSON.parse(localStorage.getItem('faveList'))
    return(
        <>
        <Header></Header>
        <ul className="container mb-5 mt-2 list-group">
            <li className="list-group-item active row d-flex justify-content-between">
                <div className="p-0 m-0 w-auto my-auto d-flex gap-3">
                    <div>favorite Contacts</div>
                </div>
            </li>
            {list.map((data,i)=>{
                return <FavouriteContact key={i} data={data}/>
            })}
        </ul>
        </>
    )
}
export default FavouriteList