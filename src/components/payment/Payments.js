import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {

    const onToken=(token)=>{
        console.log(token)
        alert('Payment Successful');
    }
  return (
    <div>
        <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51NeTWPSI0fgwwXFUuvkXe91TjhgWYmaywWfvRSvtE0Ita7STB7I4AMlNNqKM4llSAIGpAzU82tjTJ2BtB9h732uD003PXI7xQX"
      />
        
    </div>
  )
}

export default Payments