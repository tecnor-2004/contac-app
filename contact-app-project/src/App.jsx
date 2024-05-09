import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import ContactList from "./components/Contacts/ContactList"
import FavouriteList from "./components/Favourite/FavouriteList"
import AddContact from "./components/Add/AddContact"
import Modal from "./components/Contacts/Modal"
//import { FavouriteListContext } from "./contextes/Favorite"
function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/ContactList' element={<ContactList/>}/>
            <Route path='/FavouriteList' element={<FavouriteList/>}/>
            <Route path='/AddContact' element={<AddContact/>}/>
            <Route path='/Modal' element={<Modal/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}
export default App
