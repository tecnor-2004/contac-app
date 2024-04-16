import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import ContactList from "./components/Contacts/ContactList"
import FavouriteList from "./components/Favourite/FavouriteList"
import AddContact from "./components/Add/AddContact"
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/ContactList' element={<ContactList/>}/>
          <Route path='/FavouriteList' element={<FavouriteList/>}/>
          <Route path='/AddContact' element={<AddContact/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
