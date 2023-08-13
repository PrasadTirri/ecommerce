import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './store/productSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch=useDispatch()
  
  const products = useSelector(state=> state.products.data)

   useEffect(()=>{
      dispatch(getProducts())
      
 }, [dispatch])
console.log(products)
   
    const cards= products?.map((item,index)=>(
      <div key={index} className='col-md-3 mb-3 p-5' style={{textAlign:"center"}} >
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
       <Link to={`/product/${item.id}`} ><Button variant="primary" >View Item</Button></Link>
       </Card.Footer>
    </Card>
    </div>
    
    ))
  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Products