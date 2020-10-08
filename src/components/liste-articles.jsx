import React from 'react';
import '../style/articles.css';
import ArticleContainer from '../components/article-container';
import { useParams } from "react-router-dom";
import { addToBasket, removeFromBasket } from "../store/action";
import { connect } from 'react-redux'

const InternalArticles = (props) => {
  const articles = props.category ? 
    props.articles.filter(a => a.category === props.category) :
    props.articles
  return (
    articles.map(element => 
      <div key={element.id}>
        <ArticleContainer article={element} isInBasket={props.isInBasket(element.id)} updateBasket={() => props.onUpdateBasket(element.id)} />
      </div>
  ));
}

const ListeArticles = ({articles, basket, addToBasket, removeFromBasket}) => {
  const { category } = useParams()
  let filteredarticles = []
  filteredarticles = category ?
    articles.filter(elm => elm.category === category) :
    articles
  
  const isInBasket = articleId => {
    const article = filteredarticles.find(a => a.id === articleId)
    return basket.includes(article)
  }
  
  const updateBasket = articleId => {
    return isInBasket(articleId) ? removeFromBasket(articleId) : addToBasket(articleId)
  }

  return (
    <div className='articles'>
      <InternalArticles articles={filteredarticles} isInBasket={isInBasket} category={category} onUpdateBasket={updateBasket} />
    </div>
  );
}


const mapStateToProps = ({ basket }) => {
  return {
    basket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToBasket: id => dispatch(addToBasket(id)),
    removeFromBasket: id => dispatch(removeFromBasket(id))
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(ListeArticles);