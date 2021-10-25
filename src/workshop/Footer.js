import React from 'react'
import { Card, Button } from 'react-bootstrap'

const FooterVars = () => {
    return (
        <div>

 <Card className="text-center foot">
   <Card.Body className="bg bg-dark text-white">
    <Card.Title>Special title treatment</Card.Title>

    <Button variant="warning">Contact Us</Button>
    <Card.Text>
      CopyRight <i className="far fa-copyright"> 2021</i>
    </Card.Text>
    
  </Card.Body>
  
</Card>
        </div>
    )
}

export default FooterVars
