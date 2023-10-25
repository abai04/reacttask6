import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function EditContact({updateContact, getOneContact, oneContact}) {
    const[name, setName]= useState('')
    const navigate = useNavigate()
    const[lastName, setLastName]= useState('')
    const[phone, setPhone]= useState('')
    const[email, setEmail]= useState('')
    const params = useParams()
    useEffect(()=>{
        getOneContact(params.id)
    },[])
    useEffect(()=>{
        if(oneContact){
            setName(oneContact.name)
        setLastName(oneContact.lastName)
        setPhone(oneContact.phone)
        setEmail(oneContact.email)
        }
        
    },[oneContact])
    const handleCreate = (e) => {
        e.preventDefault()
        if(!name.trim() || !lastName.trim() || !phone.trim() || !email.trim()){
            alert("Fill all fields")
            return
        }
        const newContact = {name, lastName, phone, email}
        console.log(params);
        updateContact(params.id, newContact)
        navigate('/')
    }
  return (
    <Form className='w-50 m-auto' onSubmit={handleCreate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" value={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name"value={lastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="E-mail" value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="phone number" value={phone}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save changes
      </Button>
    </Form>
  );
}

export default EditContact;