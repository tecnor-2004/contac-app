
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import Cards from "./componenents/Card/cards"
// import Counter from "./componenents/other/counter";
// import Gallery from "./componenents/Gallery";
// import Todo from "./componenents/todoList/todo";
// import SearchBar from "./componenents/Search/SearchBar";
import ContacList from "./componenents/contactList/ContactList";
import ContactInfo from "./componenents/contactList/ContactInfo";
import FaveContact from  "./contextes/faveCntactContext/FaveContact"
import { useState } from "react";
function App() {
    const [numFaveContact, setNumFaveContact]= useState(Number)
    return(
        <FaveContact.Provider value={{setNumFaveContact,numFaveContact}}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='' element={<ContacList/>}/>
                        <Route path='/ContactInfo' element={<ContactInfo/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </FaveContact.Provider>
    );
}

export default App
