import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddForm({addContact}) {
    const[name, setName]= useState('')
    const navigate = useNavigate()
    const[lastName, setLastName]= useState('')
    const[phone, setPhone]= useState('')
    const[email, setEmail]= useState('')
    const handleCreate = (e) => {
        e.preventDefault()
        if(!name.trim() || !lastName.trim() || !phone.trim() || !email.trim()){
            alert("Fill all fields")
            return
        }
        const newContact = {name, lastName, phone, email}
        addContact(newContact)
        navigate('/')
    }
  return (
    <Form className='w-50 m-auto' onSubmit={handleCreate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="E-mail" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="phone number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create product
      </Button>
    </Form>
  );
}

export default AddForm;