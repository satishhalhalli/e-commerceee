
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Contact=()=>{

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
  

    const handleSubmit=  async(e)=>{
        e.preventDefault();
        const data={
            name : name,
            email: email,
             phone: phone,
        };
        try {
            const response = await fetch(
              'https://ecommerce-186d4-default-rtdb.firebaseio.com/contact.json',
              {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            const responseData = await response.json();
            console.log(responseData);
            setName('');
            setEmail('');
            setPhone('');
          } catch (error) {
            console.log(error);
          }
          
        };
    return(
        <Form  onSubmit={handleSubmit}>
         <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder='enter your name' value={name} onChange={(e)=> setName(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId='formEmail'>
         <Form.Label>EMAIL</Form.Label>
         <Form.Control type="email" placeholder='enter your email' value={email}
          onChange={(e) => setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId='FormNumber'>
         <Form.Label>phoneNumber</Form.Label>
         <Form.Control type="number" placeholder='enter your number'  value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
         </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>

        </Form>
    )
}
export default Contact;

