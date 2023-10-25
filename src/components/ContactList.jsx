import React, { useEffect } from 'react';
import './ContactList.css'
import { useNavigate } from 'react-router-dom';

const ContactList = ({contacts, getContacts, deleteContact}) => {
    useEffect(()=>{
        getContacts()
    },[])
    const navigate = useNavigate()
    return (
        <div className='container'>
            <table>
                 <tr>
                    <td>Name</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>Phone number</td>
                </tr>
                {contacts.map(item=>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td><button onClick={()=>navigate(`/edit/${item.id}`)}>edit</button></td>
                    <td><button onClick={()=>deleteContact(item.id)}>delete</button></td>
                </tr>
                    )}
            </table>
        </div>
    );
};

export default ContactList;