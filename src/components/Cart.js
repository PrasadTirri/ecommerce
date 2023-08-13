import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from './store/cartSlice';
import { Link } from 'react-router-dom';
import Payments from './payment/Payments';


const Cart = () => {
  const dispatch=useDispatch()
  const cartSelector=useSelector(state=> state.cart)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted!", formData);
    } else {
      setErrors(validationErrors);
    }
  }

  const validate = (data) => {
    let validationErrors = {};

    if (!data.username) validationErrors.username = "Username is required.";
    else if (data.username.length < 3) validationErrors.username = "Username must be at least 3 characters.";
    else validationErrors.username='';

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!data.email) validationErrors.email = "Email is required.";
    else if (!emailPattern.test(data.email)) validationErrors.email = "Enter a valid email.";
    else validationErrors.email='';

    if (data.contactNumber && data.contactNumber.length !== 10) validationErrors.contactNumber = "Contact number must be 10 digits.";
    else validationErrors.contactNumber='';

    if (!data.password) validationErrors.password = "Password is required.";
    else if (data.password.length < 6) validationErrors.password = "Password must be at least 6 characters.";
    else validationErrors.password='';

    return validationErrors;
  }

  const removeItem=(id)=>{
    dispatch(remove(id))
  }

  const proItems=cartSelector.map((item)=>(
    <>
    <div className='col-md-3 mb-3 p-5' style={{textAlign:"center"}} >
    <Card style={{ width: '18rem' }} className='h-100'>
    <div style={{textAlign:'center'}}>
    <Card.Img style={{height:'200px', width:'200px'}} variant="top" src={item.image} />
    </div>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
      INR: {item.price}
      </Card.Text>
     
    </Card.Body>
    <Card.Footer>
     <Button variant="danger" onClick={()=>removeItem(item.id)}>Remove Item</Button>
     </Card.Footer>
  </Card>
  </div>
  
</>
  ))
  return (
    <>
    <div style={{display:'flex'}}>
      {proItems }      
      <div style={{ marginLeft:'80%'}}>
      <Payments />
        </div> 
    </div>
    
  </>
  )
}

export default Cart