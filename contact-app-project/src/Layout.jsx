import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
function Layout(props){
    // fetch('https://randomuser.me/api/?results=20')
    // .then(res=>res.json())
    // .then(json=> console.log(json.results))
    return(
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    )
}
export default Layout