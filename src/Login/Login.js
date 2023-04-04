// import {Col,Row,Container,Form,Button,Card} from 'react-bootstrap';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { LoginContext } from './LoginContext';
// import { useContext } from 'react';

// const Login=()=>{
//     const ctx=useContext(LoginContext);
//     const history=useHistory();
//     const [email,SetEmail]=useState();
//     const [password,SetPassword]=useState();



//     const updateEmail=(e)=>{
//         SetEmail(e.target.value)

//     }
//     const updatePassword=(e)=>{
//         SetPassword(e.target.value);

//     }

//     const submit=(event)=>{

//         event.preventDefault();

//         fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUvqi5PJyduweg6GBYJ3g3FtdVS_qvIGA',{
//             method:"POST",
//             body:JSON.stringify({
//                 email:email,
//                 password:password,
//                 returnSecureToken:true,
//             }),
//             headers:{
//           'Content-Type':'application/json'
//         }
//         }).then(res=>{

//         if(res.ok){
//              history.replace('/Sharp/products')

//           return res.json()

// }
//         else{

//           return res.json().then(data=>{
//            alert(data.error.message)
//           })
//         }
//       }).then((data)=>{ 

//         console.log(data.idToken)
//         ctx.login(data.idToken)



//       }).catch((err)=>console.log('Error',err.message))
//     }

//     return (
//         <Container className="mt-3" >
//         <Row>
//             <Col md={9}>
//                 <Card>
//                     <Card.Header className="p-3" style={{backgroundColor:"darkGrey",textAlign:"center",color:"DarkGreen"}}>
//                     <h4 >Login</h4>
//                     </Card.Header>

//                     <Card.Body className="p-5" style={{backgroundColor:"orange"}}>
//                     <Form>

//                          <Form.Group className="mb-4">
//                             <Form.Control size="lg" type="email" placeholder="email" name="email" onChange={updateEmail}></Form.Control>
//                         </Form.Group>
//                          <Form.Group className="mb-4">
//                             <Form.Control size="lg" type="password" placeholder="password" name="password" onChange={updatePassword}></Form.Control>
//                         </Form.Group>
//                         <Form.Group className="mb-1">
//                         <Container  style={{textAlign:"center"}}> 
//                          <Button size='lg' variant="success"  type="submit" onClick={submit}>Submit</Button>
//                           </Container>

//                         </Form.Group>
//                     </Form></Card.Body>
//                 </Card>
//             </Col>

//         </Row>
//     </Container>
//     )

// }
// export default Login;
import { Col, Row, Container, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from './LoginContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Login = () => {
  const ctx = useContext(LoginContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if user is already logged in, and redirect to products page if so
    if (ctx.isLoggedIn) {
      history.replace('/Sharp/products');
    }
  }, [ctx.isLoggedIn, history]);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUvqi5PJyduweg6GBYJ3g3FtdVS_qvIGA',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        ctx.login(data.idToken);
        localStorage.setItem('token', data.idToken);
        history.replace('/Sharp/products');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={9}>
          <Card>
            <Card.Header
              className='p-3'
              style={{
                backgroundColor: 'darkGrey',
                textAlign: 'center',
                color: 'DarkGreen',
              }}
            >
              <h4>Login</h4>
            </Card.Header>

            <Card.Body className='p-5' style={{ backgroundColor: 'orange' }}>
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Control
                    size='lg'
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Control
                    size='lg'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-1'>
                  <Container style={{ textAlign: 'center' }}>
                    <Button
                      size='lg'
                      variant='success'
                      type='submit'
                      onClick={submit}
                    >
                      Submit
                    </Button>
                  </Container>
                </Form.Group>
                {errorMessage && (
                  <p className='text-danger mt-3'>{errorMessage}</p>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
