import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/productSlice'
import { Button, Card } from 'react-bootstrap'
import { add } from './store/cartSlice'
import { Link, useParams } from 'react-router-dom'
import { BsFillStarFill } from "react-icons/bs";

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id, 'hhhhhhhhhhhhhhhhhhhhh')
    const dispatch=useDispatch()
    const products = useSelector(state=> state.products.data)

    useEffect(()=>{
       dispatch(getProducts())
       
  }, [dispatch])

  const buyItem=(item)=>{
    dispatch(add(item))
  }

  const product =  products.find(item => item.id == id);
  console.log(product)

  if (!product) return <div style={{textAlign:'center', fontWeight:'bold', marginTop:'20%'}}>No Product Found</div>;
  return (
    <div style={{padding:"1%"}}>
    <Card style={{ width: '50rem',textAlign:'center', margin: '0 auto', padding:'2%' }}>
        <h4 style={{textAlign:'start', color:'orange'}}>Category: <span style={{color:'black'}}>{product.category}</span></h4>
        <hr />
        <div style={{ textAlign: 'center' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src={product.image} />
        </div>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <div style={{display:'flex', justifyContent:'space-around', marginLeft:'-40%'}}>
            <Card.Text>
               Rating: {product.rating.rate}  <span style={{color:"#FFC300"}}><BsFillStarFill /></span>
            </Card.Text>
            <Card.Title style={{marginLeft:"-35%", fontWeight:'bold'}}>
                INR: {product.price} /-
            </Card.Title>
            </div>
        </Card.Body>
        <Card.Footer>
            <Link to='/cart'><Button variant="success" onClick={() => buyItem(product)}>Buy Item</Button></Link>
        </Card.Footer>
    </Card>
</div>
  )
}

export default ProductDetails