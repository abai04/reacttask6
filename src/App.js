import { Link, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import NavBar from "./components/NavBar";
import ContactList from "./components/ContactList";
import { useState } from "react";
import axios from "axios";
import EditContact from "./components/EditContact";

function App() {
  const API = "http://localhost:8000/contacts"
  const[contacts, setContacts] = useState([])
  const[oneContact, setOneContact] = useState(null)
  //Create
  const addContact = (newProduct)=>{
    axios.post(API, newProduct)
  }
  const getContacts = async() =>{
    const result = await axios.get(API) 
    setContacts(result.data)
  }
  async function deleteContact(id){
    await axios.delete(`${API}/${id}`)
    getContacts()
  }
  async function getOneContact(id){
    const result = await axios(`${API}/${id}`)
    setOneContact(result.data)
  }
  async function updateContact(id, editedContact){
    try{
      await axios.patch(`${API}/${id}`, editedContact)
      updateContact()
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} getContacts={getContacts} deleteContact={deleteContact}/>}/>
        <Route path="/add" element={<AddContact addContact = {addContact}/>}/>
        <Route path="/edit/:id" element = {<EditContact updateContact={updateContact} oneContact={oneContact} getOneContact={getOneContact}/>} />
      </Routes>
    </div>
  );
}

export default App;
