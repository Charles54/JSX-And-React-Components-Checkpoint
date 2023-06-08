import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';
import { Card } from 'react-bootstrap';

const App = () => {
  const firstName = "";

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
            <Image src={product.image} />
          </Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      
    </div>
  );
}

export default App;
