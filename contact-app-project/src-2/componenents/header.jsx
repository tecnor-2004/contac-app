import { useContext } from "react";
import FaveContact from "../contextes/faveCntactContext/FaveContact";
function Header(){
    const{numFaveContact} = useContext(FaveContact)
    return(
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p className="bg-primary text-white p-3 rounded-2 h2 ">
                        these are my react practices !
                    </p>
                </div>
                <div className="col-auto">
                    <span className="fa fa-heart my-auto"> {numFaveContact}</span>
                </div>
            </div>
        </div>
    );
}
export default Header