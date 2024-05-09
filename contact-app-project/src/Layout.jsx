import Footer from "./components/Footer"
function Layout(props){
    // fetch('https://randomuser.me/api/?results=20')
    // .then(res=>res.json())
    // .then(json=> console.log(json.results))
    return(
        <>
            {props.children}
            <Footer></Footer>
        </>
    )
}
export default Layout