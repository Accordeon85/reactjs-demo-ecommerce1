import React, { useState, useEffect } from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap'
import '../bootstrap.min.css'
import '../style/articles.css';
const requireImage = nomImage => {
  try {
    return require(`../images/${nomImage}`)
  } catch(err) {
    return require(`../images/default.png`)
  }
}

const formatPrice = price => `${price} €`

const ArticleContainer = ({article, updateBasket, isInBasket = false}) => {

  const panierButton = isInBasket ? 
  (
    <Button size="sm" className='btnRemoveFromBasket' onClick={updateBasket}>
    Retirer du panier
    </Button>
  ) : 
  (
    <Button size="sm" className='btnAddToBasket' onClick={updateBasket}>
    Ajouter au panier
    </Button>
  )

  return (
    <Container className='articlecontainer'>
      <Row>
        <Col sm="2">
          <img src={requireImage(article.imageLink)} verticalAlign='middle' className='articleimage' alt={article.imageLink} />
        </Col>
        <Col sm="4">
          <span>
            <h4>{article.name}</h4>
          </span>
          <div className='price'>{formatPrice(article.price)}</div>
          <span>
            <ul>
              {article.description.split('\n').map(d => <li key={d} >{d}</li>)}
            </ul>
          </span>
        </Col>
        <Col sm="6" style={{marginTop:"1em"}}>
          {panierButton}
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleContainer;