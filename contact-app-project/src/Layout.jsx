import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
function Layout(props){
    return(
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    )
}
export default Layout