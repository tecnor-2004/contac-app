import { useEffect } from "react";
import Footer from "./components/Footer"
import { useNavigate } from "react-router-dom";
function Layout(props){
    const isLogedIn = JSON.parse(localStorage.getItem('isLoged'))
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLogedIn == false){
            navigate('/Login')
        }
    },[])
    return(
        <>
            {props.children}
            <Footer></Footer>
        </>
    )
}
export default Layout