//import { useParams } from "react-router-dom"
import Header from "./componenents/header"
const Layout = (props)=>{

    return( 
        <>
            <Header/>
            {props.children}
        </>
    )
}
export default Layout